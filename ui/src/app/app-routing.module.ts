import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetTokenComponent } from './get-token/get-token.component';
import { CallResourcesComponent } from './call-resources/call-resources.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: 'getToken', component: GetTokenComponent },
  { path: 'callResources', component: CallResourcesComponent },
  { path: 'login', component: LoginComponent },
  { path: '',  redirectTo: 'login', pathMatch: 'full'},
  { path: 'main', component: MainComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
