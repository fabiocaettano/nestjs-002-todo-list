import { Body, Controller, Post, Get } from "@nestjs/common";
import { CreateTaskUseCase } from "src/application/usecases/create-task.usecase";
import { ListTasksUseCase } from "src/application/usecases/list-tasks.usecase";

@Controller('tasks')
export class TaskController{
    constructor(
        private readonly createTaskUserCase: CreateTaskUseCase,
        private readonly listTasksUseCase: ListTasksUseCase,
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
}