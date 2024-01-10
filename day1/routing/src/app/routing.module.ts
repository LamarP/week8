import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

import { UserComponent } from './users/user/user.component';
import { ServersComponent } from './servers/servers.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServerComponent } from './servers/server/server.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { NotfoundComponent } from './notfound/notfound.component';

import { GuardGuard } from './guard.guard';
import { DeactivateGuard } from './servers/edit-server/deactivate.guard';
import { CanloadGuard } from './canload.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'users',
    component: UsersComponent,
    canLoad: [CanloadGuard],
    children: [
      {
        path: ':id/:name', component: UserComponent
      },
      {
        path: 'servers/:id/:name', component: ServersComponent
      },
      {
        path: 'users/:id/:name', component: UsersComponent
      }
    ]
  },
  {
    path: 'servers',
    component: ServersComponent,
    // canActivate: [GuardGuard],
    canActivateChild: [GuardGuard],
    children: [
      {
        path: ':id',
        component: ServerComponent
      },
      {
        path: ':id/edit',
        component: EditServerComponent,
        canDeactivate: [DeactivateGuard]
      }
    ]
  },
  { path: 'not-found', component: NotfoundComponent },
  { path: '**', redirectTo: '/not-found' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
