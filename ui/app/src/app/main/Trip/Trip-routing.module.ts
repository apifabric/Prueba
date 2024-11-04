import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TripHomeComponent } from './home/Trip-home.component';
import { TripNewComponent } from './new/Trip-new.component';
import { TripDetailComponent } from './detail/Trip-detail.component';

const routes: Routes = [
  {path: '', component: TripHomeComponent},
  { path: 'new', component: TripNewComponent },
  { path: ':id', component: TripDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Trip-detail-permissions'
      }
    }
  }
];

export const TRIP_MODULE_DECLARATIONS = [
    TripHomeComponent,
    TripNewComponent,
    TripDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TripRoutingModule { }