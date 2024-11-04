import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'MaintenanceSchedule-new',
  templateUrl: './MaintenanceSchedule-new.component.html',
  styleUrls: ['./MaintenanceSchedule-new.component.scss']
})
export class MaintenanceScheduleNewComponent {
  @ViewChild("MaintenanceScheduleForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}