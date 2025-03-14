import { CreateTaskUseCase } from "src/application/usecases/create-task.usecase";
import { ListTasksUseCase } from "src/application/usecases/list-tasks.usecase";
import { CompleteTaskUseCase } from "src/application/usecases/complete-task.usecase";
import { FindTasksUseCase } from "src/application/usecases/find-task.usucase";
export declare class TaskController {
    private readonly createTaskUserCase;
    private readonly listTasksUseCase;
    private readonly completeTaskUseCase;
    private readonly findTaskUseCases;
    constructor(createTaskUserCase: CreateTaskUseCase, listTasksUseCase: ListTasksUseCase, completeTaskUseCase: CompleteTaskUseCase, findTaskUseCases: FindTasksUseCase);
    createTask(title: string): Promise<import("../../domain/entities/task.entity").Task>;
    listTasks(): Promise<import("../../domain/entities/task.entity").Task[]>;
    findById(id: string): Promise<import("../../domain/entities/task.entity").Task | null>;
    completeTask(id: string): Promise<import("../../domain/entities/task.entity").Task>;
}
