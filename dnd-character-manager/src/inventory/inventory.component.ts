import { Component, EventEmitter, Input, Output } from '@angular/core';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FormsModule } from '@angular/forms';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  selector: 'app-inventory',
  standalone: true,
  imports: [InputTextareaModule, InputNumberModule, FormsModule, TranslocoModule],
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.scss'
})
export class InventoryComponent {
  @Input({ required: true }) inventoryData!: inventoryDT;
  @Output() onSave: EventEmitter<{dataClass: string, dataName: string, dataValue: any}> = new EventEmitter();

  saveData(key: string, data: any) {
    this.onSave.emit({dataClass: 'inventoryData' ,dataName: key, dataValue: data});
  }
}
