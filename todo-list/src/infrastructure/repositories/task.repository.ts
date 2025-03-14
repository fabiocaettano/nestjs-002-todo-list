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

    async findById(id: string): Promise<Task | null>{
        return this.tasks.find((task) => task.id === id) || null;
    }

    async update(task: Task): Promise<Task> {
        const index = this.tasks.findIndex((t) => t.id === task.id);
        this.tasks[index] = task;
        return task;
      }
}