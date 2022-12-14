import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeiculosReadComponent } from './veiculos-read.component';

describe('VeiculosReadComponent', () => {
  let component: VeiculosReadComponent;
  let fixture: ComponentFixture<VeiculosReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeiculosReadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VeiculosReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
