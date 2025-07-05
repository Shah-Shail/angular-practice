import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  task = '';
  taskList: { id: number; task: string }[] = [];
  editTaskData: { id?: number; task?: string } = {};

  addTask() {
    if (!this.editTaskData.id) {
      this.taskList.push({ id: this.taskList.length + 1, task: this.task });
    } else {
      let findIndex = this.taskList.findIndex(
        (item) => item.id === this.editTaskData.id
      );
      this.taskList[findIndex] = {
        id: this.editTaskData.id,
        task: this.task,
      };
      this.editTaskData = {};
    }
    this.task = '';
  }

  editTask(task: { id: number; task: string }) {
    this.editTaskData = task;
    this.task = task.task;
  }

  deleteTask(taskId: number) {
    this.taskList = this.taskList.filter((item) => item.id != taskId);
  }
}
