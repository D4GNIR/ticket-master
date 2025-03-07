import { Routes } from '@angular/router';
import { TicketComponent } from './components/ticket/ticket.component';
import { TicketFormComponent } from './components/ticket-form/ticket-form.component';

export const routes: Routes = [
  { path: 'tickets', component: TicketComponent },
  { path: 'tickets/new', component: TicketFormComponent },
  { path: '', redirectTo: '/tickets', pathMatch: 'full' },
  { path: 'tickets/:id', component: TicketFormComponent },
  { path: 'tickets/:id/edit', component: TicketFormComponent }
];
