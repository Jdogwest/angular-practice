import { Component } from '@angular/core';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslocoModule } from '@ngneat/transloco';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-inventory',
  standalone: true,
  imports: [InputTextareaModule, InputNumberModule, FormsModule, TranslocoModule, ReactiveFormsModule],
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.scss'
})
export class InventoryComponent {
  inventoryForm: FormGroup;
  constructor(private readonly storageService: StorageService){
    let inventoryData = this.storageService.getData<IInventory>('inventoryData');

    this.inventoryForm = new FormGroup({
      'copperCoins': new FormControl(inventoryData.copperCoins),
      'electrumCoins': new FormControl(inventoryData.electrumCoins),
      'goldenCoins': new FormControl(inventoryData.goldenCoins),
      'otherItems': new FormControl(inventoryData.otherItems),
      'platinumCoins': new FormControl(inventoryData.platinumCoins),
      'silverCoins': new FormControl(inventoryData.silverCoins),
    })
  }

  saveData(key: string, data: string) {
    this.storageService.setData(key, data);
  }
}
