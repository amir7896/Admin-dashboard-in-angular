import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './allComponents/aboutus/aboutus.component';
import { HomePageComponent } from './allComponents/home-page/home-page.component';
import { LoginComponent } from './allComponents/login/login.component';
import { RegisterComponent } from './allComponents/register/register.component';
import { TutorialsComponent } from './allComponents/tutorials/tutorials.component';
import { AppComponent } from './app.component';

const routes: Routes = [

  { 
    path: '', 
    redirectTo: 'page1', 
    pathMatch: 'full' 
  },
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'tutorials',
    component: TutorialsComponent
  },
  {
    path:'about-us',
    component: AboutusComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
