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
  selector: 'app-abilities-languages',
  standalone: true,
  imports: [
    InputTextareaModule,
    FormsModule,
    TranslocoModule,
    ReactiveFormsModule,
  ],
  templateUrl: './abilities-languages.component.html',
  styleUrl: './abilities-languages.component.scss',
})
export class AbilitiesLanguagesComponent {
  private readonly storageService: StorageService = inject(StorageService);
  private readonly formBuilder: FormBuilder = inject(FormBuilder);

  abilLangsForm: FormGroup;
  subs: Subscription | undefined;

  constructor() {
    let abilLang = this.storageService.getData('abilLangs');
    this.abilLangsForm = this.formBuilder.group({
      abilLangs: new FormControl(abilLang),
    });
  }

  ngOnInit(): void {
    this.subs = this.abilLangsForm.valueChanges
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
      'abilLangs',
      this.abilLangsForm.get('abilLangs')?.getRawValue()
    );
  }
}
