import { TaskRepository } from "src/domain/repositories/task-repository.interface";
import { Task } from "src/domain/entities/task.entity";
export declare class TaskMemoryRepository implements TaskRepository {
    private tasks;
    create(task: Task): Promise<Task>;
    findAll(): Promise<Task[]>;
    findById(id: string): Promise<Task | null>;
    update(task: Task): Promise<Task>;
}
