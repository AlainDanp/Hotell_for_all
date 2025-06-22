import {Component, OnInit} from '@angular/core';
import { LoaderService } from './loader.service';
interface SideNavToggle{
  screenWidth: number;
  collapsed: boolean;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Hotel';
  isSideNavCollapsed = false;
  screenWidth = 0;
  isLoading = false;

  onToggleSideNav(data: SideNavToggle) : void {
    this.isSideNavCollapsed = data.collapsed;
    this.screenWidth = data.screenWidth;
  }
  showLoader() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 3000); // 3 secondes
  }
  constructor(private loaderService: LoaderService) {}

  ngOnInit() {
    // Affiche le loader au chargement de la page
    this.loaderService.show();

    // Cache le loader après un délai, par exemple après 2 secondes
    setTimeout(() => {
      this.loaderService.hide();
    }, 2000); // 2 secondes

    // Abonne-toi à l'état du loader
    this.loaderService.loading$.subscribe(loading => {
      this.isLoading = loading;
    });
  }
}
