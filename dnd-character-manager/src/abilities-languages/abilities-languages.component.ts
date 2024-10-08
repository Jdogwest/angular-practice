import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { StorageService } from '../storage.service';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  selector: 'app-abilities-languages',
  standalone: true,
  imports: [InputTextareaModule, FormsModule, TranslocoModule],
  templateUrl: './abilities-languages.component.html',
  styleUrl: './abilities-languages.component.scss'
})
export class AbilitiesLanguagesComponent {
  @Input({ required: true }) abilLang!: string;
  @Output() onSave: EventEmitter<{dataClass: string, dataName: string, dataValue: any}> = new EventEmitter();

  saveData(data: any) {
    this.onSave.emit({dataClass: 'abilLang', dataName: '', dataValue: data});
  }
}
