import { Task } from "src/domain/entities/task.entity";
import { TaskRepository } from "src/domain/repositories/task-repository.interface";
export declare class CreateTaskUseCase {
    private readonly taskRepository;
    constructor(taskRepository: TaskRepository);
    execute(title: string): Promise<Task>;
}
