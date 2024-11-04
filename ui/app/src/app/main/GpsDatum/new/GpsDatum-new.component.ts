import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'GpsDatum-new',
  templateUrl: './GpsDatum-new.component.html',
  styleUrls: ['./GpsDatum-new.component.scss']
})
export class GpsDatumNewComponent {
  @ViewChild("GpsDatumForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}