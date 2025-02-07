import { Component, ContentChild, ElementRef, HostBinding, HostListener, OnInit, ViewEncapsulation, contentChild, inject, input } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)':'onClick()'
  }
})
export class ControlComponent{
  // @HostBinding('class') className = 'control';
  // @HostListener('click') onClick() {
  //   console.log('Clicked!');
  // }
  private el=inject(ElementRef);
  label = input.required<string>();
  // @ContentChild('input') private control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>;
  private control = contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');
  
  onClick(){
    console.log('Clicked');
    console.log(this.el);
    console.log(this.control());
  }
}