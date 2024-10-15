import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { StorageService } from '../app/storage.service';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  selector: 'app-abilities-languages',
  standalone: true,
  imports: [InputTextareaModule, FormsModule, TranslocoModule],
  templateUrl: './abilities-languages.component.html',
  styleUrl: './abilities-languages.component.scss'
})
export class AbilitiesLanguagesComponent {
  @Input({ required: true }) storageService!: StorageService;

  abilLang!: string;

  ngOnInit (){
    this.abilLang = this.storageService.getData('abilLang') as string;
  }

  saveData(data: string) {
    this.storageService.setData('abilLangs', data);
  }
}
