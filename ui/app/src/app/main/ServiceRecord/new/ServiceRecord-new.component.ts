import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'ServiceRecord-new',
  templateUrl: './ServiceRecord-new.component.html',
  styleUrls: ['./ServiceRecord-new.component.scss']
})
export class ServiceRecordNewComponent {
  @ViewChild("ServiceRecordForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}