import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { NewWidget, Widget } from '../types/widget';

@Injectable({
  providedIn: 'root',
})
export class WidgetsService {
  WIDGETS_URI =
    'https://4tng5yf0o6.execute-api.us-east-1.amazonaws.com/widgets';

  // delete widget URI is DELETE https://4tng5yf0o6.execute-api.us-east-1.amazonaws.com/widgets/<ID>

  constructor(private http: HttpClient) {}

  getWidget() {
    return this.http.get(this.WIDGETS_URI);
  }
  deleteWidget(id: string) {
    return this.http.delete(`${this.WIDGETS_URI}/${id}`);
  }
}
