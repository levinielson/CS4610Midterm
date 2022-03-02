import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { toNumber } from 'lodash';
import { Skip } from 'server/decorators/skip.decorator';
import { Todo } from 'server/entities/todo.entity';
import { AuthGuard } from 'server/providers/guards/auth.guard';
import { TodosService } from 'server/providers/services/todos.service';

class TodoPostBody {
  content: string;
  isComplete: boolean;
}

@Controller()
@Skip(AuthGuard)
export class Question5Controller {
  constructor(private todosService: TodosService) {}

  @Get('/todos')
  public async index() {
    const todos = await this.todosService.findAll();
    return { todos };
  }

  @Post('/todos')
  public async create(@Body() body: TodoPostBody) {
    let todo = new Todo();
    todo.content = body.content;
    todo.isComplete = body.isComplete;
    todo = await this.todosService.create(todo);
    return { todo };
  }

  @Put('/todos/:id')
  public async updateComplete(@Param('id') id : string) {
    const todo = await this.todosService.updateCompleted(toNumber(id));
    return { todo }
  }
}
