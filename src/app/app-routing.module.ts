import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LogInComponent} from './components/log-in/log-in.component';
import {HomeComponent} from './home/home.component';
import {AuthGuard} from './Services/auth.guard';

const routes: Routes = [{
  path: 'login', component: LogInComponent,
},
  {
    path: 'home',
    component: HomeComponent,
    canActivate : [AuthGuard]
  },
  {path: '', component: LogInComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
