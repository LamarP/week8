
// Key concepts covered in this component:
// Route Parameter Subscription: It subscribes to route parameters to extract the id, which is likely used to display or manipulate user-specific data.
// Lifecycle Hooks: It utilizes OnInit and OnDestroy for handling initialization and cleanup.
// Service Interaction: The component interacts with a UserService, which seems to be used for communicating across different parts of the application (possibly other components).
// RxJS Usage: It showcases the use of RxJS for handling asynchronous data streams, like route parameters.




// Importing necessary Angular core and routing modules, RxJS functionalities, and a custom service
import { Component, OnInit, OnDestroy } from '@angular/core'; // Core Angular decorators for lifecycle hooks
import { ActivatedRoute, Params } from '@angular/router'; // For accessing route parameters
import { Subscription } from 'rxjs'; // For handling observable subscriptions
import { map } from 'rxjs/operators'; // RxJS operator for transforming observable data
import { UserService } from '../user.service'; // Importing a custom service for user-related operations

// Component decorator with metadata about the component
@Component({
  selector: 'app-user', // The custom HTML tag that will be used to invoke this component
  templateUrl: './user.component.html', // The HTML template associated with this component
  styleUrls: ['./user.component.css'] // The stylesheet associated with this component
})
export class UserComponent implements OnInit, OnDestroy {
  // Declaring class properties
  paramsSubscription!: Subscription; // Subscription object for managing observable subscriptions
  id!: number; // To store the user ID from the route parameters

  // Constructor to inject dependencies
  constructor(private route: ActivatedRoute, private userService: UserService) { }

  // ngOnInit lifecycle hook: executed after the component's initialization
  ngOnInit(): void {
    // Subscribing to route parameters
    this.paramsSubscription = this.route.params
      .pipe(
        map((data: any) => {
          // Using the map operator to transform the incoming data
          const { id } = data; // Destructuring to get the id from data
          return { id: +id } // Converting id to a number and returning it
        })
      )
      .subscribe({
        next: (params: Params) => {
          // Handling the observable's emitted values
          this.id = params['id']; // Updating the id property with the route parameter
        },
        complete: () => console.log('completed??') // Optional completion handler
      })
  }

  // ngOnDestroy lifecycle hook: executed just before the component is destroyed
  ngOnDestroy(): void {
    // Unsubscribing from the observable to prevent memory leaks
    this.paramsSubscription.unsubscribe();
  }

  // Method to trigger an event using the UserService
  emit() {
    this.userService.eventData.emit(true); // Emitting a value through an EventEmitter
  }

  // Method to send data using a Subject in the UserService
  subject() {
    this.userService.subjectData.next(true); // Sending a value through a Subject
  }

}

