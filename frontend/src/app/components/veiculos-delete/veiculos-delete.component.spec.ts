import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeiculosDeleteComponent } from './veiculos-delete.component';

describe('VeiculosDeleteComponent', () => {
  let component: VeiculosDeleteComponent;
  let fixture: ComponentFixture<VeiculosDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeiculosDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VeiculosDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
