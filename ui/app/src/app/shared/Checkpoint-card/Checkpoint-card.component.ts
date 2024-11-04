import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Checkpoint-card.component.html',
  styleUrls: ['./Checkpoint-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Checkpoint-card]': 'true'
  }
})

export class CheckpointCardComponent {


}