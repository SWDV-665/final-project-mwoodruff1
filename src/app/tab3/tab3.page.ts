import { Component } from '@angular/core';
import { DatahandlerService } from '../datahandler.service';
import { AlertControllerService } from '../alert-controller.service';
import { ToastController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public toastCtrl: ToastController, public alertCtrl: AlertController, public dataService: DatahandlerService, public inputDialogService: AlertControllerService) {}
  loadExpiredTasks() {
    return this.dataService.getExpiredTasks();
  }  

  async removeExpiredTask(task, index) {
    console.log("Removing ExpiredTask: ", task, index);
    this.dataService.removeExpiredTask(index);  
  }


}
