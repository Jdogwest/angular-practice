import { Component, inject } from '@angular/core';
import {
  FormBuilder,
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
  private readonly storageService: StorageService = inject(StorageService);
  private readonly formBuilder: FormBuilder = inject(FormBuilder);

  featuresTraitsForm: FormGroup;
  subs: Subscription | undefined;

  constructor() {
    let featTraits = this.storageService.getData('featTraits');
    this.featuresTraitsForm = this.formBuilder.group({
      featTraits: new FormControl(featTraits),
    });
  }

  ngOnInit(): void {
    this.featuresTraitsForm.valueChanges
      .pipe(debounceTime(1000))
      .subscribe((_) => {
        this.saveToStorage();
      });
  }

  ngOnDestroy() {
    this.subs?.unsubscribe;
  }

  saveToStorage() {
    this.storageService.setData(
      'featTraits',
      this.featuresTraitsForm.get('featTraits')?.getRawValue()
    );
  }
}
