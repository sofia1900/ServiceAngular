import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Post} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private httpClient : HttpClient) { }
  getPost () : Observable<Post> {
    const postUrl = "http://jsonplaceholder.typicode.com/posts/1"
    return this.httpClient.get<Post>(postUrl)
  }
}
