import { Component } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {

  constructor(private todosService: TodoService) {}

  ngOnInit():void{
    this.todosService.posts$.subscribe((res)=>{
      console.log('Nueva data: ',res);
    })
  }

}
