import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbilitiesLanguagesComponent } from './abilities-languages.component';

describe('AbilitiesLanguagesComponent', () => {
  let component: AbilitiesLanguagesComponent;
  let fixture: ComponentFixture<AbilitiesLanguagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbilitiesLanguagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbilitiesLanguagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
