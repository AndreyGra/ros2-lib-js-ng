import { TopicDefinition, ServiceDefinition, RoslibTopicDefinition, RoslibServiceDefinition,
         Topic, Service, Message } from './ros2-lib-js-ng.interface';
import { ROS2_LIB_CONFIG } from './ros2-lib-js-ng.config.token';
import { Injectable, Inject } from '@angular/core';
import { Ros2LibJsConfig } from './ros2-lib-js-ng.config';


declare var ROSLIB;

@Injectable({
  providedIn: 'root'
})
export class Ros2LibJsNgService {

  private ros: any;

  constructor( @Inject(ROS2_LIB_CONFIG) private config: Ros2LibJsConfig) {

    const WsSecurePrefix = config.webSockerSecure ? 'wss' : 'ws';
    const WsUrl = WsSecurePrefix + '://' + config.ip + ':' + config.port.toString() + '/';

    this.ros = new ROSLIB.Ros();

    this.ros.on('connection', () => {
      console.log('Connection made!');
    });

    this.ros.on('close', () => {

      if (config.reconnectOnClose) {

        setTimeout(() => { this.ros.connect(WsUrl); }, 1000);
        console.log('Connection Closed. Attempting to reconnect after 1 second!');

      } else {
        console.log('Connection Closed. Will not attempt to reconnect.');
      }
    });

    this.ros.on('error', () => { return ; });

    this.ros.connect(WsUrl);
  }

  createTopic(tpc: TopicDefinition): Topic {
    const topic: RoslibTopicDefinition = {
      ros: this.ros,
      name: tpc.name,
      messageType: tpc.messageType
    };

    return new ROSLIB.Topic(topic);
  }

  createService(serv: ServiceDefinition): Service {
    const service: RoslibServiceDefinition = {
      ros: this.ros,
      name: serv.name,
      serviceType: serv.serviceType
    };

    return new ROSLIB.Service(service);
  }

  createServiceRequest(request) {
    return new ROSLIB.ServiceRequest(request);
  }

  createMessage(msg): Message {
    return new ROSLIB.Message(msg);
  }
}
