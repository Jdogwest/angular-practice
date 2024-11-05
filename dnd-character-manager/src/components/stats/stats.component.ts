import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { TranslocoModule } from '@ngneat/transloco';
import { CheckboxModule } from 'primeng/checkbox';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { debounceTime, Subscription } from 'rxjs';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [
    CheckboxModule,
    InputTextModule,
    InputNumberModule,
    FormsModule,
    TranslocoModule,
    ReactiveFormsModule,
  ],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.scss',
})
export class StatsComponent {
  private readonly storageService: StorageService = inject(StorageService);
  private readonly formBuilder: FormBuilder = inject(FormBuilder);

  statsForm: FormGroup;
  subs: Subscription | undefined;

  strengthBonus: number = 0;
  dexterityBonus: number = 0;
  constitutionBonus: number = 0;
  intelligenceBonus: number = 0;
  wisdomBonus: number = 0;
  charismaBonus: number = 0;

  constructor() {
    let statsData = this.storageService.getData<IStats>('statsData');

    this.statsForm = this.formBuilder.group<IStats>({
      charisma: statsData.charisma,
      constitution: statsData.constitution,
      dexterity: statsData.dexterity,
      inspiration: statsData.inspiration,
      intelligence: statsData.intelligence,
      profienceBonus: statsData.profienceBonus,
      strength: statsData.strength,
      wisdom: statsData.wisdom,

      charismaChalChb: statsData.charismaChalChb,
      constitutionChalChb: statsData.constitutionChalChb,
      dexterityChalChb: statsData.dexterityChalChb,
      intelligenceChalChb: statsData.intelligenceChalChb,
      strengthChalChb: statsData.strengthChalChb,
      wisdomChalChb: statsData.wisdomChalChb,

      charismaChalVal: statsData.charismaChalVal,
      constitutionChalVal: statsData.constitutionChalVal,
      dexterityChalVal: statsData.dexterityChalVal,
      intelligenceChalVal: statsData.intelligenceChalVal,
      strengthChalVal: statsData.strengthChalVal,
      wisdomChalVal: statsData.wisdomChalVal,

      acrobaticsChb: statsData.acrobaticsChb,
      arcanaChb: statsData.arcanaChb,
      athleticsChb: statsData.athleticsChb,
      deceptionChb: statsData.deceptionChb,
      handlingChb: statsData.handlingChb,
      historyChb: statsData.historyChb,
      insightChb: statsData.insightChb,
      intimidationChb: statsData.intimidationChb,
      investigationChb: statsData.investigationChb,
      medicineChb: statsData.medicineChb,
      natureChb: statsData.natureChb,
      perceptionChb: statsData.perceptionChb,
      perfomanceChb: statsData.perfomanceChb,
      persuasionChb: statsData.persuasionChb,
      religionChb: statsData.religionChb,
      sleightOfHandChb: statsData.sleightOfHandChb,
      stealthChb: statsData.stealthChb,
      survivalChb: statsData.survivalChb,

      acrobaticsVal: statsData.acrobaticsVal,
      arcanaVal: statsData.arcanaVal,
      athleticsVal: statsData.athleticsVal,
      deceptionVal: statsData.deceptionVal,
      handlingVal: statsData.handlingVal,
      historyVal: statsData.historyVal,
      insightVal: statsData.insightVal,
      intimidationVal: statsData.intimidationVal,
      investigationVal: statsData.investigationVal,
      medicineVal: statsData.medicineVal,
      natureVal: statsData.natureVal,
      perceptionVal: statsData.perceptionVal,
      perfomanceVal: statsData.perfomanceVal,
      persuasionVal: statsData.persuasionVal,
      religionVal: statsData.religionVal,
      sleightOfHandVal: statsData.sleightOfHandVal,
      stealthVal: statsData.stealthVal,
      survivalVal: statsData.survivalVal,
    });

    this.setBonus();
  }

  ngOnInit(): void {
    this.statsForm.valueChanges.pipe(debounceTime(1000)).subscribe((_) => {
      this.setBonus();
      this.saveToStorage();
    });
  }

  ngOnDestroy() {
    this.subs?.unsubscribe;
  }

  saveToStorage() {
    this.storageService.setData('statsData', this.statsForm.getRawValue());
  }

  setBonus() {
    if (this.statsForm.get('strength')?.getRawValue()) {
      if (this.statsForm.get('strength')?.getRawValue() > 10) {
        this.strengthBonus = Math.floor(
          (this.statsForm.get('strength')?.getRawValue() - 10) / 2
        );
      } else {
        this.strengthBonus = Math.ceil(
          (this.statsForm.get('strength')?.getRawValue() - 10) / 2
        );
      }
    }

    if (this.statsForm.get('dexterity')?.getRawValue()) {
      if (this.statsForm.get('dexterity')?.getRawValue() > 10) {
        this.dexterityBonus = Math.floor(
          (this.statsForm.get('dexterity')?.getRawValue() - 10) / 2
        );
      } else {
        this.dexterityBonus = Math.ceil(
          (this.statsForm.get('dexterity')?.getRawValue() - 10) / 2
        );
      }
    }

    if (this.statsForm.get('constitution')?.getRawValue()) {
      if (this.statsForm.get('constitution')?.getRawValue() > 10) {
        this.constitutionBonus = Math.floor(
          (this.statsForm.get('constitution')?.getRawValue() - 10) / 2
        );
      } else {
        this.constitutionBonus = Math.ceil(
          (this.statsForm.get('constitution')?.getRawValue() - 10) / 2
        );
      }
    }

    if (this.statsForm.get('intelligence')?.getRawValue()) {
      if (this.statsForm.get('intelligence')?.getRawValue() > 10) {
        this.intelligenceBonus = Math.floor(
          (this.statsForm.get('intelligence')?.getRawValue() - 10) / 2
        );
      } else {
        this.intelligenceBonus = Math.ceil(
          (this.statsForm.get('intelligence')?.getRawValue() - 10) / 2
        );
      }
    }

    if (this.statsForm.get('wisdom')?.getRawValue()) {
      if (this.statsForm.get('wisdom')?.getRawValue() > 10) {
        this.wisdomBonus = Math.floor(
          (this.statsForm.get('wisdom')?.getRawValue() - 10) / 2
        );
      } else {
        this.wisdomBonus = Math.ceil(
          (this.statsForm.get('wisdom')?.getRawValue() - 10) / 2
        );
      }
    }

    if (this.statsForm.get('charisma')?.getRawValue()) {
      if (this.statsForm.get('charisma')?.getRawValue() > 10) {
        this.charismaBonus = Math.floor(
          (this.statsForm.get('charisma')?.getRawValue() - 10) / 2
        );
      } else {
        this.charismaBonus = Math.ceil(
          (this.statsForm.get('charisma')?.getRawValue() - 10) / 2
        );
      }
    }
  }
}
