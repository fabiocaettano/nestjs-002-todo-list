import { TaskRepository } from '../../domain/repositories/task-repository.interface';
import { Task } from '../../domain/entities/task.entity';
export declare class FindTasksUseCase {
    private readonly taskRepository;
    constructor(taskRepository: TaskRepository);
    execute(id: string): Promise<Task | null>;
}
