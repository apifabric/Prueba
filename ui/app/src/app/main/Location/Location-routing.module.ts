import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationHomeComponent } from './home/Location-home.component';
import { LocationNewComponent } from './new/Location-new.component';
import { LocationDetailComponent } from './detail/Location-detail.component';

const routes: Routes = [
  {path: '', component: LocationHomeComponent},
  { path: 'new', component: LocationNewComponent },
  { path: ':id', component: LocationDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Location-detail-permissions'
      }
    }
  },{
    path: ':location_id/Checkpoint', loadChildren: () => import('../Checkpoint/Checkpoint.module').then(m => m.CheckpointModule),
    data: {
        oPermission: {
            permissionId: 'Checkpoint-detail-permissions'
        }
    }
},{
    path: ':end_location_id/Route', loadChildren: () => import('../Route/Route.module').then(m => m.RouteModule),
    data: {
        oPermission: {
            permissionId: 'Route-detail-permissions'
        }
    }
},{
    path: ':start_location_id/Route', loadChildren: () => import('../Route/Route.module').then(m => m.RouteModule),
    data: {
        oPermission: {
            permissionId: 'Route-detail-permissions'
        }
    }
},{
    path: ':end_location_id/Trip', loadChildren: () => import('../Trip/Trip.module').then(m => m.TripModule),
    data: {
        oPermission: {
            permissionId: 'Trip-detail-permissions'
        }
    }
},{
    path: ':start_location_id/Trip', loadChildren: () => import('../Trip/Trip.module').then(m => m.TripModule),
    data: {
        oPermission: {
            permissionId: 'Trip-detail-permissions'
        }
    }
}
];

export const LOCATION_MODULE_DECLARATIONS = [
    LocationHomeComponent,
    LocationNewComponent,
    LocationDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocationRoutingModule { }