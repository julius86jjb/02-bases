import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h1>Hola {{title}}</h1>
  <h3>Counter: {{ counter }}</h3>
  <button (click)="increaseBy(+1)">+1</button>
  <button (click)="increaseBy(-1)">-1</button>
  <button (click)="reset()">Reset</button>
  `,
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  constructor() { }

  public title: string = 'Fernandito Herrera Sucks';
  public counter: number = 19;

  increaseBy(value: number): void {
    this.counter += value;
  }


  reset() {
    this.counter = 10;
  }

}
