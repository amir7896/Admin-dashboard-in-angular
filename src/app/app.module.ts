import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TopbarComponent } from './allComponents/topbar/topbar.component';
import { SidebarComponent } from './allComponents/sidebar/sidebar.component';
import { SidebarModule } from 'ng-sidebar';
import { LoginComponent } from './allComponents/login/login.component';
import { RegisterComponent } from './allComponents/register/register.component';
import { HomePageComponent } from './allComponents/home-page/home-page.component';
import { TutorialsComponent } from './allComponents/tutorials/tutorials.component';
import { AboutusComponent } from './allComponents/aboutus/aboutus.component';

// Chart Module
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    SidebarComponent,
    LoginComponent,
    RegisterComponent,
    HomePageComponent,
    TutorialsComponent,
    AboutusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    SidebarModule.forRoot(),
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
