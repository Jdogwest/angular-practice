import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { StorageService } from '../../services/storage.service';
import { TranslateService } from '../../services/translate.service';
import { AbilitiesLanguagesComponent } from '../abilities-languages/abilities-languages.component';
import { AttacksSpellsComponent } from '../attacks-spells/attacks-spells.component';
import { CombatParametersComponent } from '../combat-parameters/combat-parameters.component';
import { DescriptionComponent } from '../description/description.component';
import { FeaturesTraitsComponent } from '../features-traits/features-traits.component';
import { HeaderComponent } from '../header/header.component';
import { InventoryComponent } from '../inventory/inventory.component';
import { StatsComponent } from '../stats/stats.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    StatsComponent,
    CommonModule,
    CombatParametersComponent,
    AttacksSpellsComponent,
    DescriptionComponent,
    InventoryComponent,
    FeaturesTraitsComponent,
    AbilitiesLanguagesComponent,
    ButtonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [TranslateService, StorageService],
})
export class AppComponent {
  public translateService: TranslateService = inject(TranslateService);

  constructor() {}
}
