import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavVeiculoCreateComponent } from './nav-veiculo-create.component';

describe('NavVeiculoCreateComponent', () => {
  let component: NavVeiculoCreateComponent;
  let fixture: ComponentFixture<NavVeiculoCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavVeiculoCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavVeiculoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
