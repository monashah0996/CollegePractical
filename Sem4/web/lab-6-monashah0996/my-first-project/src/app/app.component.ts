import { Component } from '@angular/core';

@Component({
  selector: 'app-grocery',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  grocery = [
    {
      name: 'Tomatoes',
      quantity: 3,
      id: 1,
      img: '../../../assets/image1.png',
    },
    {
      name: 'Potatoes',
      quantity: 2,
      id: 2,
      img: '../../../assets/image2.png',
    },
    {
      name: 'Onion',
      quantity: 4,
      id: 3,
      img: '../../../assets/image3.png',
    },
    {
      name: 'Green Pepper',
      quantity: 4,
      id: 4,
      img: '../../../assets/image4.png',
    },
  ];
}
