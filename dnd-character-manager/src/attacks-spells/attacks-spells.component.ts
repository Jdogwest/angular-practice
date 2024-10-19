import { StorageService } from './../app/storage.service';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslocoModule } from '@ngneat/transloco';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TableModule } from 'primeng/table';
import { DAttackSpells } from '../data-types/data.defaultValues';

@Component({
  selector: 'app-attacks-spells',
  standalone: true,
  imports: [InputTextareaModule, InputTextModule, TableModule, FormsModule, TranslocoModule],
  templateUrl: './attacks-spells.component.html',
  styleUrl: './attacks-spells.component.scss'
})
export class AttacksSpellsComponent {
  constructor(private readonly storageService: StorageService){}

  attacksSpellsData: IAttacksSpells = DAttackSpells;

  ngOnInit (){
    this.attacksSpellsData = this.storageService.getData<IAttacksSpells>('attacksSpellsData');
  }

  saveData(key: string, data: string) {
    this.storageService.setData(key, data);
  }
}
