import { Component } from '@angular/core';

interface TeamMember {
  name: string;
  role: string;
  description: string;
  photo: string;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  team: TeamMember[] = [
    {
      name: 'Daniel Nkomo',
      role: 'Directeur Général',
      description: 'Visionnaire passionné, Daniel dirige le DANP Hotel avec 15 ans d\'expérience dans l\'hôtellerie de luxe internationale.',
      photo: 'image/img88d.jpg'
    },
    {
      name: 'Ange Fotso',
      role: 'Directrice des Opérations',
      description: 'Garante de l\'excellence opérationnelle, Ange veille à ce que chaque aspect du séjour soit impeccable.',
      photo: 'image/img5.jpg'
    },
    {
      name: 'Patrick Mballa',
      role: 'Chef Exécutif',
      description: 'Maître de la gastronomie, Patrick sublime les saveurs locales et internationales dans chaque plat.',
      photo: 'image/imgchambre3.jpg'
    },
    {
      name: 'Nina Beyala',
      role: 'Responsable Bien-être & Spa',
      description: 'Nina transforme chaque visite au spa en un voyage sensoriel unique de relaxation et de régénération.',
      photo: 'image/imgchambre5.jpg'
    }
  ];
}
