import { Injectable } from '@angular/core';
import { v4 as uuid } from "uuid";

import { Person } from '../interfaces/person.interface';

@Injectable({
  providedIn: 'root'
})

export class DbzService {

  public persons: Person[] = [
    {id: uuid(), name: 'Juan Andres', power: 10 },
    {id: uuid(), name: 'Paula', power: 30 },
    {id: uuid(), name: 'Manolo', power: 120 },
    {id: uuid(), name: 'Mingo', power: 105 },
    {id: uuid(), name: 'Peter', power: 14 },
    {id: uuid(), name: 'Jero', power: 311 },
    {id: uuid(), name: 'Antonio', power: 520 },
    {id: uuid(), name: 'Manuela', power: 1015 },
  ]


  addPerson(person: Person): void {
    this.persons.push(person);
  }

  deletePersonById(id: string): void {
    this.persons = this.persons.filter(person => person.id !== id )
    // this.persons.splice(index, 1);
  }


}
