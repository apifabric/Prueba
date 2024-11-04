import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {USERVEHICLE_MODULE_DECLARATIONS, UserVehicleRoutingModule} from  './UserVehicle-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    UserVehicleRoutingModule
  ],
  declarations: USERVEHICLE_MODULE_DECLARATIONS,
  exports: USERVEHICLE_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UserVehicleModule { }