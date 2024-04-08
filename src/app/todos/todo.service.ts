import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private http: HttpClient) {}

  getTodos() {
    return this.http.get('https://jsonplaceholder.typicode.com/todos');
  }

  getComments(postId:number){
    const params ={
      postId,
    }; 
    return this.http.get(`https://jsonplaceholder.typicode.com/comments`, {params});
  }

  }
}
