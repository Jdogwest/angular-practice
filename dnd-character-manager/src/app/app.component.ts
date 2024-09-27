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

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, StatsComponent, CommonModule, CombatParametersComponent, AttacksSpellsComponent, DescriptionComponent, InventoryComponent, FeaturesTraitsComponent,AbilitiesLanguagesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dnd-character-manager';
  show: boolean = false;
  writeInConsole(event: string){
    console.error(event);
  }
}
