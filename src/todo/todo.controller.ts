import { Controller, Get } from '@nestjs/common';
import { Post,Put, Delete, Body, Param } from  '@nestjs/common';
import { Todo } from './todo.entity';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {

    constructor(private todoService: TodoService){}

    @Get()
    index(): Promise<Todo[]> {
        return this.todoService.findAll();
    }

    @Post('create')
    async create(@Body() todoData: Todo): Promise<any> {
      return this.todoService.create(todoData);
    }

    @Put(':id/update')
    async update(@Param('id') id, @Body() todoData: Todo): Promise<any> {
        todoData.id = Number(id);
        console.log('Update #' + todoData.id)
        return this.todoService.update(todoData);
    }

    @Delete(':id/delete')
    async delete(@Param('id') id): Promise<any> {
      return this.todoService.delete(id);
    }

}
