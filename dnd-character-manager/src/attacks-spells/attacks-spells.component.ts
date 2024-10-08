import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TableModule } from 'primeng/table';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-attacks-spells',
  standalone: true,
  imports: [InputTextareaModule, InputTextModule, TableModule, FormsModule],
  templateUrl: './attacks-spells.component.html',
  styleUrl: './attacks-spells.component.scss'
})
export class AttacksSpellsComponent {
  firstWeaponName: string = '';
  secondWeaponName: string = '';
  thirdWeaponName: string = '';
  firstWeaponBonus: string = '';
  secondWeaponBonus: string = '';
  thirdWeaponBonus: string = '';
  firstWeaponDamage: string = '';
  secondWeaponDamage: string = '';
  thirdWeapondamage: string = '';
  otherWeaponSpells: string = '';
  constructor(private storageService: StorageService) {
    this.firstWeaponName = this.storageService.attacksSpellsData['firstWeaponName'] ?? '';
    this.secondWeaponName = this.storageService.attacksSpellsData['secondWeaponName'] ?? '';
    this.thirdWeaponName = this.storageService.attacksSpellsData['thirdWeaponName'] ?? '';
    this.firstWeaponBonus = this.storageService.attacksSpellsData['firstWeaponBonus'] ?? '';
    this.secondWeaponBonus = this.storageService.attacksSpellsData['secondWeaponBonus'] ?? '';
    this.thirdWeaponBonus = this.storageService.attacksSpellsData['thirdWeaponBonus'] ?? '';
    this.firstWeaponDamage = this.storageService.attacksSpellsData['firstWeaponDamage'] ?? '';
    this.secondWeaponDamage = this.storageService.attacksSpellsData['secondWeaponDamage'] ?? '';
    this.thirdWeapondamage = this.storageService.attacksSpellsData['thirdWeapondamage'] ?? '';
    this.otherWeaponSpells = this.storageService.attacksSpellsData['otherWeaponSpells'] ?? '';
  }
  saveData(key: string, data: any){
    this.storageService.attacksSpellsData[key] = data;
    this.storageService.saveAllData();
  }
}
