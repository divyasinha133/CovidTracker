import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidscreenComponent } from './covidscreen.component';

describe('CovidscreenComponent', () => {
  let component: CovidscreenComponent;
  let fixture: ComponentFixture<CovidscreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CovidscreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
