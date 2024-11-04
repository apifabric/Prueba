import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserVehicleHomeComponent } from './home/UserVehicle-home.component';
import { UserVehicleNewComponent } from './new/UserVehicle-new.component';
import { UserVehicleDetailComponent } from './detail/UserVehicle-detail.component';

const routes: Routes = [
  {path: '', component: UserVehicleHomeComponent},
  { path: 'new', component: UserVehicleNewComponent },
  { path: ':id', component: UserVehicleDetailComponent,
    data: {
      oPermission: {
        permissionId: 'UserVehicle-detail-permissions'
      }
    }
  }
];

export const USERVEHICLE_MODULE_DECLARATIONS = [
    UserVehicleHomeComponent,
    UserVehicleNewComponent,
    UserVehicleDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserVehicleRoutingModule { }