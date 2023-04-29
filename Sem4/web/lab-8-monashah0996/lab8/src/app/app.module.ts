import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReminderFormComponent } from './reminder-form/reminder-form.component';
import { SymptomFormComponent } from './symptoms-form/symptoms-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ReminderFormComponent,
    SymptomFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
