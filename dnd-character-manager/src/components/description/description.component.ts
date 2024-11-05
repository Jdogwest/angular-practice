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
  selector: 'app-description',
  standalone: true,
  imports: [
    InputTextareaModule,
    FormsModule,
    TranslocoModule,
    ReactiveFormsModule,
  ],
  templateUrl: './description.component.html',
  styleUrl: './description.component.scss',
})
export class DescriptionComponent {
  private readonly storageService: StorageService = inject(StorageService);
  private readonly formBuilder: FormBuilder = inject(FormBuilder);

  descriptionForm: FormGroup;
  subs: Subscription | undefined;

  constructor() {
    let descriptionData =
      this.storageService.getData<IDescription>('descriptionData');
    this.descriptionForm = this.formBuilder.group<IDescription>({
      bonds: descriptionData.bonds,
      flaws: descriptionData.flaws,
      ideals: descriptionData.ideals,
      personality: descriptionData.personality,
    });
  }

  ngOnInit(): void {
    this.descriptionForm.valueChanges
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
      'descriptionData',
      this.descriptionForm.getRawValue()
    );
  }
}
