import { Component } from '@angular/core';
import { pairwise, take } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor(private router: Router) {
      // looking at all events for a route when navigating
      this.router.events.subscribe(x => {
        console.log('%cCheck event', 'font-size: 24px; color: white; background: black;');
        console.log(x);
        console.log(this.router);
      })
    };
}
