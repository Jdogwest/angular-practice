import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TranslocoModule } from '@ngneat/transloco';
import { InputTextModule } from 'primeng/inputtext';
import { debounceTime, Subscription } from 'rxjs';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [InputTextModule, TranslocoModule, ReactiveFormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  private readonly storageService: StorageService = inject(StorageService);
  private readonly formBuilder: FormBuilder = inject(FormBuilder);

  headerForm: FormGroup;
  subs: Subscription | undefined;

  constructor() {
    let headerData = this.storageService.getData<IHeader>('headerData');

    this.headerForm = this.formBuilder.group<IHeader>({
      characterName: headerData.characterName,
      classAndLevel: headerData.classAndLevel,
      expirience: headerData.expirience,
      origin: headerData.origin,
      playerName: headerData.playerName,
      species: headerData.species,
      worldView: headerData.worldView,
    });
  }

  ngOnInit(): void {
    this.headerForm.valueChanges.pipe(debounceTime(1000)).subscribe((_) => {
      this.saveToStorage();
    });
  }

  ngOnDestroy() {
    this.subs?.unsubscribe;
  }

  saveToStorage() {
    this.storageService.setData('headerData', this.headerForm.getRawValue());
  }
}
