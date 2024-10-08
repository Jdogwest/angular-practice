import { TranslocoLoader, TranslocoService } from '@ngneat/transloco';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';
import { StatsComponent } from '../stats/stats.component';
import { CombatParametersComponent } from "../combat-parameters/combat-parameters.component";
import { DescriptionComponent } from "../description/description.component";
import { AttacksSpellsComponent } from '../attacks-spells/attacks-spells.component';
import { AbilitiesLanguagesComponent } from "../abilities-languages/abilities-languages.component";
import { InventoryComponent } from '../inventory/inventory.component';
import { FeaturesTraitsComponent } from '../features-traits/features-traits.component';
import { StorageService } from '../storage.service';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, StatsComponent, CommonModule, CombatParametersComponent, AttacksSpellsComponent, DescriptionComponent, InventoryComponent, FeaturesTraitsComponent,AbilitiesLanguagesComponent, ButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(public translateServise: TranslocoService){}

  currentLang: string = 'ru';

  dataService = new StorageService();

  headerData: headerDT = this.dataService.headerData;
  inventoryData: inventoryDT = this.dataService.inventoryData;
  descriptionData: descriptionDT = this.dataService.descriptionData;
  combatData: combatDT = this.dataService.combatData;
  attacksSpellsData: attacksSpellsDT = this.dataService.attacksSpellsData;
  statsData: statsDT = this.dataService.statsData;
  abilLang = this.dataService.abilLangs;
  featTraits = this.dataService.featTraits;

  saveData(value: {dataClass: string, dataName: string, dataValue: any}) {
    this.dataService.setData(value.dataClass, value.dataName, value.dataValue);
  }

  changeLanguage(){
    if (this.currentLang === 'ru'){
      this.translateServise.setActiveLang('en');
      this.currentLang = 'en';
    } else {
      this.translateServise.setActiveLang('ru');
      this.currentLang = 'ru';
    }

  }
}
