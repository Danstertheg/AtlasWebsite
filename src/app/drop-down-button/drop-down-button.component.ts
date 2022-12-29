import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-drop-down-button',
  templateUrl: './drop-down-button.component.html',
  styleUrls: ['./drop-down-button.component.scss']
})
export class DropDownButtonComponent {
  //  @Input() buttonText:string = "";
  //  @Input() link1:string = "";
  //  @Input() link2:string = "";
  //  @Input() link3:string = "";
  isVisible = false;
  showHide(){
    document.getElementById("hamburger-menu")?.classList.toggle("change");
  if (this.isVisible == false){
  this.isVisible= true;
  }
  else {
    this.isVisible = false;
  }
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
}
