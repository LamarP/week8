import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SubscriptionManagerService {
  private subscriptions: Subscription[] = [];

  add(subscription: Subscription): void {
    this.subscriptions.push(subscription);
  }

  unsubscribeAll(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
    this.subscriptions = [];
  }
}


// component example

import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from './data.service'; // Assume you have a DataService that provides an observable for fetching data
import { Subscription } from 'rxjs';
import { SubscriptionManagerService } from './subscription-manager.service';

@Component({
  selector: 'app-data-display',
  template: `
    <div *ngIf="data">{{ data }}</div>
  `,
})
export class DataDisplayComponent implements OnInit, OnDestroy {
  data: any;
  dataSubscription: Subscription;

  constructor(
    private dataService: DataService,
    private subscriptionManager: SubscriptionManagerService
  ) {}

  ngOnInit() {
    this.dataSubscription = this.dataService.getData().subscribe((result) => {
      this.data = result;
    });

    // Add the subscription to the service
    this.subscriptionManager.add(this.dataSubscription);
  }

  ngOnDestroy() {
    // Angular's OnDestroy lifecycle hook is used for cleanup
    // Unsubscribe from the observable via the SubscriptionManagerService
    this.subscriptionManager.unsubscribeAll();
  }
}
