import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { StorageService } from '../app/storage.service';
import { TranslocoModule } from '@ngneat/transloco';
import { DStats } from '../data-types/data.defaultValues';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [CheckboxModule, InputTextModule, InputNumberModule, FormsModule, TranslocoModule],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.scss',
})
export class StatsComponent {
  strengthBonus: number = 0;
  dexterityBonus: number = 0;
  constitutionBonus: number = 0;
  intelligenceBonus: number = 0;
  wisdomBonus: number = 0;
  charismaBonus: number = 0;

  constructor(private readonly storageService: StorageService){}

  statsData: IStats = DStats;

  ngOnInit (){
    this.statsData = this.storageService.getData<IStats>('statsData');
  }

  saveData(key: string, data: string) {
    this.storageService.setData(key, data);
  }

  setBonus() {
    if (this.statsData.strength > 10) {
      this.strengthBonus = Math.floor((this.statsData.strength - 10) / 2);
    } else {
      this.strengthBonus = Math.ceil((this.statsData.strength - 10) / 2);
    }
    if (this.statsData.dexterity > 10) {
      this.dexterityBonus = Math.floor((this.statsData.dexterity - 10) / 2);
    } else {
      this.dexterityBonus = Math.ceil((this.statsData.dexterity - 10) / 2);
    }
    if (this.statsData.constitution > 10) {
      this.constitutionBonus = Math.floor((this.statsData.constitution - 10) / 2);
    } else {
      this.constitutionBonus = Math.ceil((this.statsData.constitution - 10) / 2);
    }
    if (this.statsData.intelligence > 10) {
      this.intelligenceBonus = Math.floor((this.statsData.intelligence - 10) / 2);
    } else {
      this.intelligenceBonus = Math.ceil((this.statsData.intelligence - 10) / 2);
    }
    if (this.statsData.wisdom > 10) {
      this.wisdomBonus = Math.floor((this.statsData.wisdom - 10) / 2);
    } else {
      this.wisdomBonus = Math.ceil((this.statsData.wisdom - 10) / 2);
    }
    if (this.statsData.charisma > 10) {
      this.charismaBonus = Math.floor((this.statsData.charisma - 10) / 2);
    } else {
      this.charismaBonus = Math.ceil((this.statsData.charisma - 10) / 2);
    }
  }
}
