import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnTsComponent } from './learn-ts.component';

describe('LearnTsComponent', () => {
  let component: LearnTsComponent;
  let fixture: ComponentFixture<LearnTsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearnTsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnTsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
