import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {SERVICERECORD_MODULE_DECLARATIONS, ServiceRecordRoutingModule} from  './ServiceRecord-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    ServiceRecordRoutingModule
  ],
  declarations: SERVICERECORD_MODULE_DECLARATIONS,
  exports: SERVICERECORD_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ServiceRecordModule { }