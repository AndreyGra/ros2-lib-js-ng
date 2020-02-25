import { ROS2_LIB_CONFIG } from './ros2-lib-js-ng.config.token';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { Ros2LibJsNgComponent } from './ros2-lib-js-ng.component';
import { Ros2LibJsConfig } from './ros2-lib-js-ng.config';



@NgModule({
  declarations: [Ros2LibJsNgComponent],
  imports: [
  ],
  exports: [Ros2LibJsNgComponent]
})

export class Ros2LibJsNgModule {
  static forRoot(ros2LibJsConfig: Ros2LibJsConfig): ModuleWithProviders {
    return {
      ngModule: Ros2LibJsNgModule,
      providers: [
        {
          provide: ROS2_LIB_CONFIG,
          useValue: ros2LibJsConfig
        }

      ]
    };
  }
}
