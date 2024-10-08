import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslocoModule } from '@ngneat/transloco';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';

@Component({
  selector: 'app-combat-parameters',
  standalone: true,
  imports: [InputTextareaModule, InputTextModule, CheckboxModule, FormsModule, TranslocoModule],
  templateUrl: './combat-parameters.component.html',
  styleUrl: './combat-parameters.component.scss'
})
export class CombatParametersComponent {
  @Input({ required: true }) combatData!: combatDT;
  @Output() onSave: EventEmitter<{dataClass: string, dataName: string, dataValue: any}> = new EventEmitter();

  saveData(key: string, data: any) {
    this.onSave.emit({dataClass: 'combatData' ,dataName: key, dataValue: data});
  }
}
