import { Injectable, NotAcceptableException } from '@nestjs/common';
import { TaskStatus } from './task-status.enum';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskRepository } from './tasks.repository';
import { TaskEntity } from './tasks.entity';

@Injectable()
export class TasksService {
  // @InjectRepository(TaskRepository)
  // private taskRepository: TaskRepository;

  constructor(
    @InjectRepository(TaskRepository)
    private taskRespository: TaskRepository,
  ) {}
  // getTasks(): Task[] {
  //   return this.tasks;
  // }
  // getTaskFiltered(filterDto: GetTasksFilterDto) {
  //   const { search, status } = filterDto;
  //   let tasks = this.getTasks();
  //   if (status) {
  //     tasks = tasks.filter((task) => task.status === status);
  //   }
  //   if (search) {
  //     tasks = tasks.filter(
  //       (task) =>
  //         task.title.includes(search) || task.description.includes(search),
  //     );
  //   }
  //   return tasks;
  // }

  async getTaskByID(id: number) {
    const found = this.taskRespository.findOne(id);

    if (!found) {
      throw new NotAcceptableException(`Task with ID: ${id} not found`);
    }
    return found;
  }
  // getTaskByID(id: string): Task {
  //   const found = this.tasks.find((task) => task.id === id);
  //   if (!found) {
  //     throw new NotAcceptableException(`Task with ID: ${id} not found`);
  //   }
  //   return found;
  // }
  // createTask(createTaskDto: CreateTaskDto): Task {
  //   const { title, description } = createTaskDto;
  //   const task: Task = {
  //     id: uuidv4(),
  //     title,
  //     description,
  //     status: TaskStatus.OPEN,
  //   };
  //   this.tasks.push(task);
  //   return task;
  // }
  // deleteTask(id: string): void {
  //   this.tasks = this.tasks.filter((tasks) => tasks.id !== id);
  // }
  // updateTaskStatus(id: string, status: TaskStatus) {
  //   const task = this.getTaskByID(id);
  //   task.status = status;
  //   return task;
  // }
}
