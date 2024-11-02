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
  abilLangsForm: FormGroup;
  subs: Subscription | undefined;

  constructor(private readonly storageService: StorageService) {
    let abilLang = this.storageService.getData('abilLangs');
    this.abilLangsForm = new FormGroup({
      abilLangs: new FormControl(abilLang),
    });
  }

  ngOnInit(): void {
    this.subs = this.abilLangsForm.valueChanges
      .pipe(debounceTime(1000))
      .subscribe((_) => {
        this.storageService.setData(
          'abilLangs',
          this.abilLangsForm.get('abilLangs')?.getRawValue()
        );
      });
  }

  ngOnDestroy() {
    this.subs?.unsubscribe;
  }
}
