import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    RouterLink
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginData = {
    email: '',
    password: ''
  };
  errorMessage = '';
  loading = false;

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    if (!this.loginData.email || !this.loginData.password) {
      this.errorMessage = 'Veuillez remplir tous les champs';
      return;
    }

    this.loading = true;
    this.errorMessage = '';

    this.authService.login(this.loginData).subscribe({
      next: response => {
        console.log('Connexion réussie', response);
        this.router.navigate(['/']);
      },
      error: error => {
        console.error('Erreur de connexion', error);
        this.errorMessage =
          error.error?.error || 'Email ou mot de passe incorrect';
        this.loading = false;
      },
      complete: () => {
        this.loading = false;
      }
    });
  }
}
