import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { TranslocoModule } from '@ngneat/transloco';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { debounceTime, Subscription } from 'rxjs';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-inventory',
  standalone: true,
  imports: [
    InputTextareaModule,
    InputNumberModule,
    FormsModule,
    TranslocoModule,
    ReactiveFormsModule,
  ],
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.scss',
})
export class InventoryComponent {
  inventoryForm: FormGroup;
  subs: Subscription | undefined;

  constructor(private readonly storageService: StorageService) {
    let inventoryData =
      this.storageService.getData<IInventory>('inventoryData');

    this.inventoryForm = new FormGroup({
      copperCoins: new FormControl(inventoryData.copperCoins),
      electrumCoins: new FormControl(inventoryData.electrumCoins),
      goldenCoins: new FormControl(inventoryData.goldenCoins),
      otherItems: new FormControl(inventoryData.otherItems),
      platinumCoins: new FormControl(inventoryData.platinumCoins),
      silverCoins: new FormControl(inventoryData.silverCoins),
    });
  }

  ngOnInit(): void {
    this.inventoryForm.valueChanges.pipe(debounceTime(1000)).subscribe((_) => {
      this.saveToStorage();
    });
  }

  ngOnDestroy() {
    this.subs?.unsubscribe;
  }

  saveToStorage() {
    this.storageService.setData(
      'inventoryData',
      this.inventoryForm.getRawValue()
    );
  }
}
