import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttacksSpellsComponent } from './attacks-spells.component';

describe('AttacksSpellsComponent', () => {
  let component: AttacksSpellsComponent;
  let fixture: ComponentFixture<AttacksSpellsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttacksSpellsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttacksSpellsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
