import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Person } from '../../interfaces/person.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input('ListadoPersonas') personsList: Person[] = [];

  @Output() deletePerson: EventEmitter<string> = new EventEmitter;

  onDeletePerson(id: string): void {
    this.deletePerson.emit(id);
  }

}
