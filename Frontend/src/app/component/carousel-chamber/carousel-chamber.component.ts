import { Component, OnInit, OnDestroy } from '@angular/core';

interface Room {
  image: string;
  type: string;
  name: string;
  price: number;
  description: string;
}

@Component({
  selector: 'app-carousel-chamber',
  templateUrl: './carousel-chamber.component.html',
  styleUrls: ['./carousel-chamber.component.css']
})
export class CarouselChamberComponent implements OnInit, OnDestroy {

  rooms: Room[] = [
    {
      image: 'image/imgchambre1.jpg',
      type: 'Standard',
      name: 'Chambre Standard',
      price: 80,
      description: 'Un havre de confort au design soigné, idéale pour un séjour reposant avec vue sur le jardin intérieur.'
    },
    {
      image: 'image/imgchambre2.jpg',
      type: 'Deluxe',
      name: 'Chambre Deluxe',
      price: 150,
      description: 'Espace et élégance avec salle de bain en marbre, literie haut de gamme et vue panoramique sur la ville.'
    },
    {
      image: 'image/imgchambre3.jpg',
      type: 'Suite',
      name: 'Suite Junior',
      price: 250,
      description: 'Salon séparé, jacuzzi privatif et accès prioritaire au spa pour une expérience d\'exception.'
    },
    {
      image: 'image/imgchambre4.jpg',
      type: 'Présidentielle',
      name: 'Suite Présidentielle',
      price: 500,
      description: 'L\'apogée du luxe absolu avec terrasse privée, piscine et service butler personnalisé 24h/24.'
    },
    {
      image: 'image/imgchambre5.jpg',
      type: 'Standard',
      name: 'Chambre Vue Jardin',
      price: 90,
      description: 'Sérénité absolue avec une vue imprenable sur notre jardin tropical fleuri.'
    },
    {
      image: 'image/imgchambre6.jpg',
      type: 'Deluxe',
      name: 'Chambre Vue Piscine',
      price: 180,
      description: 'Réveillez-vous chaque matin avec la vue sur notre piscine à débordement scintillante.'
    },
    {
      image: 'image/imgchambre7.jpg',
      type: 'Penthouse',
      name: 'Penthouse Suite',
      price: 800,
      description: 'Un penthouse exclusif au sommet de l\'hôtel, offrant une vue à 360° et un luxe sans compromis.'
    }
  ];

  currentIndex = 0;
  progress = 0;
  isAnimating = false;

  private autoPlayInterval: any;
  private progressInterval: any;
  private readonly INTERVAL_MS = 5000;

  touchStartX = 0;

  get prevIndex(): number {
    return (this.currentIndex - 1 + this.rooms.length) % this.rooms.length;
  }

  get nextIndex(): number {
    return (this.currentIndex + 1) % this.rooms.length;
  }

  ngOnInit(): void {
    this.startAutoPlay();
  }

  ngOnDestroy(): void {
    clearInterval(this.autoPlayInterval);
    clearInterval(this.progressInterval);
  }

  goTo(index: number): void {
    if (this.isAnimating || index === this.currentIndex) return;
    this.isAnimating = true;
    this.currentIndex = index;
    this.resetProgress();
    setTimeout(() => { this.isAnimating = false; }, 900);
  }

  next(): void { this.goTo(this.nextIndex); }
  prev(): void { this.goTo(this.prevIndex); }

  pauseAutoPlay(): void {
    clearInterval(this.autoPlayInterval);
    clearInterval(this.progressInterval);
  }

  resumeAutoPlay(): void {
    this.startAutoPlay();
  }

  onTouchStart(e: TouchEvent): void {
    this.touchStartX = e.touches[0].clientX;
  }

  onTouchEnd(e: TouchEvent): void {
    const delta = this.touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 50) {
      delta > 0 ? this.next() : this.prev();
    }
  }

  private startAutoPlay(): void {
    this.resetProgress();
    this.autoPlayInterval = setInterval(() => { this.next(); }, this.INTERVAL_MS);
  }

  private resetProgress(): void {
    clearInterval(this.progressInterval);
    this.progress = 0;
    const step = 100 / (this.INTERVAL_MS / 50);
    this.progressInterval = setInterval(() => {
      this.progress = Math.min(this.progress + step, 100);
    }, 50);
  }

  padNumber(n: number): string {
    return n < 10 ? '0' + n : '' + n;
  }
}
