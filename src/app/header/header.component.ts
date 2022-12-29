import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
   animateHamburger() {
    document.getElementById("hamburger-menu")?.classList.toggle("change");
  }
  scrollServices(){
    console.log("scrolling to services")
    document.getElementById("#services")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
      });
  }
  scrollContact() {
    document.getElementById("#contact")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
      });
}
  scrollAbout(){
    document.getElementById("#about")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
      });
}
scrollHome(){
  window.location.href = "http://atlasappsllc.com";
}
test(){
  console.log("hi")
}
}
