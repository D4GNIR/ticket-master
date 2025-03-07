import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TicketService } from '../../services/ticket.service';

@Component({
  selector: 'app-ticket-form',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  templateUrl: './ticket-form.component.html',
  styleUrls: ['./ticket-form.component.scss']
})
export class TicketFormComponent implements OnInit {
  ticketForm: FormGroup;
  isEditMode = false;
  ticketId?: number;

  constructor(
    private fb: FormBuilder,
    private ticketService: TicketService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.ticketForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      status_id: [1]
    });
  }

  ngOnInit(): void {
    this.ticketId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.ticketId) {
      this.isEditMode = true;
      this.loadTicket(this.ticketId);
    }
  }

  loadTicket(id: number): void {
    this.ticketService.getOne(id).subscribe({
      next: ticket => {
        this.ticketForm.patchValue(ticket);
      },
      error: error => console.error('Error loading ticket:', error)
    });
  }

  onSubmit(): void {
    if (this.ticketForm.valid) {
      console.log('Form data:', this.ticketForm.value);

      if (this.isEditMode && this.ticketId) {
        this.ticketService
          .update(this.ticketId, this.ticketForm.value)
          .subscribe({
            next: response => {
              console.log('Update response:', response);
              this.router.navigate(['/tickets']);
            },
            error: error => {
              console.error('Update error:', error);
            }
          });
      } else {
        this.ticketService.create(this.ticketForm.value).subscribe({
          next: response => {
            console.log('Create response:', response);
            this.router.navigate(['/tickets']);
          },
          error: error => {
            console.error('Create error:', error);
          }
        });
      }
    }
  }
}
