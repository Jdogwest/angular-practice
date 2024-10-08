import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-combat-parameters',
  standalone: true,
  imports: [InputTextareaModule, InputTextModule, CheckboxModule, FormsModule],
  templateUrl: './combat-parameters.component.html',
  styleUrl: './combat-parameters.component.scss'
})
export class CombatParametersComponent {
  da: boolean = false;
  armorClass: string = '';
  initiative: string = '';
  speed: string = '';
  maxHP: string = '';
  currentHP: string = '';
  temporaryHP: string = '';
  totalHD: string = '';
  diceName: string = '';
  successFirst: boolean = false;
  successSecond: boolean = false;
  successThird: boolean = false;
  failureFirst: boolean = false;
  failureSecond: boolean = false;
  failureThird: boolean = false;

  constructor(private storageService: StorageService) {
    this.armorClass = this.storageService.combatData['armorClass'] ?? '';
    this.initiative = this.storageService.combatData['initiative'] ?? '';
    this.speed = this.storageService.combatData['speed'] ?? '';
    this.maxHP = this.storageService.combatData['maxHP'] ?? '';
    this.currentHP = this.storageService.combatData['currentHP'] ?? '';
    this.temporaryHP = this.storageService.combatData['temporaryHP'] ?? '';
    this.totalHD = this.storageService.combatData['totalHD'] ?? '';
    this.diceName = this.storageService.combatData['diceName'] ?? '';
    this.successFirst = this.storageService.combatData['successFirst'] ?? '';
    this.successSecond = this.storageService.combatData['successSecond'] ?? '';
    this.successThird = this.storageService.combatData['successThird'] ?? '';
    this.failureFirst = this.storageService.combatData['failureFirst'] ?? '';
    this.failureSecond = this.storageService.combatData['failureSecond'] ?? '';
    this.failureThird = this.storageService.combatData['failureThird'] ?? '';
  }
  saveData(key: string, data: any){
    this.storageService.combatData[key] = data;
    this.storageService.saveAllData();
  }
}
