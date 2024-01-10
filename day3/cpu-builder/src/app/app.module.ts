import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';

import { HeaderComponent } from './header/header.component';
import { CpusComponent } from './cpus/cpus.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { CpuPartsListComponent } from './cpu-parts-list/cpu-parts-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CpusComponent,
    AuthenticationComponent,
    CpuPartsListComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

/*
  app
    header
    router-outlet
      authentication
      cpu-parts-list
        parts-edit
      cpus
        cpu-detail
        cpu-edit
        cpu-list
        cpu-start
*/
