import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';

export const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
        { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
        { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) },
      
    
        { path: 'Alert', loadChildren: () => import('./Alert/Alert.module').then(m => m.AlertModule) },
    
        { path: 'Checkpoint', loadChildren: () => import('./Checkpoint/Checkpoint.module').then(m => m.CheckpointModule) },
    
        { path: 'Driver', loadChildren: () => import('./Driver/Driver.module').then(m => m.DriverModule) },
    
        { path: 'GpsDatum', loadChildren: () => import('./GpsDatum/GpsDatum.module').then(m => m.GpsDatumModule) },
    
        { path: 'Location', loadChildren: () => import('./Location/Location.module').then(m => m.LocationModule) },
    
        { path: 'MaintenanceSchedule', loadChildren: () => import('./MaintenanceSchedule/MaintenanceSchedule.module').then(m => m.MaintenanceScheduleModule) },
    
        { path: 'Route', loadChildren: () => import('./Route/Route.module').then(m => m.RouteModule) },
    
        { path: 'ServiceRecord', loadChildren: () => import('./ServiceRecord/ServiceRecord.module').then(m => m.ServiceRecordModule) },
    
        { path: 'Trip', loadChildren: () => import('./Trip/Trip.module').then(m => m.TripModule) },
    
        { path: 'User', loadChildren: () => import('./User/User.module').then(m => m.UserModule) },
    
        { path: 'UserVehicle', loadChildren: () => import('./UserVehicle/UserVehicle.module').then(m => m.UserVehicleModule) },
    
        { path: 'Vehicle', loadChildren: () => import('./Vehicle/Vehicle.module').then(m => m.VehicleModule) },
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }