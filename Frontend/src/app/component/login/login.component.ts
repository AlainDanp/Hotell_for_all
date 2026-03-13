import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  isActive = false;

  constructor(private router: Router, private authService: AuthService) {}

  toggle(): void {
    this.isActive = !this.isActive;
  }

  onLogin(email: string, password: string): void {
    if (this.authService.login(email, password)) {
      this.router.navigate(['/Homepage']);
    }
  }
}
