import { Event } from './product';

export interface ApiResponse {
  success: string;
  payload: Event[];
}
