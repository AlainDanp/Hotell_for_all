import { Component, OnInit, OnDestroy, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

interface Service {
  icon: string;
  name: string;
  tag: string;
  desc: string;
  image: string;
  tags: string[];
}

interface GalleryImage {
  src: string;
  alt: string;
  span: 'small' | 'medium' | 'large' | 'wide';
  label?: string;
}

interface Package {
  icon: string;
  name: string;
  description: string;
  features: string[];
  price: number;
  featured: boolean;
}

interface Review {
  name: string;
  initials: string;
  origin: string;
  text: string;
}

@Component({
  selector: 'app-service-page',
  templateUrl: './service-page.component.html',
  styleUrls: ['./service-page.component.css']
})
export class ServicePageComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('servicesSection') servicesSection!: ElementRef;
  @ViewChild('gallerySection')  gallerySection!: ElementRef;
  @ViewChild('sigSection')      sigSection!: ElementRef;
  @ViewChild('restoSection')    restoSection!: ElementRef;
  @ViewChild('packSection')     packSection!: ElementRef;

  cardsVisible  = false;
  galleryVisible = false;
  sigVisible    = false;
  restoVisible  = false;
  packVisible   = false;

  private observers: IntersectionObserver[] = [];

  stats = [
    { value: '50+',  label: 'Services disponibles' },
    { value: '24h',  label: 'Disponibilité totale'  },
    { value: '12k+', label: 'Clients comblés'       },
    { value: '4.8★', label: 'Note moyenne'           },
  ];

  services: Service[] = [
    {
      icon: 'spa',
      name: 'Spa & Bien-être',
      tag: 'Relaxation',
      desc: 'Massages, hammam, soins du visage et rituels beauté par nos thérapeutes experts.',
      image: 'image/img8.jpg',
      tags: ['Hammam', 'Massage', 'Jacuzzi']
    },
    {
      icon: 'pool',
      name: 'Piscine à Débordement',
      tag: 'Loisirs',
      desc: 'Nagez dans notre piscine panoramique chauffée avec bar à cocktails intégré.',
      image: 'image/piscine.jpg',
      tags: ['Chauffée', 'Bar', 'Panoramique']
    },
    {
      icon: 'restaurant',
      name: 'Restaurant Gastronomique',
      tag: 'Gastronomie',
      desc: 'Chef étoilé, saveurs camerounaises revisitées et carte des vins d\'exception.',
      image: 'image/img55.jpg',
      tags: ['Chef Étoilé', 'Terrasse', 'Vins Fins']
    },
    {
      icon: 'fitness_center',
      name: 'Salle de Sport',
      tag: 'Fitness',
      desc: 'Équipements Technogym, coaching personnel, yoga et cardio disponibles 24h/24.',
      image: 'image/sport.jpg',
      tags: ['24h/24', 'Coaching', 'Yoga']
    },
    {
      icon: 'room_service',
      name: 'Room Service',
      tag: 'Confort',
      desc: 'Menu complet livré en chambre à toute heure, du petit-déjeuner au dîner.',
      image: 'image/ff.jpg',
      tags: ['24h/24', 'Menu Complet', 'Rapide']
    },
    {
      icon: 'local_bar',
      name: 'Bar Lounge',
      tag: 'Ambiance',
      desc: 'Cocktails créatifs, champagnes et jazz live du jeudi au dimanche soir.',
      image: 'image/img6.jpg',
      tags: ['Cocktails', 'Champagne', 'Jazz Live']
    },
    {
      icon: 'business_center',
      name: 'Business Center',
      tag: 'Affaires',
      desc: 'Salles de conférence équipées, fibre dédiée et service traiteur.',
      image: 'image/img88d.jpg',
      tags: ['Conférence', 'WiFi Fibre', 'Traiteur']
    },
    {
      icon: 'airport_shuttle',
      name: 'Conciergerie & Navette',
      tag: 'VIP',
      desc: 'Transferts aéroport en limousine, réservations et organisation d\'excursions.',
      image: 'image/img5.jpg',
      tags: ['Aéroport', 'Excursions', 'VIP']
    },
  ];

  /* ---- Galerie masonry ---- */
  gallery: GalleryImage[] = [
    { src: 'image/piscine.jpg',                              alt: 'Piscine à débordement',       span: 'large',  label: 'Piscine' },
    { src: 'image/sport.jpg',                                alt: 'Salle de sport',              span: 'medium', label: 'Fitness' },
    { src: 'image/img55.jpg',                                alt: 'Bar & Restaurant',            span: 'medium', label: 'Bar Lounge' },
    { src: 'image/yoga.jpg',                                 alt: 'Yoga & Méditation',           span: 'small',  label: 'Yoga' },
    { src: 'image/hammocks-umbrellas-placed-near-pool.jpg',  alt: 'Détente au bord de la piscine', span: 'wide', label: 'Piscine & Détente' },
    { src: 'image/imgchambre1.jpg',                          alt: 'Chambre Standard',            span: 'small',  label: 'Chambre Standard' },
    { src: 'image/yoga2.jpg',                                alt: 'Yoga avancé',                 span: 'medium', label: 'Yoga & Bien-être' },
    { src: 'image/img6.jpg',                                 alt: 'Entrée de l\'hôtel',          span: 'medium', label: 'Entrée' },
    { src: 'image/imgchambre3.jpg',                          alt: 'Suite Junior',                span: 'large',  label: 'Suite Junior' },
    { src: 'image/stretching.jpg',                           alt: 'Étirements & Récupération',   span: 'small',  label: 'Récupération' },
    { src: 'image/cardio.jpg',                               alt: 'Cardio & Endurance',          span: 'medium', label: 'Cardio' },
    { src: 'image/imgchambre6.jpg',                          alt: 'Vue Piscine',                 span: 'medium', label: 'Vue Piscine' },
    { src: 'image/luxy.jpg',                                 alt: 'Espace Luxe',                 span: 'small',  label: 'Luxe' },
    { src: 'image/imgchambre7.jpg',                          alt: 'Penthouse Suite',             span: 'wide',   label: 'Penthouse' },
    { src: 'image/img7.jpg',                                 alt: 'DANP Hotel',                  span: 'medium', label: 'Hôtel' },
    { src: 'image/img8.jpg',                                 alt: 'Espace Lounge',               span: 'small',  label: 'Lounge' },
    { src: 'image/45.jpg',                                   alt: 'Intérieur élégant',           span: 'medium', label: 'Intérieur' },
    { src: 'image/ff.jpg',                                   alt: 'Room Service',                span: 'small',  label: 'Room Service' },
    { src: 'image/img88d.jpg',                               alt: 'Extérieur DANP Hotel',        span: 'medium', label: 'Hôtel' },
    { src: 'image/img9.jpg',                                 alt: 'Vue de l\'hôtel',             span: 'small',  label: 'Vue' },
  ];

  spaFeatures = [
    'Massages suédois, pierres chaudes et aux huiles essentielles',
    'Hammam et sauna privatifs disponibles à la réservation',
    'Piscine à débordement chauffée ouverte en toutes saisons',
    'Bar à jus frais et espace détente zen',
    'Soins du visage et rituels beauté sur mesure',
  ];

  restoFeatures = [
    'Menu dégustation 7 services avec accords mets-vins',
    'Buffet petit-déjeuner avec produits locaux bio',
    'Terrasse panoramique avec vue sur la ville',
    'Cave à vins de plus de 200 références',
    'Menus végétariens et allergènes disponibles',
  ];

  packages: Package[] = [
    {
      icon: 'hotel',
      name: 'Séjour Essentiel',
      description: 'L\'essentiel pour un séjour confortable et reposant.',
      features: ['Chambre Standard', 'Petit-déjeuner inclus', 'Wi-Fi', 'Accès piscine'],
      price: 95,
      featured: false
    },
    {
      icon: 'diamond',
      name: 'Séjour Prestige',
      description: 'Notre formule la plus complète pour une expérience inoubliable.',
      features: ['Suite Deluxe', 'Pension complète', 'Accès Spa', 'Navette aéroport', 'Butler dédié', 'Room service 24h'],
      price: 280,
      featured: true
    },
    {
      icon: 'briefcase',
      name: 'Séjour Business',
      description: 'Conçu pour les voyageurs d\'affaires exigeants.',
      features: ['Chambre Deluxe', 'Petit-déjeuner', 'Business Center', 'Transfert aéroport', 'Wi-Fi Fibre'],
      price: 160,
      featured: false
    },
  ];

  reviews: Review[] = [
    { name: 'Sophie M.', initials: 'SM', origin: 'Paris, France',     text: 'Le spa est absolument divin. Personnel aux petits soins, je reviendrai !' },
    { name: 'James K.',  initials: 'JK', origin: 'London, UK',        text: 'Outstanding service. The restaurant is world-class and the pool view is breathtaking.' },
    { name: 'Amina D.',  initials: 'AD', origin: 'Douala, Cameroun',  text: 'L\'hôtel idéal pour une escapade romantique. Room service rapide et délicieux.' },
    { name: 'Lucas R.',  initials: 'LR', origin: 'São Paulo, Brésil', text: 'La salle de sport est équipée comme nulle part ailleurs. Les coachs sont compétents.' },
    { name: 'Fatou B.',  initials: 'FB', origin: 'Dakar, Sénégal',    text: 'La navette aéroport ponctuelle et la conciergerie m\'a organisé de magnifiques excursions.' },
  ];

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.observe(this.servicesSection, () => this.cardsVisible  = true);
    this.observe(this.gallerySection,  () => this.galleryVisible = true);
    this.observe(this.sigSection,      () => this.sigVisible    = true);
    this.observe(this.restoSection,    () => this.restoVisible  = true);
    this.observe(this.packSection,     () => this.packVisible   = true);
  }

  ngOnDestroy(): void {
    this.observers.forEach(o => o.disconnect());
  }

  private observe(ref: ElementRef, callback: () => void): void {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { callback(); obs.disconnect(); } },
      { threshold: 0.08 }
    );
    obs.observe(ref.nativeElement);
    this.observers.push(obs);
  }
}
