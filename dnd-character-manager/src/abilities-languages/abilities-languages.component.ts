import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-abilities-languages',
  standalone: true,
  imports: [InputTextareaModule, FormsModule],
  templateUrl: './abilities-languages.component.html',
  styleUrl: './abilities-languages.component.scss'
})
export class AbilitiesLanguagesComponent {
  abilLang: string = '';
  constructor(private storageService: StorageService) {
    this.abilLang = this.storageService.abilLangs ?? '';
  }
  saveData(data: string){
    this.storageService.abilLangs = data;
    this.storageService.saveAllData();
  }
}
