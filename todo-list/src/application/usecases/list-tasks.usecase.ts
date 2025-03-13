import { Injectable, Inject } from '@nestjs/common';
import { TaskRepository } from '../../domain/repositories/task-repository.interface';
import { Task } from '../../domain/entities/task.entity';

@Injectable()
export class ListTasksUseCase {
  constructor(
    @Inject('TaskRepository')
    private readonly taskRepository: TaskRepository) {}

  async execute(): Promise<Task[]> {
    return this.taskRepository.findAll();
  }
}