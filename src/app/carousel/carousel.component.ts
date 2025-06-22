import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements AfterViewInit {
  @ViewChild('next') nextButton!: ElementRef<HTMLButtonElement>;
  @ViewChild('prev') prevButton!: ElementRef<HTMLButtonElement>;
  @ViewChild('carousel') carousel!: ElementRef<HTMLElement>;

  private timeRunning: number = 3000;
  private timeAutoNext: number = 7000;
  private runTimeOut!: ReturnType<typeof setTimeout>;
  private runNextAuto!: ReturnType<typeof setTimeout>;

  ngAfterViewInit(): void {
    this.initializeCarousel();
  }

  private initializeCarousel(): void {
    const carouselDom = this.carousel.nativeElement;
    const nextDom = this.nextButton.nativeElement;
    const prevDom = this.prevButton.nativeElement;

    const sliderDom = carouselDom.querySelector('.list') as HTMLElement;
    const thumbnailBorderDom = carouselDom.querySelector('.thumbnail') as HTMLElement;
    const thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item') as NodeListOf<HTMLElement>;

    thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);

    nextDom.onclick = () => this.showSlider('next', sliderDom, thumbnailBorderDom, thumbnailItemsDom);
    prevDom.onclick = () => this.showSlider('prev', sliderDom, thumbnailBorderDom, thumbnailItemsDom);

    this.runNextAuto = setTimeout(() => nextDom.click(), this.timeAutoNext);
  }

  private showSlider(type: 'next' | 'prev', sliderDom: HTMLElement, thumbnailBorderDom: HTMLElement, thumbnailItemsDom: NodeListOf<HTMLElement>): void {
    const sliderItemsDom = sliderDom.querySelectorAll('.item') as NodeListOf<HTMLElement>;

    if (type === 'next') {
      sliderDom.appendChild(sliderItemsDom[0]);
      thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
      this.carousel.nativeElement.classList.add('next');
    } else {
      sliderDom.prepend(sliderItemsDom[sliderItemsDom.length - 1]);
      thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
      this.carousel.nativeElement.classList.add('prev');
    }

    clearTimeout(this.runTimeOut);
    this.runTimeOut = setTimeout(() => {
      this.carousel.nativeElement.classList.remove('next', 'prev');
    }, this.timeRunning);

    clearTimeout(this.runNextAuto);
    this.runNextAuto = setTimeout(() => this.nextButton.nativeElement.click(), this.timeAutoNext);
  }
}
