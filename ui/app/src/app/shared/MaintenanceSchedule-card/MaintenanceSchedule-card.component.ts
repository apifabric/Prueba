import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './MaintenanceSchedule-card.component.html',
  styleUrls: ['./MaintenanceSchedule-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.MaintenanceSchedule-card]': 'true'
  }
})

export class MaintenanceScheduleCardComponent {


}