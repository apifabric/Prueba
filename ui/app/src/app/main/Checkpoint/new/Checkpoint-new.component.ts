import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'Checkpoint-new',
  templateUrl: './Checkpoint-new.component.html',
  styleUrls: ['./Checkpoint-new.component.scss']
})
export class CheckpointNewComponent {
  @ViewChild("CheckpointForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}