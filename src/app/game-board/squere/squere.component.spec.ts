import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquereComponent } from './squere.component';

describe('SquereComponent', () => {
  let component: SquereComponent;
  let fixture: ComponentFixture<SquereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SquereComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SquereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
