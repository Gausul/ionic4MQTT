import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Observable } from 'rxjs';

import { IMqttMessage,MqttModule,MqttService,IMqttServiceOptions} from 'ngx-mqtt';


// define if or url in hostname 
export const MQTT_SERVICE_OPTIONS: IMqttServiceOptions = {
  hostname:'[Host Name]',
  port: 8083,
  protocol: 'wss',
  path: '/mqtt',
};


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(),MqttModule.forRoot(MQTT_SERVICE_OPTIONS), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy,},MqttService],
  bootstrap: [AppComponent],
})
export class AppModule {}
