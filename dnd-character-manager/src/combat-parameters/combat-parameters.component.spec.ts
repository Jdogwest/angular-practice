import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombatParametersComponent } from './combat-parameters.component';

describe('CombatParametersComponent', () => {
  let component: CombatParametersComponent;
  let fixture: ComponentFixture<CombatParametersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CombatParametersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CombatParametersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
