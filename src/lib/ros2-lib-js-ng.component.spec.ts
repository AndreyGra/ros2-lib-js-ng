import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ros2LibJsNgComponent } from './ros2-lib-js-ng.component';

describe('Ros2LibJsNgComponent', () => {
  let component: Ros2LibJsNgComponent;
  let fixture: ComponentFixture<Ros2LibJsNgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ros2LibJsNgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ros2LibJsNgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
