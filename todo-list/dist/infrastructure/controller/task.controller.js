"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskController = void 0;
const common_1 = require("@nestjs/common");
const create_task_usecase_1 = require("../../application/usecases/create-task.usecase");
const list_tasks_usecase_1 = require("../../application/usecases/list-tasks.usecase");
const complete_task_usecase_1 = require("../../application/usecases/complete-task.usecase");
const find_task_usucase_1 = require("../../application/usecases/find-task.usucase");
let TaskController = class TaskController {
    createTaskUserCase;
    listTasksUseCase;
    completeTaskUseCase;
    findTaskUseCases;
    constructor(createTaskUserCase, listTasksUseCase, completeTaskUseCase, findTaskUseCases) {
        this.createTaskUserCase = createTaskUserCase;
        this.listTasksUseCase = listTasksUseCase;
        this.completeTaskUseCase = completeTaskUseCase;
        this.findTaskUseCases = findTaskUseCases;
    }
    async createTask(title) {
        return await this.createTaskUserCase.execute(title);
    }
    async listTasks() {
        return this.listTasksUseCase.execute();
    }
    async findById(id) {
        return this.findTaskUseCases.execute(id);
    }
    async completeTask(id) {
        return this.completeTaskUseCase.execute(id);
    }
};
exports.TaskController = TaskController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)('title')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "createTask", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "listTasks", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "findById", null);
__decorate([
    (0, common_1.Put)(':id/complete'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "completeTask", null);
exports.TaskController = TaskController = __decorate([
    (0, common_1.Controller)('tasks'),
    __metadata("design:paramtypes", [create_task_usecase_1.CreateTaskUseCase,
        list_tasks_usecase_1.ListTasksUseCase,
        complete_task_usecase_1.CompleteTaskUseCase,
        find_task_usucase_1.FindTasksUseCase])
], TaskController);
//# sourceMappingURL=task.controller.js.map