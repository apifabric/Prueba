import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './GpsDatum-card.component.html',
  styleUrls: ['./GpsDatum-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.GpsDatum-card]': 'true'
  }
})

export class GpsDatumCardComponent {


}