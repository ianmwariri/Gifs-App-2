import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KutafutaComponent } from './kutafuta.component';

describe('KutafutaComponent', () => {
  let component: KutafutaComponent;
  let fixture: ComponentFixture<KutafutaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KutafutaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KutafutaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
