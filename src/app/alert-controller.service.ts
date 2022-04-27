import { Injectable } from '@angular/core';
import { DatahandlerService } from './datahandler.service';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertControllerService {

  constructor(public alertCtrl: AlertController, public dataService: DatahandlerService) { }

  async showPrompt(task?, index?) {
    const prompt = await this.alertCtrl.create({

      message: task ? "Editing Task" : "Creating Task",
      inputs: [
        {
          name: 'name',
          placeholder: 'Name',
          value: task ? task.name : null
        },
        {
          name: 'description',
          placeholder: 'Description',
          value: task ? task.description : null
        },
        {
          name: 'dueDate',
          type: "date",
          placeholder: 'MM/DD/YYY',
          value: task ? task.dueDate: null
        },

      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: task => {
            console.log('Saved clicked', task);
            if (index !== undefined) {
              task["status"] = "active"
              this.dataService.editActiveTask(task, index);

            }
            else {
              task["status"] = "active"
              this.dataService.addActiveTask(task);
            }

          }
        }
      ]
    });
    prompt.present();
  }
}
