import { Component, EventEmitter, Input, Output } from '@angular/core';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FormsModule } from '@angular/forms';
import { TranslocoModule } from '@ngneat/transloco';
import { StorageService } from '../app/storage.service';

@Component({
  selector: 'app-inventory',
  standalone: true,
  imports: [InputTextareaModule, InputNumberModule, FormsModule, TranslocoModule],
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.scss'
})
export class InventoryComponent {
  @Input({ required: true }) storageService!: StorageService;

  inventoryData!: inventoryDT;

  ngOnInit (){
    this.inventoryData = this.storageService.getData('inventoryData') as inventoryDT;
  }

  saveData(key: string, data: string) {
    this.storageService.setData(key, data);
  }
}
