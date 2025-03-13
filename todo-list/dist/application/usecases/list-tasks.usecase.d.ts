import { TaskRepository } from '../../domain/repositories/task-repository.interface';
import { Task } from '../../domain/entities/task.entity';
export declare class ListTasksUseCase {
    private readonly taskRepository;
    constructor(taskRepository: TaskRepository);
    execute(): Promise<Task[]>;
}
