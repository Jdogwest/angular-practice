import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TranslocoModule } from '@ngneat/transloco';
import { InputTextModule } from 'primeng/inputtext';
import { debounceTime, scan, Subscription } from 'rxjs';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [InputTextModule, TranslocoModule, ReactiveFormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  headerForm: FormGroup;
  subs: Subscription | undefined;

  constructor(private readonly storageService: StorageService) {
    let headerData = this.storageService.getData<IHeader>('headerData');
    this.headerForm = new FormGroup({
      characterName: new FormControl(headerData.characterName),
      classAndLevel: new FormControl(headerData.classAndLevel),
      expirience: new FormControl(headerData.expirience),
      origin: new FormControl(headerData.origin),
      playerName: new FormControl(headerData.playerName),
      species: new FormControl(headerData.species),
      worldView: new FormControl(headerData.worldView),
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
