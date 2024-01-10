// import { Component, OnInit, OnDestroy } from '@angular/core';
// import { interval, Subscription, Observable } from 'rxjs';
// import { filter, map } from 'rxjs/operators';
// import { UserService } from '../user.service';

// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.css']
// })
// export class HomeComponent implements OnInit, OnDestroy {
//   constructor(private userService: UserService) { }

//   firstSub!: Subscription;
//   subjectSub!: Subscription;
//   showParagraph: boolean = false;

//   ngOnInit(): void {
//     // this.firstSub = interval(1000).subscribe(count => {
//     //   console.log(count);
//     // });

//     this.userService.eventData.subscribe((data) => {
//       this.showParagraph = data;
//     });

//     this.subjectSub = this.userService.subjectData.subscribe((data) => {
//       this.showParagraph = data;
//     });

//     const myFirstObservable = new Observable(
//       (
//         observer: {
//           next: (arg: number) => void;
//           complete: () => void;
//           error: (arg: Error) => void;
//       }) => {
//         let count = 0;
//         setInterval(() => {
//           observer.next(count);
//           if (count === 6) {
//             observer.complete();
//           }
//           if (count > 6) {
//             observer.error(new Error(`That number is too big for this observable: ${count}`));
//           }
//           count++;
//         }, 1000);
//     });
//     this.firstSub = myFirstObservable
//       .pipe(
//         filter((data: number) => data > 3),
//         map((data: number) => `The number is: ${data}`),
//         map((data: string) => `The 2nd Map number is: ${data}`)
//       )
//       .subscribe({
//       next: (data: number | string) => {
//         console.log('check data that was called from next!');
//         console.log(data);
//       },
//       error: (error: Error) => {
//         console.log('whats the error?');
//         console.log(`%c${error}`, 'font-size: 24px; color: black; background: white;');
//       },
//       complete: () => {
//         console.log('Completed!');
//       }
//     })
//   }

//   ngOnDestroy(): void {
//     // does unsubscribe call complete or does it work differently
//     this.firstSub.unsubscribe();
//     this.subjectSub.unsubscribe();
//   }

// }
// Importing necessary Angular core and RxJS functionalities
import { Component, OnInit, OnDestroy } from '@angular/core'; // Core Angular decorators for lifecycle hooks
import { interval, Subscription, Observable } from 'rxjs'; // RxJS classes for creating and handling observables and subscriptions
import { filter, map } from 'rxjs/operators'; // RxJS operators for transforming observable data
import { UserService } from '../user.service'; // Importing a custom service for user-related operations

// Component decorator with metadata about the component
@Component({
  selector: 'app-home', // The custom HTML tag that will be used to invoke this component
  templateUrl: './home.component.html', // The HTML template associated with this component
  styleUrls: ['./home.component.css'] // The stylesheet associated with this component
})
export class HomeComponent implements OnInit, OnDestroy {
  // Constructor to inject dependencies
  constructor(private userService: UserService) { }

  // Declaring class properties
  firstSub!: Subscription; // Subscription object for managing observable subscriptions
  subjectSub!: Subscription; // Another subscription object for a different observable
  showParagraph: boolean = false; // A boolean to control UI elements, likely toggled in the template

  // ngOnInit lifecycle hook: executed after the component's initialization
  ngOnInit(): void {
    // Commented out code to subscribe to an interval observable
    // this.firstSub = interval(1000).subscribe(count => {
    //   console.log(count);
    // });

    // Subscribing to an EventEmitter from UserService
    this.userService.eventData.subscribe((data) => {
      this.showParagraph = data; // Updating the boolean based on the emitted value
    });

    // Subscribing to a Subject from UserService
    this.subjectSub = this.userService.subjectData.subscribe((data) => {
      this.showParagraph = data; // Updating the boolean based on the subject's emitted value
    });

    // Creating a custom observable
    const myFirstObservable = new Observable<number>(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(count); // Emitting the count value
        // if (count === 6) {
        //   observer.complete(); // Completing the observable sequence
        // }
        // if (count > 6) {
        //   observer.error(new Error(`That number is too big for this observable: ${count}`)); // Emitting an error
        // }
        count++;
      }, 1000);
    });

    // Subscribing to the custom observable
    this.firstSub = myFirstObservable
      .pipe(
        filter((data: number) => data > 3), // Filtering values greater than 3
        map((data: number) => `The number is: ${data}`), // Mapping number to a string
        map((data: string) => `The 2nd Map number is: ${data}`) // Further transforming the data
      )
      .subscribe({
        next: (data: number | string) => {
          console.log('check data that was called from next!');
          console.log(data);
        },
        error: (error: Error) => {
          console.log('whats the error?');
          console.log(`%c${error}`, 'font-size: 24px; color: black; background: white;');
        },
        complete: () => {
          console.log('Completed!');
        }
      })
  }

  // ngOnDestroy lifecycle hook: executed just before the component is destroyed
  ngOnDestroy(): void {
    // Unsubscribing from the observables to prevent memory leaks
    // this.firstSub.unsubscribe();
    // this.subjectSub.unsubscribe();
    // Note: Unsubscribing does not call the complete method of the observable. It simply stops listening to the observable emissions.
  }

}
