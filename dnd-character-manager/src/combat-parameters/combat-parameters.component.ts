import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslocoModule } from '@ngneat/transloco';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { StorageService } from '../app/storage.service';
import { DCombat } from '../data-types/data.defaultValues';

@Component({
  selector: 'app-combat-parameters',
  standalone: true,
  imports: [InputTextareaModule, InputTextModule, CheckboxModule, FormsModule, TranslocoModule],
  templateUrl: './combat-parameters.component.html',
  styleUrl: './combat-parameters.component.scss'
})
export class CombatParametersComponent {
  constructor(private readonly storageService: StorageService){}

  combatData: ICombat = DCombat;

  ngOnInit (){
    this.combatData = this.storageService.getData<ICombat>('combatData');
  }

  saveData(key: string, data: string) {
    this.storageService.setData(key, data);
  }
}
