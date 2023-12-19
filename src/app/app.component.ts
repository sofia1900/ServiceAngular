import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {Post} from "./interfaces";
import {PostsService} from "./service/posts.service";
import {catchError, Observable} from "rxjs";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public hasError : boolean = false;
  public post$! : Observable<Post>;
  constructor(private postService : PostsService) {
    this.post$ = this.postService.getPost().pipe(catchError(error => {
      console.error(error);
      this.hasError = true;
      throw new Error(error);
    }))
  }
}
