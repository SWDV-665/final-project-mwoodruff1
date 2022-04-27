import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatahandlerService {
  activeTasks = []
  expiredTasks = []

  constructor() { }

  getActiveTasks() {
    return this.activeTasks;
  }

  removeActiveTask(index) {
    this.activeTasks.splice(index, 1);
  }

  addActiveTask(task) {
    this.activeTasks.push(task);
  }

  editActiveTask(task, index) {
    this.activeTasks[index] = task;
  }

  //Expired Task Handling

  getExpiredTasks() {
    return this.expiredTasks;
  }

  removeExpiredTask(index) {
    this.expiredTasks.splice(index, 1);
  }

  addExpiredTask(task) {
    console.log("Adding Expired Task " + task)
    this.expiredTasks.push(task);
  }

  editExpiredTask(task, index) {
    this.expiredTasks[index] = task;
  }
}
