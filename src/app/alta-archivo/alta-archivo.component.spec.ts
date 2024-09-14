import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaArchivoComponent } from './alta-archivo.component';

describe('AltaArchivoComponent', () => {
  let component: AltaArchivoComponent;
  let fixture: ComponentFixture<AltaArchivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AltaArchivoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AltaArchivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
