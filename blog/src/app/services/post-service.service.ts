import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Post} from "../classes/post";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  http:HttpClient;
  host:string;
  constructor(httpClient: HttpClient) {
    this.http=httpClient;
    this.host="http://localhost:3000/api";
  }

  public getAll():any{
    return this.http.get(this.host+"/posts");
  }
  public getOne(id):any{
    return this.http.get(this.host+"/posts/"+id);
  }
  public savePost(body):any{
    console.log(body);
    return this.http.post(this.host+"/posts",body);
  }
}
