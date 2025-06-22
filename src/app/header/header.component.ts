import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  sidebarOpen: boolean = false;  // Variable pour gérer l'état de la sidebar

  // Méthode pour basculer l'état de la sidebar
  isSidebarOpen: any;
  toggleSidebar(): void {
    this.sidebarOpen = !this.sidebarOpen;
  }

}
