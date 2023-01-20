import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebDevelopmentComponent } from './web-development/web-development.component';
import { HomeComponent } from './home/home.component';
import { AppDevelopmentComponent } from './app-development/app-development.component';
import { ManagementSoftwareComponent } from './management-software/management-software.component';
import { EinsteinWriterComponent } from './einstein-writer/einstein-writer.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"WebDevelopment",component:WebDevelopmentComponent},
  {path:"AppDevelopment",component:AppDevelopmentComponent},
  {path:"ManagementSoftware",component:ManagementSoftwareComponent},
  {path:"EinsteinWriter",component:EinsteinWriterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
