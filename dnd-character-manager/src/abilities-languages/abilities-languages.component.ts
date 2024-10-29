import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { StorageService } from '../app/storage.service';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  selector: 'app-abilities-languages',
  standalone: true,
  imports: [InputTextareaModule, FormsModule, TranslocoModule, ReactiveFormsModule],
  templateUrl: './abilities-languages.component.html',
  styleUrl: './abilities-languages.component.scss'
})
export class AbilitiesLanguagesComponent {
  abilLangsForm: FormGroup;

  constructor(private readonly storageService: StorageService){
    let abilLang = this.storageService.getData('abilLangs');

    this.abilLangsForm = new FormGroup({
      'abilLangs': new FormControl(abilLang)
    })
  }

  saveData(data: string) {
    this.storageService.setData('abilLangs', data);
  }
}
