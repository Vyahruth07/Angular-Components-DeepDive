import { AfterViewInit, Component, ElementRef, OnInit, output, Output, viewChild, ViewChild } from '@angular/core';
import { ControlComponent } from "../../../shared/control/control.component";
import { ButtonComponent } from '../../../shared/button/button.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent,FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements OnInit,AfterViewInit{

// @ViewChild('form') form ?: ElementRef<HTMLFormElement>;
form =viewChild.required<ElementRef<HTMLFormElement>>('form');
add = output<{title:string;text:string}>();
titleElement='';
textElement='';
 ngOnInit(){
   console.log('ONINIT');
   console.log(this.form().nativeElement);
 }
 ngAfterViewInit(){
  console.log('AFTER VIEW INIT');
  console.log(this.form().nativeElement);
   
 }

onSubmit() {
this.add.emit({title:this.titleElement,text:this.textElement});
// this.form().nativeElement.reset();
this.titleElement='';
this.textElement='';
}

}
