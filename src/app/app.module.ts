// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// @NgModule({
//   declarations: [
//     AppComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     BrowserAnimationsModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }




import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { ServicesComponent } from './services/services.component';
import { UiCardComponent } from './ui-card/ui-card.component';
import { AboutCardComponent } from './about-card/about-card.component';
import { AboutSectionComponent } from './about-section/about-section.component';
import { DropDownButtonComponent } from './drop-down-button/drop-down-button.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { WebDevelopmentComponent } from './web-development/web-development.component';
import { HomeComponent } from './home/home.component';
import { AppDevelopmentComponent } from './app-development/app-development.component';
import { ManagementSoftwareComponent } from './management-software/management-software.component';
import { ModalComponent } from './modal/modal.component';
import { PricingTableComponent } from './pricing-table/pricing-table.component';
import { EinsteinWriterComponent } from './einstein-writer/einstein-writer.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    BannerComponent,
    ServicesComponent,
    UiCardComponent,
    AboutCardComponent,
    AboutSectionComponent,
    DropDownButtonComponent,
    ContactFormComponent,
    WebDevelopmentComponent,
    HomeComponent,
    AppDevelopmentComponent,
    ManagementSoftwareComponent,
    ModalComponent,
    PricingTableComponent,
    EinsteinWriterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
