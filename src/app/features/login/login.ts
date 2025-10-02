import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  username: string = '';
  password: string = '';
  hidePassword: boolean = true;

  constructor(private router: Router) {}

  onLogin() {
    if (this.username === 'tiago' && this.password === 'tiago123') {
      this.router.navigate(['/home']); // redireciona para Home
    } else {
      alert('Usuário ou senha inválidos!');
    }
  }
}
