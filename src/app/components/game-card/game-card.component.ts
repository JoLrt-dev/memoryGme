import {
  style,
  transition,
  trigger,
  state,
  animate,
} from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { CardData } from 'src/app/card-data.model';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css'],

  // We define the animation trigger here. We can also define the states and transitions here but we’ll do that in the template file.
  // 'trigger' : definition of an animation. Contains set of states and transitions between them. Defined as a string & can be bound to any UI element.
  // 'state' : set of properties similar to CSS style properties which should be applied to the element when the state is active.
  // 'transition': specify the animation that should occur when the state changes. This can include the timing, etc.
  animations: [
    trigger('cardFlip', [
      state(
        'default',
        style({
          transform: 'none',
        })
      ),
      state(
        'flipped',
        style({
          transform: 'rotateY(180deg)',
        })
      ),
      state(
        'matched',
        style({
          transform: 'scale(0.05)',
          opacity: 0,
        })
      ),
      transition('default => flipped', [animate('400ms')]),
      transition('flipped => default', [animate('200ms')]),
      transition('* => matched', [animate('400ms')]),
    ]),
  ],
})
export class GameCardComponent implements OnInit {
  @Input() data: CardData;
  @Output() cardClicked = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
