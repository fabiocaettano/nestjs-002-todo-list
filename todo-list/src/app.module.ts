import { Module } from '@nestjs/common';
import { TaskController } from './infrastructure/controller/task.controller';
import { TaskMemoryRepository } from './infrastructure/repositories/task.repository';
import { CreateTaskUseCase } from './application/usecases/create-task.usecase';
import { ListTasksUseCase } from './application/usecases/list-tasks.usecase';

@Module({
  controllers: [TaskController],
  providers: [
    {
      provide: 'TaskRepository',
      useClass: TaskMemoryRepository,
    },
    CreateTaskUseCase,
    ListTasksUseCase,
  ],
})
export class AppModule {}
