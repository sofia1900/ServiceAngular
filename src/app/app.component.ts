import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {Post} from "./common/interfaces";
import {PostsService} from "./service/posts.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public post! : Post;
  constructor(private postService : PostsService) {
    this.postService.getPost().subscribe( postData => {
        this.post = postData;
    })
  }
}
