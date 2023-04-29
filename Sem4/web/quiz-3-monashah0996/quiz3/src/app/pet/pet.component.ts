import { Component } from '@angular/core';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css'],
})
export class PetComponent {
  pets: any = [
    {
      name: 'doggy',
      type: 'type a',
      color: 'brown',
    },
    {
      name: 'Trex',
      type: 'type b',
      color: 'purple',
    },
    {
      name: 'fish',
      type: 'type c',
      color: 'red',
    },
  ];
  petsLength = this.pets.length;
  deletePet(name: string) {
    this.pets.forEach((element: any, index: any) => {
      if (element.name == name) this.pets.splice(index, 1);
    });
  }
}
