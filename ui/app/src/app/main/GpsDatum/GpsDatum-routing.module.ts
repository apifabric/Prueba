import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GpsDatumHomeComponent } from './home/GpsDatum-home.component';
import { GpsDatumNewComponent } from './new/GpsDatum-new.component';
import { GpsDatumDetailComponent } from './detail/GpsDatum-detail.component';

const routes: Routes = [
  {path: '', component: GpsDatumHomeComponent},
  { path: 'new', component: GpsDatumNewComponent },
  { path: ':id', component: GpsDatumDetailComponent,
    data: {
      oPermission: {
        permissionId: 'GpsDatum-detail-permissions'
      }
    }
  }
];

export const GPSDATUM_MODULE_DECLARATIONS = [
    GpsDatumHomeComponent,
    GpsDatumNewComponent,
    GpsDatumDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GpsDatumRoutingModule { }