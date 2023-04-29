import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-reminder-form',
  templateUrl: './reminder-form.component.html',
  styleUrls: ['./reminder-form.component.css'],
})
export class ReminderFormComponent {
  user_email!: string;
  title!: string;
  description!: string;
  date!: string;
  reminders: any[] = [];
  formSubmitted = false;

  constructor() {}

  handleSubmit(form: NgForm) {
    this.formSubmitted = true;
    if (form.invalid) {
      return;
    }
    const reminder = {
      user_email: this.user_email,
      title: this.title,
      description: this.description,
      date: this.date,
    };
    this.reminders.push(reminder);
    this.user_email = '';
    this.title = '';
    this.description = '';
    this.date = '';
    form.resetForm();
    this.formSubmitted = false;
  }
}
