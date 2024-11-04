import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaintenanceScheduleHomeComponent } from './home/MaintenanceSchedule-home.component';
import { MaintenanceScheduleNewComponent } from './new/MaintenanceSchedule-new.component';
import { MaintenanceScheduleDetailComponent } from './detail/MaintenanceSchedule-detail.component';

const routes: Routes = [
  {path: '', component: MaintenanceScheduleHomeComponent},
  { path: 'new', component: MaintenanceScheduleNewComponent },
  { path: ':id', component: MaintenanceScheduleDetailComponent,
    data: {
      oPermission: {
        permissionId: 'MaintenanceSchedule-detail-permissions'
      }
    }
  }
];

export const MAINTENANCESCHEDULE_MODULE_DECLARATIONS = [
    MaintenanceScheduleHomeComponent,
    MaintenanceScheduleNewComponent,
    MaintenanceScheduleDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaintenanceScheduleRoutingModule { }