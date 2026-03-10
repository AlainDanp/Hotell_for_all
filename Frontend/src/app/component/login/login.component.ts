import { AfterViewInit, Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements AfterViewInit {
  isActive = false;

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
  onLogin() {
    // Ici, vous pouvez ajouter la logique de validation du formulaire si nécessaire

    // Si la connexion est réussie, naviguez vers la page d'accueil
    this.router.navigate(['/Homepage']);
  }
}
