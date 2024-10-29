import { StorageService } from './../app/storage.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslocoModule } from '@ngneat/transloco';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TableModule } from 'primeng/table';
import { DAttackSpells } from '../data-types/data.defaultValues';

@Component({
  selector: 'app-attacks-spells',
  standalone: true,
  imports: [InputTextareaModule, InputTextModule, TableModule, FormsModule, TranslocoModule, ReactiveFormsModule],
  templateUrl: './attacks-spells.component.html',
  styleUrl: './attacks-spells.component.scss'
})
export class AttacksSpellsComponent {
  attacksSpellsForm: FormGroup;

  constructor(private readonly storageService: StorageService){
    let attacksSpellsData = this.storageService.getData<IAttacksSpells>('attacksSpellsData');

    this.attacksSpellsForm = new FormGroup({
      'firstWeaponBonus': new FormControl(attacksSpellsData.firstWeaponBonus),
      'firstWeaponDamage': new FormControl(attacksSpellsData.firstWeaponDamage),
      'firstWeaponName': new FormControl(attacksSpellsData.firstWeaponName),
      'otherWeaponSpells': new FormControl(attacksSpellsData.otherWeaponSpells),
      'secondWeaponBonus': new FormControl(attacksSpellsData.secondWeaponBonus),
      'secondWeaponDamage': new FormControl(attacksSpellsData.secondWeaponDamage),
      'secondWeaponName': new FormControl(attacksSpellsData.secondWeaponName),
      'thirdWeaponBonus': new FormControl(attacksSpellsData.thirdWeaponBonus),
      'thirdWeapondamage': new FormControl(attacksSpellsData.thirdWeapondamage),
      'thirdWeaponName': new FormControl(attacksSpellsData.thirdWeaponName),
    })
  }

  saveData(key: string, data: string) {
    this.storageService.setData(key, data);
  }
}
