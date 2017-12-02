import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroRegistrationComponent } from './hero-registration.component';

describe('HeroRegistrationComponent', () => {
  let component: HeroRegistrationComponent;
  let fixture: ComponentFixture<HeroRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
