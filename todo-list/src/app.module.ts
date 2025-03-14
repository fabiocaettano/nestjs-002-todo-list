import { Module } from '@nestjs/common';
import { TaskController } from './infrastructure/controller/task.controller';
import { TaskMemoryRepository } from './infrastructure/repositories/task.repository';
import { CreateTaskUseCase } from './application/usecases/create-task.usecase';
import { ListTasksUseCase } from './application/usecases/list-tasks.usecase';
import { FindTasksUseCase } from './application/usecases/find-task.usucase';
import { CompleteTaskUseCase } from './application/usecases/complete-task.usecase';

@Module({
  controllers: [TaskController],
  providers: [
    {
      provide: 'TaskRepository',
      useClass: TaskMemoryRepository,
    },
    CreateTaskUseCase,
    ListTasksUseCase,
    FindTasksUseCase,
    CompleteTaskUseCase
  ],
})
export class AppModule {}
