import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './ServiceRecord-card.component.html',
  styleUrls: ['./ServiceRecord-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.ServiceRecord-card]': 'true'
  }
})

export class ServiceRecordCardComponent {


}