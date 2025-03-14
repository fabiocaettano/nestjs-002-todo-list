import { Param, Body, Controller, Post, Get, Put } from "@nestjs/common";
import { CreateTaskUseCase } from "src/application/usecases/create-task.usecase";
import { ListTasksUseCase } from "src/application/usecases/list-tasks.usecase";
import { CompleteTaskUseCase } from "src/application/usecases/complete-task.usecase";
import { FindTasksUseCase } from "src/application/usecases/find-task.usucase";

@Controller('tasks')
export class TaskController{
    constructor(
        private readonly createTaskUserCase: CreateTaskUseCase,
        private readonly listTasksUseCase: ListTasksUseCase,
        private readonly completeTaskUseCase: CompleteTaskUseCase,
        private readonly findTaskUseCases: FindTasksUseCase
    ){}

    @Post()
    async createTask(
        @Body('title') title: string
    ){
        return await this.createTaskUserCase.execute(title);
    }

    @Get()
    async listTasks() {
        return this.listTasksUseCase.execute();
    }

    @Get(':id')
    async findById(@Param('id') id: string
    ){
        return this.findTaskUseCases.execute(id);        
    }

    @Put(':id/complete')
    async completeTask(@Param('id') id: string) {
        return this.completeTaskUseCase.execute(id);
    }
}