import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopWorksComponent } from './top-works.component';

describe('TopWorksComponent', () => {
  let component: TopWorksComponent;
  let fixture: ComponentFixture<TopWorksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopWorksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
