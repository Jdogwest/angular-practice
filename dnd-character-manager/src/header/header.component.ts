import { StorageService } from './../app/storage.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TranslocoModule } from '@ngneat/transloco';
import { InputTextModule } from 'primeng/inputtext';
import { DHeader } from '../data-types/data.defaultValues';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [InputTextModule, TranslocoModule, ReactiveFormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  headerForm: FormGroup;

  constructor(private readonly storageService: StorageService){
    let headerData = this.storageService.getData<IHeader>('headerData');
    this.headerForm = new FormGroup({
      'characterName': new FormControl(headerData.characterName),
      'classAndLevel': new FormControl(headerData.classAndLevel),
      'expirience': new FormControl(headerData.expirience),
      'origin': new FormControl(headerData.origin),
      'playerName': new FormControl(headerData.playerName),
      'species': new FormControl(headerData.species),
      'worldView': new FormControl(headerData.worldView),
  })}

  saveData(key: string, data: string) {
    this.storageService.setData(key, data);
  }
}
