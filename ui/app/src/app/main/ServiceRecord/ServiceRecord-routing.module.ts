import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceRecordHomeComponent } from './home/ServiceRecord-home.component';
import { ServiceRecordNewComponent } from './new/ServiceRecord-new.component';
import { ServiceRecordDetailComponent } from './detail/ServiceRecord-detail.component';

const routes: Routes = [
  {path: '', component: ServiceRecordHomeComponent},
  { path: 'new', component: ServiceRecordNewComponent },
  { path: ':id', component: ServiceRecordDetailComponent,
    data: {
      oPermission: {
        permissionId: 'ServiceRecord-detail-permissions'
      }
    }
  }
];

export const SERVICERECORD_MODULE_DECLARATIONS = [
    ServiceRecordHomeComponent,
    ServiceRecordNewComponent,
    ServiceRecordDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceRecordRoutingModule { }