import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Trip-card.component.html',
  styleUrls: ['./Trip-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Trip-card]': 'true'
  }
})

export class TripCardComponent {


}