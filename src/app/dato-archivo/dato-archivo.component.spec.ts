import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatoArchivoComponent } from './dato-archivo.component';

describe('DatoArchivoComponent', () => {
  let component: DatoArchivoComponent;
  let fixture: ComponentFixture<DatoArchivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatoArchivoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatoArchivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
