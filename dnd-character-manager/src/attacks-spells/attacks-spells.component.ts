import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslocoModule } from '@ngneat/transloco';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-attacks-spells',
  standalone: true,
  imports: [InputTextareaModule, InputTextModule, TableModule, FormsModule, TranslocoModule],
  templateUrl: './attacks-spells.component.html',
  styleUrl: './attacks-spells.component.scss'
})
export class AttacksSpellsComponent {
  @Input({ required: true }) attacksSpellsData!: attacksSpellsDT;
  @Output() onSave: EventEmitter<{dataClass: string, dataName: string, dataValue: any}> = new EventEmitter();

  saveData(key: string, data: any) {
    this.onSave.emit({dataClass: 'attacksSpellsData' ,dataName: key, dataValue: data});
  }
}
