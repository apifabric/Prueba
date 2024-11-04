import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Route-card.component.html',
  styleUrls: ['./Route-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Route-card]': 'true'
  }
})

export class RouteCardComponent {


}