import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { WidgetsService } from './services/widgets.service';
import { CommonModule } from '@angular/common';
import { NewWidget } from './types/widget';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'my-app',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    MatToolbarModule,
    RouterModule,
    CommonModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
  ],
})
export class AppComponent implements OnInit {
  display: NewWidget[] = [];
  sum: number = 0;
  constructor(private widgetService: WidgetsService) {}

  ngOnInit() {
    this.updateWidgets();
  }

  updateWidgets() {
    this.widgetService.getWidget().subscribe((response: any) => {
      this.display = Object.values(response);
      this.sum += response.price;
      this.updateSum();
    });
  }

  updateSum() {
    this.sum = 0;
    for (const num of this.display) {
      this.sum += num.price;
    }
  }
  onDelete(id: string) {
    this.widgetService.deleteWidget(id).subscribe(
      () => {
        console.log('widget deleted successfully.');
        this.updateWidgets();
      },
      (error) => {
        console.log('failed to delete widget');
      }
    );
  }
}
