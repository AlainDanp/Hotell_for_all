import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChamberGaleryComponent } from './chamber-galery.component';

describe('ChamberGaleryComponent', () => {
  let component: ChamberGaleryComponent;
  let fixture: ComponentFixture<ChamberGaleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChamberGaleryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChamberGaleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
