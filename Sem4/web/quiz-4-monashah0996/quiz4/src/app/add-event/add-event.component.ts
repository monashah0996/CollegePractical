import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent {
  constructor(private http: BackendService) {}

  createPostForm = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    detail: new FormControl<string | null>(null, Validators.required),
    category: new FormControl<string | null>(null, Validators.required),
  });

  onSubmit() {
    const event = {
      name: this.createPostForm.value.name!,
      detail: String(this.createPostForm.value.detail!),
      category: this.createPostForm.value.category!,
      date: Date.now().toString(),
      _id: null,
    };

    console.log(event);
    this.http.addEvent(event).subscribe();
  }
}
