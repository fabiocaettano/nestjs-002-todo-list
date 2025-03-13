import { Injectable } from "@nestjs/common";
import { Task } from "src/domain/entities/task.entity";
import { TaskRepository } from "src/domain/repositories/task-repository.interface";

@Injectable()
export class CreateTaskUseCase{
    constructor(private readonly taskRepository: TaskRepository){}

    async execute(title: string): Promise<Task> {
        const task = new Task();
        task.id = Math.random().toString(36).substring(2,9);
        task.title = title;
        task.completed = false;
        return await this.taskRepository.create(task);
    }
}