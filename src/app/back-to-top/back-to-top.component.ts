import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-back-to-top',
  templateUrl: './back-to-top.component.html',
  styleUrls: ['./back-to-top.component.css']
})
export class BackToTopComponent implements OnInit {

  scrollPercentage: number = 0;
  isVisible: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    this.scrollPercentage = Math.round((scrollTop / scrollHeight) * 100);

    // Afficher ou masquer le bouton selon le défilement
    if (scrollTop > 100) {
      this.isVisible = true;
    } else {
      this.isVisible = false;
    }
  }

  scrollToTop(event: Event) {
    event.preventDefault(); // Empêcher le rechargement de la page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }


  ngOnInit(): void {}
}
