import { Injectable, Inject } from '@nestjs/common';
import { TaskRepository } from '../../domain/repositories/task-repository.interface';
import { Task } from '../../domain/entities/task.entity';

@Injectable()
export class FindTasksUseCase {
  constructor(
    @Inject('TaskRepository')
    private readonly taskRepository: TaskRepository) {}

  async execute(id: string) : Promise<Task | null>  {
    const task = await this.taskRepository.findById(id);

    if (!task) {
      throw new Error('Task not found');
    }

    return task;
  }
}