import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [CheckboxModule, InputTextModule, InputNumberModule, FormsModule],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.scss',
})
export class StatsComponent {
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;

  strengthBonus: number = 0;
  dexterityBonus: number = 0;
  constitutionBonus: number = 0;
  intelligenceBonus: number = 0;
  wisdomBonus: number = 0;
  charismaBonus: number = 0;

  inspiration: number;
  profienceBonus: string;

  strengthChalChb: boolean;
  dexterityChalChb: boolean;
  constitutionChalChb: boolean;
  intelligenceChalChb: boolean;
  wisdomChalChb: boolean;
  charismaChalChb: boolean;

  strengthChalVal: number;
  dexterityChalVal: number;
  constitutionChalVal: number;
  intelligenceChalVal: number;
  wisdomChalVal: number;
  charismaChalVal: number;

  acrobaticsChb: boolean;
  athleticsChb: boolean;
  perceptionChb: boolean;
  survivalChb: boolean;
  handlingChb: boolean;
  intimidationChb: boolean;
  perfomanceChb: boolean;
  historyChb: boolean;
  sleightOfHandChb: boolean;
  arcanaChb: boolean;
  medicineChb: boolean;
  deceptionChb: boolean;
  natureChb: boolean;
  insightChb: boolean;
  investigationChb: boolean;
  religionChb: boolean;
  stealthChb: boolean;
  persuasionChb: boolean;

  acrobaticsVal: number;
  athleticsVal: number;
  perceptionVal: number;
  survivalVal: number;
  handlingVal: number;
  intimidationVal: number;
  perfomanceVal: number;
  historyVal: number;
  sleightOfHandVal: number;
  arcanaVal: number;
  medicineVal: number;
  deceptionVal: number;
  natureVal: number;
  insightVal: number;
  investigationVal: number;
  religionVal: number;
  stealthVal: number;
  persuasionVal: number;

