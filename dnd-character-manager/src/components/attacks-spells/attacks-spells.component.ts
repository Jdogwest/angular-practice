import { Component } from '@angular/core';
import {
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
  attacksSpellsForm: FormGroup;
  subs: Subscription | undefined;

  constructor(private readonly storageService: StorageService) {
    let attacksSpellsData =
      this.storageService.getData<IAttacksSpells>('attacksSpellsData');

    this.attacksSpellsForm = new FormGroup({
      firstWeaponBonus: new FormControl(attacksSpellsData.firstWeaponBonus),
      firstWeaponDamage: new FormControl(attacksSpellsData.firstWeaponDamage),
      firstWeaponName: new FormControl(attacksSpellsData.firstWeaponName),
      otherWeaponSpells: new FormControl(attacksSpellsData.otherWeaponSpells),
      secondWeaponBonus: new FormControl(attacksSpellsData.secondWeaponBonus),
      secondWeaponDamage: new FormControl(attacksSpellsData.secondWeaponDamage),
      secondWeaponName: new FormControl(attacksSpellsData.secondWeaponName),
      thirdWeaponBonus: new FormControl(attacksSpellsData.thirdWeaponBonus),
      thirdWeapondamage: new FormControl(attacksSpellsData.thirdWeapondamage),
      thirdWeaponName: new FormControl(attacksSpellsData.thirdWeaponName),
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
