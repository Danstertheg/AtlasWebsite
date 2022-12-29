import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ui-card',
  templateUrl: './ui-card.component.html',
  styleUrls: ['./ui-card.component.scss']
})
export class UiCardComponent {
@Input() title:string = "";
@Input() description:string = "";
@Input() modalBtnText:string = "";
@Input() modalDescription:string = "";
@Input() imgTxt:string = "";
}
