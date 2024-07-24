import { Component, input, output, signal } from '@angular/core';
import { NewTicketComponent } from '../new-ticket/new-ticket.component';
import { Ticket } from './ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [NewTicketComponent],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
data =input.required<Ticket>();
detailsVisible=signal(false);
close=output();

onToggleDetails(){
  this.detailsVisible.set(!this.detailsVisible());
}

onMarkCompleted(){
  this.close.emit();
}

}
