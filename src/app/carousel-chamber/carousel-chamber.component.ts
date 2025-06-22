import { Component, HostListener, AfterViewInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-carousel-chamber',
  templateUrl: './carousel-chamber.component.html',
  styleUrls: ['./carousel-chamber.component.css']
})
export class CarouselChamberComponent implements AfterViewInit {
  private mouseDownAt: number = 0;
  private prevPercentage: number = 0;
  public percentage: number = 0;
  private track: HTMLElement | null = null;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.track = document.getElementById("image-track");
  }

  @HostListener('window:mousedown', ['$event'])
  onMouseDown(event: MouseEvent): void {
    this.mouseDownAt = event.clientX;
  }

  @HostListener('window:mouseup')
  onMouseUp(): void {
    this.mouseDownAt = 0;
    this.prevPercentage = this.percentage;
  }

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    if (this.mouseDownAt === 0) return;

    const mouseDelta = this.mouseDownAt - event.clientX;
    const maxDelta = window.innerWidth / 2;
    const nextPercentageUnconstrained = this.prevPercentage + (mouseDelta / maxDelta) * -100;

    this.percentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);
    this.updateCarouselPosition(this.percentage);
  }

  @HostListener('window:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent): void {
    if (event.key === 'ArrowRight') {
      this.percentage = Math.max(this.percentage - 10, -100);
    } else if (event.key === 'ArrowLeft') {
      this.percentage = Math.min(this.percentage + 10, 0);
    }
    this.updateCarouselPosition(this.percentage);
  }

  private updateCarouselPosition(percentage: number): void {
    if (!this.track) return;

    this.renderer.setStyle(this.track, 'transform', `translate(${percentage}%, -50%)`);

    const images = this.track.getElementsByClassName("image") as HTMLCollectionOf<HTMLElement>;
    Array.from(images).forEach((image: HTMLElement) => {
      this.renderer.setStyle(image, 'object-position', `${100 + percentage}% center`);
    });
  }

}
