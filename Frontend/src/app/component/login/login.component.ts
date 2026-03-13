import { AfterViewInit, Component } from '@angular/core';
import {Router} from "@angular/router";
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements AfterViewInit {
  isActive = false;
  private  readonly authService: AuthService | undefined;

  constructor(private router: Router) {}
  toggle() {
    this.isActive = !this.isActive;
  }

  ngAfterViewInit() {
    // Sélection des éléments DOM après le chargement de la vue
    const container = document.querySelector('.container') as HTMLElement;
    const loginLink = document.querySelector('.SignInLink') as HTMLElement;
    const registerLink = document.querySelector('.SignUpLink') as HTMLElement;

    if (registerLink && loginLink && container) {
      // Ajout des écouteurs d'événements pour les liens d'inscription et de connexion
      registerLink.addEventListener('click', () => {
        container.classList.add('active');
      });

      loginLink.addEventListener('click', () => {
        container.classList.remove('active');
      });
    }
  }
  onLogin(): void {
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;
    if (this.authService?.login(email, password)) {
      this.router.navigate(['/Homepage']);
    }
  }
}
