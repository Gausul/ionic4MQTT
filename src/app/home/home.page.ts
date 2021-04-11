import { Component,Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

import { IMqttMessage, MqttModule, MqttService } from 'ngx-mqtt';
import { Observable,Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  sensor1:any;
  constructor( private _mqttService: MqttService,public toastController: ToastController) {
    
    _mqttService.connect({username: '[username]', password: '[Password]'});
  
    this._mqttService.observe('[subscribe topic]').subscribe((message: IMqttMessage) => {  
          this.sensor1 = message.payload.toString();
          console.log(this.sensor1);
          //console.log("System Connected");
   },(e) => {
    //  alert('Not Connected');
    console.log("Not Connected");
  });
  this.reconnect();
  }


  publishMessage()
 {
  let mqttjson:any='{"sendmsg":"ok"}';
  this._mqttService.unsafePublish("publish topic", mqttjson, {qos: 0, retain: false});
}

//connect app on load
 reconnect()
 {
   console.log('check connection');
    this._mqttService.unsafePublish("connect", 'connect', {qos: 0, retain: false});
    this._mqttService.observe('connect').subscribe((message: IMqttMessage) => {  
      //check connection
      console.log(message.payload.toString());
      //console.log("System Connected");
      },(e) => {
      alert('Not Connected');
      });
 }



}
