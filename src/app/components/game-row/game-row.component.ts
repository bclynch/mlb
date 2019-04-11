import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-game-row',
  templateUrl: './game-row.component.html',
  styleUrls: ['./game-row.component.scss']
})
export class GameRowComponent implements OnInit {
  @Input() game;

  tv: string;

  constructor() {

  }

  ngOnInit() {
    this.checkTV();
  }

  checkTV() {
    for (let i = 0; i < this.game.broadcasts.length; i++) {
      if (this.game.broadcasts[i].type === 'TV') {
        this.tv = this.game.broadcasts[i].name.split('-')[0];
        return;
      }
    }
  }
}
