import { Component } from '@angular/core';
import { DatahandlerService } from '../datahandler.service';
import { AlertControllerService } from '../alert-controller.service';
import { ToastController, AlertController } from '@ionic/angular';
import { Clipboard } from '@awesome-cordova-plugins/clipboard/ngx';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public toastCtrl: ToastController, public alertCtrl: AlertController, public dataService: DatahandlerService, public inputDialogService: AlertControllerService, public clipboard: Clipboard) {}
  loadActiveTasks() {
    return this.dataService.getActiveTasks();
  }  
  
  async copyActiveTask(task){
    this.clipboard.copy(task)
  }

  async removeActiveTask(task, index) {
    console.log("Removing ActiveTask: ", task, index);
    this.dataService.removeActiveTask(index); 
    var newTask = task
    newTask.status == "expired"
    this.dataService.addExpiredTask(newTask) 
    console.log("Adding Expired Task: ", newTask)
  }

  async editActiveTask(task, index) {
    console.log("Edit ActiveTask ", task, index);
    this.inputDialogService.showPrompt(task, index);
  } 

  async addActiveTask() {
    console.log("Adding ActiveTask");
    this.inputDialogService.showPrompt();
  }


}


