import { Task } from "../entities/task.entity";
export interface TaskRepository {
    create(task: Task): Promise<Task>;
    findAll(): Promise<Task[]>;
}
