import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { TranslocoModule } from '@ngneat/transloco';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { debounceTime, Subscription } from 'rxjs';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-features-traits',
  standalone: true,
  imports: [
    InputTextareaModule,
    FormsModule,
    TranslocoModule,
    ReactiveFormsModule,
  ],
  templateUrl: './features-traits.component.html',
  styleUrl: './features-traits.component.scss',
})
export class FeaturesTraitsComponent {
  featuresTraitsForm: FormGroup;
  subs: Subscription | undefined;

  constructor(private readonly storageService: StorageService) {
    let featTraits = this.storageService.getData('featTraits');
    this.featuresTraitsForm = new FormGroup({
      featTraits: new FormControl(featTraits),
    });
  }

  ngOnInit(): void {
    this.featuresTraitsForm.valueChanges
      .pipe(debounceTime(1000))
      .subscribe((_) => {
        this.storageService.setData(
          'featTraits',
          this.featuresTraitsForm.get('featTraits')?.getRawValue()
        );
      });
  }

  ngOnDestroy() {
    this.subs?.unsubscribe;
  }
}