  constructor(private storageService: StorageService) {
    this.strength = this.storageService.statsData['strength'] ?? '';
    this.dexterity = this.storageService.statsData['dexterity'] ?? '';
    this.constitution = this.storageService.statsData['constitution'] ?? '';
    this.intelligence = this.storageService.statsData['intelligence'] ?? '';
    this.wisdom = this.storageService.statsData['wisdom'] ?? '';
    this.charisma = this.storageService.statsData['charisma'] ?? '';
    this.setBonus();
    this.inspiration = this.storageService.statsData['inspiration'] ?? '';
    this.profienceBonus = this.storageService.statsData['profienceBonus'] ?? '';

    this.strengthChalChb =
      this.storageService.statsData['strengthChalChb'] ?? '';
    this.dexterityChalChb =
      this.storageService.statsData['dexterityChalChb'] ?? '';
    this.constitutionChalChb =
      this.storageService.statsData['constitutionChalChb'] ?? '';
    this.intelligenceChalChb =
      this.storageService.statsData['intelligenceChalChb'] ?? '';
    this.wisdomChalChb = this.storageService.statsData['wisdomChalChb'] ?? '';
    this.charismaChalChb =
      this.storageService.statsData['charismaChalChb'] ?? '';

    this.strengthChalVal =
      this.storageService.statsData['strengthChalVal'] ?? '';
    this.dexterityChalVal =
      this.storageService.statsData['dexterityChalVal'] ?? '';
    this.constitutionChalVal =
      this.storageService.statsData['constitutionChalVal'] ?? '';
    this.intelligenceChalVal =
      this.storageService.statsData['intelligenceChalVal'] ?? '';
    this.wisdomChalVal = this.storageService.statsData['wisdomChalVal'] ?? '';
    this.charismaChalVal =
      this.storageService.statsData['charismaChalVal'] ?? '';

    this.acrobaticsChb = this.storageService.statsData['acrobaticsChb'] ?? '';
    this.athleticsChb = this.storageService.statsData['athleticsChb'] ?? '';
    this.perceptionChb = this.storageService.statsData['perceptionChb'] ?? '';
    this.survivalChb = this.storageService.statsData['survivalChb'] ?? '';
    this.handlingChb = this.storageService.statsData['handlingChb'] ?? '';
    this.intimidationChb = this.storageService.statsData['intimidationChb'] ?? '';
    this.perfomanceChb = this.storageService.statsData['perfomanceChb'] ?? '';
    this.historyChb = this.storageService.statsData['historyChb'] ?? '';
    this.sleightOfHandChb = this.storageService.statsData['sleightOfHandChb'] ?? '';
    this.arcanaChb = this.storageService.statsData['arcanaChb'] ?? '';
    this.medicineChb = this.storageService.statsData['medicineChb'] ?? '';
    this.deceptionChb = this.storageService.statsData['deceptionChb'] ?? '';
    this.natureChb = this.storageService.statsData['natureChb'] ?? '';
    this.insightChb = this.storageService.statsData['insightChb'] ?? '';
    this.investigationChb = this.storageService.statsData['investigationChb'] ?? '';
    this.religionChb = this.storageService.statsData['religionChb'] ?? '';
    this.stealthChb = this.storageService.statsData['stealthChb'] ?? '';
    this.persuasionChb = this.storageService.statsData['persuasionChb'] ?? '';

    this.acrobaticsVal = this.storageService.statsData['acrobaticsVal'] ?? '';
    this.athleticsVal = this.storageService.statsData['athleticsVal'] ?? '';
    this.perceptionVal = this.storageService.statsData['perceptionVal'] ?? '';
    this.survivalVal = this.storageService.statsData['survivalVal'] ?? '';
    this.handlingVal = this.storageService.statsData['handlingVal'] ?? '';
    this.intimidationVal = this.storageService.statsData['intimidationVal'] ?? '';
    this.perfomanceVal = this.storageService.statsData['perfomanceVal'] ?? '';
    this.historyVal = this.storageService.statsData['historyVal'] ?? '';
    this.sleightOfHandVal = this.storageService.statsData['sleightOfHandVal'] ?? '';
    this.arcanaVal = this.storageService.statsData['arcanaVal'] ?? '';
    this.medicineVal = this.storageService.statsData['medicineVal'] ?? '';
    this.deceptionVal = this.storageService.statsData['deceptionVal'] ?? '';
    this.natureVal = this.storageService.statsData['natureVal'] ?? '';
    this.insightVal = this.storageService.statsData['insightVal'] ?? '';
    this.investigationVal = this.storageService.statsData['investigationVal'] ?? '';
    this.religionVal = this.storageService.statsData['religionVal'] ?? '';
    this.stealthVal = this.storageService.statsData['stealthVal'] ?? '';
    this.persuasionVal = this.storageService.statsData['persuasionVal'] ?? '';
  }

  setBonus() {
    if (this.strength > 10) {
      this.strengthBonus = Math.floor((this.strength - 10) / 2);
    } else {
      this.strengthBonus = Math.ceil((this.strength - 10) / 2);
    }
    if (this.dexterity > 10) {
      this.dexterityBonus = Math.floor((this.dexterity - 10) / 2);
    } else {
      this.dexterityBonus = Math.ceil((this.dexterity - 10) / 2);
    }
    if (this.constitution > 10) {
      this.constitutionBonus = Math.floor((this.constitution - 10) / 2);
    } else {
      this.constitutionBonus = Math.ceil((this.constitution - 10) / 2);
    }
    if (this.intelligence > 10) {
      this.intelligenceBonus = Math.floor((this.intelligence - 10) / 2);
    } else {
      this.intelligenceBonus = Math.ceil((this.intelligence - 10) / 2);
    }
    if (this.wisdom > 10) {
      this.wisdomBonus = Math.floor((this.wisdom - 10) / 2);
    } else {
      this.wisdomBonus = Math.ceil((this.wisdom - 10) / 2);
    }
    if (this.charisma > 10) {
      this.charismaBonus = Math.floor((this.charisma - 10) / 2);
    } else {
      this.charismaBonus = Math.ceil((this.charisma - 10) / 2);
    }
  }
  saveData(key: string, data: any) {
    this.storageService.statsData[key] = data;
    this.storageService.saveAllData();
  }
}
