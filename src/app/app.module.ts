import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PlaceFitnessTrainerAppointmentComponent } from './place-fitness-trainer-appointment/place-fitness-trainer-appointment.component';
import { ViewAppointmentComponent } from './view-appointment/view-appointment.component';
import { ContactUsComponent } from './contact-us/contact-us.component';



@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    PlaceFitnessTrainerAppointmentComponent,
    ViewAppointmentComponent,
    ContactUsComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule
  
  ],
  exports: [ViewAppointmentComponent,
    PlaceFitnessTrainerAppointmentComponent,
    ContactUsComponent,
    LandingPageComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
