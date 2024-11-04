import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehicleHomeComponent } from './home/Vehicle-home.component';
import { VehicleNewComponent } from './new/Vehicle-new.component';
import { VehicleDetailComponent } from './detail/Vehicle-detail.component';

const routes: Routes = [
  {path: '', component: VehicleHomeComponent},
  { path: 'new', component: VehicleNewComponent },
  { path: ':id', component: VehicleDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Vehicle-detail-permissions'
      }
    }
  },{
    path: ':vehicle_id/Alert', loadChildren: () => import('../Alert/Alert.module').then(m => m.AlertModule),
    data: {
        oPermission: {
            permissionId: 'Alert-detail-permissions'
        }
    }
},{
    path: ':vehicle_id/GpsDatum', loadChildren: () => import('../GpsDatum/GpsDatum.module').then(m => m.GpsDatumModule),
    data: {
        oPermission: {
            permissionId: 'GpsDatum-detail-permissions'
        }
    }
},{
    path: ':vehicle_id/MaintenanceSchedule', loadChildren: () => import('../MaintenanceSchedule/MaintenanceSchedule.module').then(m => m.MaintenanceScheduleModule),
    data: {
        oPermission: {
            permissionId: 'MaintenanceSchedule-detail-permissions'
        }
    }
},{
    path: ':vehicle_id/ServiceRecord', loadChildren: () => import('../ServiceRecord/ServiceRecord.module').then(m => m.ServiceRecordModule),
    data: {
        oPermission: {
            permissionId: 'ServiceRecord-detail-permissions'
        }
    }
},{
    path: ':vehicle_id/Trip', loadChildren: () => import('../Trip/Trip.module').then(m => m.TripModule),
    data: {
        oPermission: {
            permissionId: 'Trip-detail-permissions'
        }
    }
},{
    path: ':vehicle_id/UserVehicle', loadChildren: () => import('../UserVehicle/UserVehicle.module').then(m => m.UserVehicleModule),
    data: {
        oPermission: {
            permissionId: 'UserVehicle-detail-permissions'
        }
    }
}
];

export const VEHICLE_MODULE_DECLARATIONS = [
    VehicleHomeComponent,
    VehicleNewComponent,
    VehicleDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehicleRoutingModule { }