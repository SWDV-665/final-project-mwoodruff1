import { Injectable } from '@angular/core';

import {Storage} from '@ionic/storage-angular'

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private _storage: Storage | null = null;

  constructor(private storage: Storage) {
    this.init()
   }
  async init(){
    const storage = await this.storage.create();
    this._storage = storage;
  }

  public storeTasks(taskList){
    console.log("Storing Data")
    this._storage?.set("tasks", taskList);
  }

  public getTasks(): Promise<any[]>{
    return this.storage.get("tasks")
  }

  public getExpiredTasks(): Promise<any[]>{
    return this.storage.get("expired")
  }

  public storeExpired(taskList){
    this._storage?.set("expired", taskList);
  }
}
