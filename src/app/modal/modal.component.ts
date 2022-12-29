import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
@Input() buttonText:string = '';
@Input() modalDescription:string = '';
@Input() modalTitle:string = '';
isVisible = false;
show(){
  this.isVisible = true;
  console.log("clicked")
}
close(){
  this.isVisible = false;
}
}
