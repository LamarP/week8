import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from './data.service'; // Assume you have a DataService that provides an observable for fetching data
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-data-display',
  template: `
    <div *ngIf="data">{{ data }}</div>
  `,
})
export class DataDisplayComponent implements OnInit, OnDestroy {
  data: any;
  dataSubscription: Subscription;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataSubscription = this.dataService.getData().subscribe((result) => {
      this.data = result;
    });
  }

  ngOnDestroy() {
    // Unsubscribe from the observable to prevent memory leaks
    if (this.dataSubscription) {
      this.dataSubscription.unsubscribe();
    }
  }
}
