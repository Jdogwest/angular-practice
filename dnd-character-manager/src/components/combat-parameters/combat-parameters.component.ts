import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslocoModule } from '@ngneat/transloco';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-combat-parameters',
  standalone: true,
  imports: [InputTextareaModule, InputTextModule, CheckboxModule, FormsModule, TranslocoModule, ReactiveFormsModule],
  templateUrl: './combat-parameters.component.html',
  styleUrl: './combat-parameters.component.scss'
})
export class CombatParametersComponent {
  combatParametersForm: FormGroup;

  constructor(private readonly storageService: StorageService){
    let combatData = this.storageService.getData<ICombat>('combatData');

    this.combatParametersForm = new FormGroup({
      'armorClass': new FormControl(combatData.armorClass),
      'currentHP': new FormControl(combatData.currentHP),
      'diceName': new FormControl(combatData.diceName),
      'failureFirst': new FormControl(combatData.failureFirst),
      'failureSecond': new FormControl(combatData.failureSecond),
      'failureThird': new FormControl(combatData.failureThird),
      'initiative': new FormControl(combatData.initiative),
      'maxHP': new FormControl(combatData.maxHP),
      'speed': new FormControl(combatData.speed),
      'successFirst': new FormControl(combatData.successFirst),
      'successSecond': new FormControl(combatData.successSecond),
      'successThird': new FormControl(combatData.successThird),
      'temporaryHP': new FormControl(combatData.temporaryHP),
      'totalHD': new FormControl(combatData.totalHD),
    })
  }

  saveData(key: string, data: string) {
    this.storageService.setData(key, data);
  }
}
