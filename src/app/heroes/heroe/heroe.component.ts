import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent {
  public name: string = "Pedro";
  public age: number = 45;

  get capitalizedName(): string {
    return this.name.toUpperCase();

  }

  getheroDescription(): string{
    return `${this.name} - ${this.age}`
  }

  changeName():void {
    this.name = 'Pedrito'
  }

  changeAge():void {
    this.age = 31
  }

  resetForm(): void{
    this.name =  'Pedro'
    this.age = 45
  }
}
