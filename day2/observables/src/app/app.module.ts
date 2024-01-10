
import { NgModule } from '@angular/core'; // Essential for defining an Angular module
import { BrowserModule } from '@angular/platform-browser'; // Needed for running the app in a web browser

// Importing components 
import { AppComponent } from './app.component'; 
import { HomeComponent } from './home/home.component'; 
import { UserComponent } from './user/user.component'; 

//  AppRoutingModule for handling routing in the application
import { AppRoutingModule } from './app-routing.module'; // Manages navigation between views

// Decorator that marks a class as an NgModule and supplies configuration metadata
@NgModule({
  declarations: [
    // List of components, directives, and pipes that belong to this module
    AppComponent, // Root component that Angular first initializes
    HomeComponent, // HomeComponent included in the application
    UserComponent  // UserComponent included in the application
  ],
  imports: [
    // List of modules to import into this module. Every component, directive, and service from the imported modules can be used in this module
    BrowserModule, // Module for running the app in a browser with tools for sanitizing HTML
    AppRoutingModule // Routing module for navigating between components
  ],
  providers: [
    // Services that can be injected into components; 
  ],
  bootstrap: [
    // Root component to bootstrap, typically the main app view
    AppComponent // The main application view
  ]
})
// The AppModule class with the @NgModule decorator describes how the application parts fit together
export class AppModule { }



// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppComponent } from './app.component';
// import { HomeComponent } from './home/home.component';
// import { UserComponent } from './user/user.component';
// import { AppRoutingModule } from './app-routing.module';

// @NgModule({
//   declarations: [
//     AppComponent,
//     HomeComponent,
//     UserComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
