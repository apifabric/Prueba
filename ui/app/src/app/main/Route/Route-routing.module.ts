import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteHomeComponent } from './home/Route-home.component';
import { RouteNewComponent } from './new/Route-new.component';
import { RouteDetailComponent } from './detail/Route-detail.component';

const routes: Routes = [
  {path: '', component: RouteHomeComponent},
  { path: 'new', component: RouteNewComponent },
  { path: ':id', component: RouteDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Route-detail-permissions'
      }
    }
  },{
    path: ':route_id/Checkpoint', loadChildren: () => import('../Checkpoint/Checkpoint.module').then(m => m.CheckpointModule),
    data: {
        oPermission: {
            permissionId: 'Checkpoint-detail-permissions'
        }
    }
}
];

export const ROUTE_MODULE_DECLARATIONS = [
    RouteHomeComponent,
    RouteNewComponent,
    RouteDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RouteRoutingModule { }