import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {MAINTENANCESCHEDULE_MODULE_DECLARATIONS, MaintenanceScheduleRoutingModule} from  './MaintenanceSchedule-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    MaintenanceScheduleRoutingModule
  ],
  declarations: MAINTENANCESCHEDULE_MODULE_DECLARATIONS,
  exports: MAINTENANCESCHEDULE_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MaintenanceScheduleModule { }