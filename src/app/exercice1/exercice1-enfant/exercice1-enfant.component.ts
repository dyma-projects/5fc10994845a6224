import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {

  @Input() public compteur: number;
  @Output() public resultEvent: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  incrementer(): void {
    this.compteur ++;
    this.resultEvent.emit(this.compteur);
  }

  decrementer(): void {
    this.compteur --;
    this.resultEvent.emit(this.compteur);
  }
}
