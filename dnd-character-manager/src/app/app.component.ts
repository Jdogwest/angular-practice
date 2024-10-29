import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { StatsComponent } from '../stats/stats.component';
import { CombatParametersComponent } from "../combat-parameters/combat-parameters.component";
import { DescriptionComponent } from "../description/description.component";
import { AttacksSpellsComponent } from '../attacks-spells/attacks-spells.component';
import { AbilitiesLanguagesComponent } from "../abilities-languages/abilities-languages.component";
import { InventoryComponent } from '../inventory/inventory.component';
import { FeaturesTraitsComponent } from '../features-traits/features-traits.component';
import { StorageService } from './storage.service';
import { ButtonModule } from 'primeng/button';
import { TranslocoService } from '@ngneat/transloco';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, StatsComponent, CommonModule, CombatParametersComponent, AttacksSpellsComponent, DescriptionComponent, InventoryComponent, FeaturesTraitsComponent,AbilitiesLanguagesComponent, ButtonModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(public translateServise: TranslocoService, public storageService: StorageService){}

  currentLang: string = 'ru';

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
