import { Component, OnInit } from '@angular/core';
import { Person } from '../interfaces/person.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  constructor(
    private dbzService: DbzService
  ) {
  }

  get persons(): Person[] {
    return [...this.dbzService.persons];
  }

  onDeletePerson(id: string):void {
    this.dbzService.deletePersonById(id);
  }

  onNewPerson(person: Person):void {
    this.dbzService.addPerson(person);
  }
}
