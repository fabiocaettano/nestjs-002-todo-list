import { CreateTaskUseCase } from "src/application/usecases/create-task.usecase";
import { ListTasksUseCase } from "src/application/usecases/list-tasks.usecase";
export declare class TaskController {
    private readonly createTaskUserCase;
    private readonly listTasksUseCase;
    constructor(createTaskUserCase: CreateTaskUseCase, listTasksUseCase: ListTasksUseCase);
    createTask(title: string): Promise<import("../../domain/entities/task.entity").Task>;
    listTasks(): Promise<import("../../domain/entities/task.entity").Task[]>;
}
