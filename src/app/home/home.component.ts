import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  scrollContact() {
    document.getElementById("#contact")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
      });
}
sendToFiver(){
  window.location.href = "http://www.fiver";
}
}
