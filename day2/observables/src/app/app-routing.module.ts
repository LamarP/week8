// Importing necessary Angular modules for routing
import { NgModule } from '@angular/core'; // Essential for defining an Angular module
import { RouterModule, Routes } from '@angular/router'; // RouterModule is used for setting up the application routes, Routes is used to define route configurations

// Importing components that are associated with routes
import { HomeComponent } from './home/home.component'; 
import { UserComponent } from './user/user.component'; 

// Defining the application routes
const routes: Routes = [
  { path: '', component: HomeComponent }, // Default route, directs to HomeComponent when the URL is the base URL
  { path: 'user/:id', component: UserComponent } // Route with a parameter 'id', directs to UserComponent. ':id' is a placeholder for dynamic values
];

// Decorator that marks a class as an NgModule and supplies configuration metadata
@NgModule({
  imports: [
    // Setting up the router module with the defined routes
    RouterModule.forRoot(routes) // forRoot method configures the router at the application's root level
  ],
  exports: [
    // Exporting RouterModule so it's accessible in other parts of the app
    RouterModule 
  ]
})

export class AppRoutingModule {

}

