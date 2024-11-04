import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'UserVehicle-new',
  templateUrl: './UserVehicle-new.component.html',
  styleUrls: ['./UserVehicle-new.component.scss']
})
export class UserVehicleNewComponent {
  @ViewChild("UserVehicleForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}