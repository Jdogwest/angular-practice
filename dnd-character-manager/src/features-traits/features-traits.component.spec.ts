import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesTraitsComponent } from './features-traits.component';

describe('FeaturesTraitsComponent', () => {
  let component: FeaturesTraitsComponent;
  let fixture: ComponentFixture<FeaturesTraitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturesTraitsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturesTraitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
