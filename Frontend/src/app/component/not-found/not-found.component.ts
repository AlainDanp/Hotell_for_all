import { Component, OnDestroy, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements AfterViewInit, OnDestroy {

  @ViewChild('overlay') overlayEl!: ElementRef<HTMLDivElement>;

  private flickerInterval: any;
  private radius = 160;
  private mouseX = -999;
  private mouseY = -999;

  ngAfterViewInit(): void {
    this.applyOverlay();
    this.startFlicker();
  }

  ngOnDestroy(): void {
    clearInterval(this.flickerInterval);
  }

  onMouseMove(e: MouseEvent): void {
    this.mouseX = e.clientX;
    this.mouseY = e.clientY;
    this.applyOverlay();
  }

  onMouseLeave(): void {
    this.mouseX = -999;
    this.mouseY = -999;
    this.applyOverlay();
  }

  private startFlicker(): void {
    this.flickerInterval = setInterval(() => {
      this.radius = 150 + Math.random() * 25;
      this.applyOverlay();
    }, 80);
  }

  private applyOverlay(): void {
    const x  = this.mouseX;
    const y  = this.mouseY;
    const r  = Math.round(this.radius);
    const r2 = Math.round(r * 1.9);

    this.overlayEl.nativeElement.style.background = `
      radial-gradient(circle ${r}px at ${x}px ${y}px,
        rgba(255, 175, 35, 0.12)  0%,
        rgba(255, 130, 10, 0.06) 35%,
        rgba(0,   0,   0, 0.60) 58%,
        rgba(0,   0,   0, 0.90) ${r2}px,
        rgba(0,   0,   0, 0.95) 100%
      )
    `;
  }
}
