import { Component } from '@angular/core';
import { DatahandlerService } from '../datahandler.service';
import { AlertControllerService } from '../alert-controller.service';
import { Clipboard } from '@awesome-cordova-plugins/clipboard/ngx';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor( public dataService: DatahandlerService, public inputDialogService: AlertControllerService, public clipboard: Clipboard) {}
  loadExpiredTasks() {
    return this.dataService.getExpiredTasks();
  }  

  async copyExpiredTask(task){
    this.clipboard.copy(task)
  }

  async removeExpiredTask(task, index) {
    this.dataService.removeExpiredTask(index);  
  }


}
