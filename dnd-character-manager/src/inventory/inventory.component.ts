import { Component } from '@angular/core';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { StorageService } from '../storage.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inventory',
  standalone: true,
  imports: [InputTextareaModule, InputNumberModule, FormsModule],
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.scss'
})
export class InventoryComponent {
  copperCoins: number;
  silverCoins: number;
  electrumCoins: number;
  goldenCoins: number;
  platinumCoins: number;
  otherItems: string = '';
  constructor(private storageService: StorageService) {
    this.copperCoins = this.storageService.inventoryData['copperCoins'] ?? '';
    this.silverCoins = this.storageService.inventoryData['silverCoins'] ?? '';
    this.electrumCoins = this.storageService.inventoryData['electrumCoins'] ?? '';
    this.goldenCoins = this.storageService.inventoryData['goldenCoins'] ?? '';
    this.platinumCoins = this.storageService.inventoryData['platinumCoins'] ?? '';
    this.otherItems = this.storageService.inventoryData['otherItems'] ?? '';
  }
  saveData(key: string, data: any){
    this.storageService.inventoryData[key] = data;
    this.storageService.saveAllData();
  }
}
