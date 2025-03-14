import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  password_confirmation: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  register() {
    if (this.password !== this.password_confirmation) {
      alert('As senhas não coincidem!');
      return;
    }

    this.authService
      .register(
        this.name,
        this.email,
        this.password,
        this.password_confirmation
      )
      .subscribe({
        next: (res) => {
          console.log('Cadastro bem-sucedido', res);
          alert('Cadastro bem-sucedido');
          this.router.navigate(['/login']).then(() => {
            location.reload();
          });
        },
        error: () => alert('error!'),
      });
  }
}
