import { Component, Input } from '@angular/core';
import { Event } from '../product';
import { ActivatedRoute } from '@angular/router';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent {
  @Input() event: Event | undefined;

  display: Event | null = null;

  constructor(private route: ActivatedRoute, private http: BackendService) {}

  ngOnInit() {
    let id = this.route.snapshot.params['id'];

    console.log(id);

    this.http.getEvents().subscribe((events) => {
      this.display = events.payload.filter((eve) => eve._id === id)[0];
      console.log(events.payload.filter((eve) => eve._id === id)[0]);
      console.log(this.display);
    });
  }
}
