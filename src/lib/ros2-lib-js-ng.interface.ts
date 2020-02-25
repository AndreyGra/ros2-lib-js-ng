export interface TopicDefinition {
  name: string;
  messageType: string;
}

export interface ServiceDefinition {
  name: string;
  serviceType: string;
}

// T: message type
export interface Message {
  data: any ;
}

// TR: Typeof Request, TQ: Typeof Answer
export interface Service {
  advertise( callback: (req: any, resp: any) => boolean): void;
  callService( request: any, callback: (result: any) => void): void;
  unadvertise();
}

// TM: Typeof Message
export interface Topic {
  publish(msg: Message): void;
  subscribe( callback: (msg: any ) => void): void;
  unsubscribe();
}

// Unexported Defs
export interface RoslibTopicDefinition {
  ros: any;
  name: string;
  messageType: string;
}

export interface RoslibServiceDefinition {
  ros: any;
  name: string;
  serviceType: string;
}

