import { Routes } from '@angular/router';
import { TicketComponent } from './components/ticket/ticket.component';
import { LoginComponent } from './components/login/login.component';
import { TicketFormComponent } from './components/ticket-form/ticket-form.component';
import { RegisterComponent } from './components/register/register.component';

export const routes: Routes = [
  { path: 'tickets', component: TicketComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'tickets/new', component: TicketFormComponent },
  { path: '', redirectTo: '/tickets', pathMatch: 'full' },
  { path: 'tickets/:id', component: TicketFormComponent },
  { path: 'tickets/:id/edit', component: TicketFormComponent }
];
