import { Component } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent {
  todos: any[] = [];

  constructor(private todosService: TodoService) {}

  ngOnInit(): void {
    
    // this.todosService.getTodos().subscribe((res: any) => {
    //   console.log(res);
    //   this.todos = res;
    //   console.log(this.todos);
    // });

    // this.todosService
    //   .getComments(10)
    //   .subscribe((res: any) => console.log('Comments: ', res));

    // this.todosService
    //   .getPosts()
    //   .subscribe((res) => console.log('Posts: ', res));
  }

  updatePost() {
    this.todosService.postSource.next('Información');
  }
}
