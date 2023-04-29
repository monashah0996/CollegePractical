import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from './product';
import { ApiResponse } from './api-response';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  constructor(private http: HttpClient) {}

  private url = 'https://product-app-74q6.onrender.com/events';

  getEvents(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.url);
  }

  addEvent(event:Event): Observable<Event> {
    return this.http.post<Event>(this.url, event);
  }
}
