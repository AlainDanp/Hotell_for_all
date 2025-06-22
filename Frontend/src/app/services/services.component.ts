import { AfterViewInit, Component } from '@angular/core';
import Swiper from 'swiper';
import ScrollReveal from 'scrollreveal';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {
    this.initializeSwiper();
    this.initializeScrollReveal();
  }

  private initializeSwiper(): void {
    new Swiper('.swiper', {
      slidesPerView: 3,
      spaceBetween: 20,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }

  private initializeScrollReveal(): void {
    const scrollRevealOption = {
      origin: 'bottom',
      distance: '50px',
      duration: 1000,
    };

    ScrollReveal().reveal('.container_card', {
      ...scrollRevealOption,
      interval: 500,
    });

    ScrollReveal().reveal('.journey_card', {
      ...scrollRevealOption,
      origin: 'right',
      interval: 500,
    });

    ScrollReveal().reveal('.showcase_image img', {
      ...scrollRevealOption,
      origin: 'left',
    });

    ScrollReveal().reveal('.showcase_content p', {
      ...scrollRevealOption,
      delay: 500,
    });

    ScrollReveal().reveal('.showcase_content h4', {
      ...scrollRevealOption,
      delay: 500,
    });

    ScrollReveal().reveal('.showcase_btn', {
      ...scrollRevealOption,
      delay: 500,
    });

    ScrollReveal().reveal('.banner_card', {
      ...scrollRevealOption,
      interval: 500,
    });

    ScrollReveal().reveal('.discover_card', {
      ...scrollRevealOption,
      interval: 500,
    });

    ScrollReveal().reveal('.wrapper', {
      ...scrollRevealOption,
      interval: 500,
    });

    ScrollReveal().reveal('.about', {
      ...scrollRevealOption,
      interval: 500,
    });

  }
}
