import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  imports: [CommonModule, FormsModule],
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  isLoggedIn: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.isLoggedIn = this.authService.isLoggedIn();
    if (this.isLoggedIn) {
      this.router.navigate(['/items']);
    }
  }

  register() {
    this.isLoggedIn = true;
    this.router.navigate(['/register']);
  }

  login() {
    this.authService.login(this.email, this.password).subscribe({
      next: (res) => {
        console.log('Login bem-sucedido', res);
        localStorage.setItem('token', res.token);
        this.router.navigate(['/items']).then(() => {
          window.location.reload();
        });
      },
      error: () => alert('Login inválido!'),
    });
  }
}
