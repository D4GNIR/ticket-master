import { Component, NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, RouterLink } from '@angular/router';
import { Ticket } from '../../models/ticket.model';
import { TicketService } from '../../services/ticket.service';

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    RouterLink
  ]
})
export class TicketModule {}

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    RouterLink
  ]
})
export class TicketComponent implements OnInit {
  tickets: Ticket[] = [];
  displayedColumns: string[] = [
    'id',
    'title',
    'description',
    'status_id',
    'actions'
  ];

  constructor(private ticketService: TicketService) {}

  ngOnInit(): void {
    this.loadTickets();
  }

  loadTickets(): void {
    this.ticketService.getAll().subscribe({
      next: data => {
        this.tickets = data;
      },
      error: error => {
        console.error('Error fetching tickets:', error);
      }
    });
  }

  deleteTicket(id: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce ticket ?')) {
      this.ticketService.delete(id).subscribe({
        next: () => {
          this.loadTickets();
        },
        error: error => {
          console.error('Error deleting ticket:', error);
        }
      });
    }
  }
}
