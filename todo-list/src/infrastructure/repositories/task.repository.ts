import { TaskRepository } from "src/domain/repositories/task-repository.interface";
import { Task } from "src/domain/entities/task.entity";
import { Injectable } from "@nestjs/common";

@Injectable()
export class TaskMemoryRepository implements TaskRepository {
    private tasks : Task[] = [];

    async create(task: Task): Promise<Task>{
        this.tasks.push(task);
        return task;
    }

    async findAll(): Promise<Task[]> {
        return this.tasks;
    }
}