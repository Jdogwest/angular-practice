import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { TranslocoModule } from '@ngneat/transloco';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { debounceTime, Subscription } from 'rxjs';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-combat-parameters',
  standalone: true,
  imports: [
    InputTextareaModule,
    InputTextModule,
    CheckboxModule,
    FormsModule,
    TranslocoModule,
    ReactiveFormsModule,
  ],
  templateUrl: './combat-parameters.component.html',
  styleUrl: './combat-parameters.component.scss',
})
export class CombatParametersComponent {
  private readonly storageService: StorageService = inject(StorageService);
  private readonly formBuilder: FormBuilder = inject(FormBuilder);

  combatParametersForm: FormGroup;
  subs: Subscription | undefined;

  constructor() {
    let combatData = this.storageService.getData<ICombat>('combatData');

    this.combatParametersForm = this.formBuilder.group<ICombat>({
      armorClass: combatData.armorClass,
      currentHP: combatData.currentHP,
      diceName: combatData.diceName,
      failureFirst: combatData.failureFirst,
      failureSecond: combatData.failureSecond,
      failureThird: combatData.failureThird,
      initiative: combatData.initiative,
      maxHP: combatData.maxHP,
      speed: combatData.speed,
      successFirst: combatData.successFirst,
      successSecond: combatData.successSecond,
      successThird: combatData.successThird,
      temporaryHP: combatData.temporaryHP,
      totalHD: combatData.totalHD,
    });
  }

  ngOnInit(): void {
    this.combatParametersForm.valueChanges
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
      'combatData',
      this.combatParametersForm.getRawValue()
    );
  }
}
