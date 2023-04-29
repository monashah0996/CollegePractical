import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';
import { Event } from '../product';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  constructor(private http: BackendService) {}

  events!: Event[];

  ngOnInit() {
    this.http.getEvents().subscribe((events) => {
      this.events = events.payload;
      console.log(this.events);
    });
  }
}
