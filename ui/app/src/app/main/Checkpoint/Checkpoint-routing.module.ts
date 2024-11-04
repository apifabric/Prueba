import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckpointHomeComponent } from './home/Checkpoint-home.component';
import { CheckpointNewComponent } from './new/Checkpoint-new.component';
import { CheckpointDetailComponent } from './detail/Checkpoint-detail.component';

const routes: Routes = [
  {path: '', component: CheckpointHomeComponent},
  { path: 'new', component: CheckpointNewComponent },
  { path: ':id', component: CheckpointDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Checkpoint-detail-permissions'
      }
    }
  }
];

export const CHECKPOINT_MODULE_DECLARATIONS = [
    CheckpointHomeComponent,
    CheckpointNewComponent,
    CheckpointDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckpointRoutingModule { }