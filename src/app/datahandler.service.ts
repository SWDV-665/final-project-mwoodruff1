import { ComponentFactoryResolver, Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class DatahandlerService {
  activeTasks = []
  expiredTasks = []

  constructor(public storage: StorageService) { 
    storage.getTasks().then(result => {
      if (this.activeTasks == null){
        this.activeTasks = []
      }
      else{
      this.activeTasks = result
      }
    }).catch(e => {
      console.error(e)
    });
    storage.getExpiredTasks().then(res => {
      if (this.expiredTasks == null){
        this.expiredTasks = []
      }
      else{
        this.expiredTasks = res
      }
    }).catch(e => {
      console.error(e)
    })


  }

  getActiveTasks() {
    return this.activeTasks;
  }

  removeActiveTask(index) {
    this.activeTasks.splice(index, 1);
    this.storage.storeTasks(this.activeTasks)
    
  }

  addActiveTask(task) {
    if (this.activeTasks == null){
      this.activeTasks = []
    }
    this.activeTasks.push(task);
    console.log(this.activeTasks);
    this.storage.storeTasks(this.activeTasks)
    
  }

  editActiveTask(task, index) {
    this.activeTasks[index] = task;
    this.storage.storeTasks(this.activeTasks)
  }

  //Expired Task Handling

  getExpiredTasks() {
    return this.expiredTasks;
  }

  removeExpiredTask(index) {
    this.expiredTasks.splice(index, 1);
    this.storage.storeExpired(this.expiredTasks)
  }

  addExpiredTask(task) {
    if (this.expiredTasks == null){
      this.expiredTasks = []
    }
    console.log("Adding Expired Task " + task)
    this.expiredTasks.push(task);
    this.storage.storeExpired(this.expiredTasks)
  }

  editExpiredTask(task, index) {
    this.expiredTasks[index] = task;
    this.storage.storeExpired(this.expiredTasks)
  }
}
