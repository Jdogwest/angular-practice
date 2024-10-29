import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { StorageService } from '../app/storage.service';
import { TranslocoModule } from '@ngneat/transloco';
import { DStats } from '../data-types/data.defaultValues';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [CheckboxModule, InputTextModule, InputNumberModule, FormsModule, TranslocoModule, ReactiveFormsModule],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.scss',
})
export class StatsComponent {
  statsForm: FormGroup;

  strengthBonus: number = 0;
  dexterityBonus: number = 0;
  constitutionBonus: number = 0;
  intelligenceBonus: number = 0;
  wisdomBonus: number = 0;
  charismaBonus: number = 0;

  constructor(private readonly storageService: StorageService){
    let statsData = this.storageService.getData<IStats>('statsData');

    this.statsForm = new FormGroup({
      charisma: new FormControl(statsData.charisma),
      constitution: new FormControl(statsData.constitution),
      dexterity: new FormControl(statsData.dexterity),
      inspiration: new FormControl(statsData.inspiration),
      intelligence: new FormControl(statsData.intelligence),
      profienceBonus: new FormControl(statsData.profienceBonus),
      strength: new FormControl(statsData.strength),
      wisdom: new FormControl(statsData.wisdom),

      charismaChalChb: new FormControl(statsData.charismaChalChb),
      constitutionChalChb: new FormControl(statsData.constitutionChalChb),
      dexterityChalChb: new FormControl(statsData.dexterityChalChb),
      intelligenceChalChb: new FormControl(statsData.intelligenceChalChb),
      strengthChalChb: new FormControl(statsData.strengthChalChb),
      wisdomChalChb: new FormControl(statsData.wisdomChalChb),

      charismaChalVal: new FormControl(statsData.charismaChalVal),
      constitutionChalVal: new FormControl(statsData.constitutionChalVal),
      dexterityChalVal: new FormControl(statsData.dexterityChalVal),
      intelligenceChalVal: new FormControl(statsData.intelligenceChalVal),
      strengthChalVal: new FormControl(statsData.strengthChalVal),
      wisdomChalVal: new FormControl(statsData.wisdomChalVal),

      acrobaticsChb: new FormControl(statsData.acrobaticsChb),
      arcanaChb: new FormControl(statsData.arcanaChb),
      athleticsChb: new FormControl(statsData.athleticsChb),
      deceptionChb: new FormControl(statsData.deceptionChb),
      handlingChb: new FormControl(statsData.handlingChb),
      historyChb: new FormControl(statsData.historyChb),
      insightChb: new FormControl(statsData.insightChb),
      intimidationChb: new FormControl(statsData.intimidationChb),
      investigationChb: new FormControl(statsData.investigationChb),
      medicineChb: new FormControl(statsData.medicineChb),
      natureChb: new FormControl(statsData.natureChb),
      perceptionChb: new FormControl(statsData.perceptionChb),
      perfomanceChb: new FormControl(statsData.perfomanceChb),
      persuasionChb: new FormControl(statsData.persuasionChb),
      religionChb: new FormControl(statsData.religionChb),
      sleightOfHandChb: new FormControl(statsData.sleightOfHandChb),
      stealthChb: new FormControl(statsData.stealthChb),
      survivalChb: new FormControl(statsData.survivalChb),

      acrobaticsVal: new FormControl(statsData.acrobaticsVal),
      arcanaVal: new FormControl(statsData.arcanaVal),
      athleticsVal: new FormControl(statsData.athleticsVal),
      deceptionVal: new FormControl(statsData.deceptionVal),
      handlingVal: new FormControl(statsData.handlingVal),
      historyVal: new FormControl(statsData.historyVal),
      insightVal: new FormControl(statsData.insightVal),
      intimidationVal: new FormControl(statsData.intimidationVal),
      investigationVal: new FormControl(statsData.investigationVal),
      medicineVal: new FormControl(statsData.medicineVal),
      natureVal: new FormControl(statsData.natureVal),
      perceptionVal: new FormControl(statsData.perceptionVal),
      perfomanceVal: new FormControl(statsData.perfomanceVal),
      persuasionVal: new FormControl(statsData.persuasionVal),
      religionVal: new FormControl(statsData.religionVal),
      sleightOfHandVal: new FormControl(statsData.sleightOfHandVal),
      stealthVal: new FormControl(statsData.stealthVal),
      survivalVal: new FormControl(statsData.survivalVal),
    })

    this.setBonus();
  }

  saveData(key: string, data: string) {
    this.storageService.setData(key, data);
  }

  setBonus() {
    if(this.statsForm.get('strength')?.getRawValue()){
    if (this.statsForm.get('strength')?.getRawValue() > 10) {
      this.strengthBonus = Math.floor((this.statsForm.get('strength')?.getRawValue() - 10) / 2);
    } else {
      this.strengthBonus = Math.ceil((this.statsForm.get('strength')?.getRawValue() - 10) / 2);
    }}

    if (this.statsForm.get('dexterity')?.getRawValue()) {
    if (this.statsForm.get('dexterity')?.getRawValue() > 10) {
      this.dexterityBonus = Math.floor((this.statsForm.get('dexterity')?.getRawValue() - 10) / 2);
    } else {
      this.dexterityBonus = Math.ceil((this.statsForm.get('dexterity')?.getRawValue() - 10) / 2);
    }}

    if (this.statsForm.get('constitution')?.getRawValue()) {
    if (this.statsForm.get('constitution')?.getRawValue() > 10) {
      this.constitutionBonus = Math.floor((this.statsForm.get('constitution')?.getRawValue() - 10) / 2);
    } else {
      this.constitutionBonus = Math.ceil((this.statsForm.get('constitution')?.getRawValue() - 10) / 2);
    }}

    if (this.statsForm.get('intelligence')?.getRawValue()) {
    if (this.statsForm.get('intelligence')?.getRawValue() > 10) {
      this.intelligenceBonus = Math.floor((this.statsForm.get('intelligence')?.getRawValue() - 10) / 2);
    } else {
      this.intelligenceBonus = Math.ceil((this.statsForm.get('intelligence')?.getRawValue() - 10) / 2);
    }}

    if (this.statsForm.get('wisdom')?.getRawValue()) {
    if (this.statsForm.get('wisdom')?.getRawValue() > 10) {
      this.wisdomBonus = Math.floor((this.statsForm.get('wisdom')?.getRawValue() - 10) / 2);
    } else {
      this.wisdomBonus = Math.ceil((this.statsForm.get('wisdom')?.getRawValue() - 10) / 2);
    }}

    if (this.statsForm.get('charisma')?.getRawValue()) {
    if (this.statsForm.get('charisma')?.getRawValue() > 10) {
      this.charismaBonus = Math.floor((this.statsForm.get('charisma')?.getRawValue() - 10) / 2);
    } else {
      this.charismaBonus = Math.ceil((this.statsForm.get('charisma')?.getRawValue() - 10) / 2);
    }}
  }
}
