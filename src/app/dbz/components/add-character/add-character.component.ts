import { Component, EventEmitter, Output } from '@angular/core';
import { Person } from '../../interfaces/person.interface';
import { v4 as uuid } from "uuid";

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

    @Output() onNewPerson: EventEmitter<Person> = new EventEmitter;

    public person: Person = {id: uuid(), name: 'Ambrosio', power: 0};

    emitPerson(): void {

      if (this.person.name.length === 0) return;

      this.onNewPerson.emit(this.person);

      this.person = {id:'', name:'', power: 0};

    }
  }
