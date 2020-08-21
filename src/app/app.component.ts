import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AishwaryaPoojary';

  constructor(private router: Router) { }
  landingpage() {
    this.router.navigateByUrl("landing-page");
  }
  placeAppointment() {
    this.router.navigateByUrl("place-fitness-trainer-appointment");
  }
  viewAppointment() {
    this.router.navigateByUrl("view-appointment");
  }
  contactUspage() {
    this.router.navigateByUrl("contact-us");
  }

}
