    import { Component } from '@angular/core';

    @Component({
      selector: 'app-pets',
      templateUrl: './app.component.html',
      styleUrls: ['./app.component.css'],
    })
    export class Pets {
      tasklist: any =  [

        {

          name: 'doggy',

          type: 'type a',

          color: 'brown'

        },

        {

          name: 'Trex',

          type: 'type b',

          color: 'purple'

        },

        {

          name: 'fish',

          type: 'type c',

          color: 'red'

        }

      ];

      deleteTasklist(id: number) {
        this.tasklist.forEach((element: any, index: any) => {
          if (element.id == id) this.tasklist.splice(index, 1);
        });
      }
    }
