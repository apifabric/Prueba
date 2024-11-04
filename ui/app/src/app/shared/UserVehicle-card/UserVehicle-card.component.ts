import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './UserVehicle-card.component.html',
  styleUrls: ['./UserVehicle-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.UserVehicle-card]': 'true'
  }
})

export class UserVehicleCardComponent {


}