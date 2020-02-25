export interface Ros2LibJsConfig {
  webSockerSecure?: boolean;
  ip: string;
  port: number;
  reconnectOnClose: boolean;
  reconnectTimeMs: number;
}
