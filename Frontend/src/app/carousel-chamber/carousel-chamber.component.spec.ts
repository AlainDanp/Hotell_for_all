import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselChamberComponent } from './carousel-chamber.component';

describe('CarouselChamberComponent', () => {
  let component: CarouselChamberComponent;
  let fixture: ComponentFixture<CarouselChamberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarouselChamberComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselChamberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
