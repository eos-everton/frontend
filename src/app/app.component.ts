import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { LoginComponent } from "./auth/login/login.component";
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LoginComponent, RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'frontend';
  isLoggedIn: boolean = false;

  constructor(private router: Router) {
    this.isLoggedIn = !!localStorage.getItem('token');
  }

  onLoginSuccess() {
    this.isLoggedIn = true;
  }

  register() {
    this.isLoggedIn = true;
    this.router.navigate(['/register']);
  }

  logout() {
    localStorage.removeItem('token');
    this.isLoggedIn = false;
    this.router.navigate(['/login']).then(() => {
      location.reload();
    });
  }
}
