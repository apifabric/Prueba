import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {GPSDATUM_MODULE_DECLARATIONS, GpsDatumRoutingModule} from  './GpsDatum-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    GpsDatumRoutingModule
  ],
  declarations: GPSDATUM_MODULE_DECLARATIONS,
  exports: GPSDATUM_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GpsDatumModule { }