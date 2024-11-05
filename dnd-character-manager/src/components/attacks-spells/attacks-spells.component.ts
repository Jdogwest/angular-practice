import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { TranslocoModule } from '@ngneat/transloco';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TableModule } from 'primeng/table';
import { debounceTime, Subscription } from 'rxjs';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-attacks-spells',
  standalone: true,
  imports: [
    InputTextareaModule,
    InputTextModule,
    TableModule,
    FormsModule,
    TranslocoModule,
    ReactiveFormsModule,
  ],
  templateUrl: './attacks-spells.component.html',
  styleUrl: './attacks-spells.component.scss',
})
export class AttacksSpellsComponent {
  private readonly storageService: StorageService = inject(StorageService);
  private readonly formBuilder: FormBuilder = inject(FormBuilder);

  attacksSpellsForm: FormGroup;
  subs: Subscription | undefined;

  constructor() {
    let attacksSpellsData =
      this.storageService.getData<IAttacksSpells>('attacksSpellsData');

    this.attacksSpellsForm = this.formBuilder.group<IAttacksSpells>({
      firstWeaponBonus: attacksSpellsData.firstWeaponBonus,
      firstWeaponDamage: attacksSpellsData.firstWeaponDamage,
      firstWeaponName: attacksSpellsData.firstWeaponName,
      otherWeaponSpells: attacksSpellsData.otherWeaponSpells,
      secondWeaponBonus: attacksSpellsData.secondWeaponBonus,
      secondWeaponDamage: attacksSpellsData.secondWeaponDamage,
      secondWeaponName: attacksSpellsData.secondWeaponName,
      thirdWeaponBonus: attacksSpellsData.thirdWeaponBonus,
      thirdWeapondamage: attacksSpellsData.thirdWeapondamage,
      thirdWeaponName: attacksSpellsData.thirdWeaponName,
    });
  }

  ngOnInit(): void {
    this.attacksSpellsForm.valueChanges
      .pipe(debounceTime(1000))
      .subscribe((_) => {
        this.saveToStorage();
      });
  }

  ngOnDestroy() {
    this.subs?.unsubscribe;
  }

  saveToStorage() {
    this.storageService.setData(
      'attacksSpellsData',
      this.attacksSpellsForm.getRawValue()
    );
  }
}
