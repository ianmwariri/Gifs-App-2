import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KichwaComponent } from './kichwa.component';

describe('KichwaComponent', () => {
  let component: KichwaComponent;
  let fixture: ComponentFixture<KichwaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KichwaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KichwaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
