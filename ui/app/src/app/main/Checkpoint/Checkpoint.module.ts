import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {CHECKPOINT_MODULE_DECLARATIONS, CheckpointRoutingModule} from  './Checkpoint-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    CheckpointRoutingModule
  ],
  declarations: CHECKPOINT_MODULE_DECLARATIONS,
  exports: CHECKPOINT_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CheckpointModule { }