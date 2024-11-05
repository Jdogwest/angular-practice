import { Component, inject } from '@angular/core';
import {
  FormBuilder,
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
  private readonly storageService: StorageService = inject(StorageService);
  private readonly formBuilder: FormBuilder = inject(FormBuilder);

  inventoryForm: FormGroup;
  subs: Subscription | undefined;

  constructor() {
    let inventoryData =
      this.storageService.getData<IInventory>('inventoryData');

    this.inventoryForm = this.formBuilder.group<IInventory>({
      copperCoins: inventoryData.copperCoins,
      electrumCoins: inventoryData.electrumCoins,
      goldenCoins: inventoryData.goldenCoins,
      otherItems: inventoryData.otherItems,
      platinumCoins: inventoryData.platinumCoins,
      silverCoins: inventoryData.silverCoins,
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
