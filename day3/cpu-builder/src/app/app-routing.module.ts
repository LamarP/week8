import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CpusComponent } from './cpus/cpus.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { CpuPartsListComponent } from './cpu-parts-list/cpu-parts-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/cpus',
    pathMatch: 'full'
  },
  {
    path: 'cpus',
    component: CpusComponent
  },
  {
    path: 'cpu-parts-list',
    component: CpuPartsListComponent
  },
  {
    path: 'authentication',
    component: AuthenticationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
