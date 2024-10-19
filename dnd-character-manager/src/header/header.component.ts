import { StorageService } from './../app/storage.service';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslocoModule } from '@ngneat/transloco';
import { InputTextModule } from 'primeng/inputtext';
import { DHeader } from '../data-types/data.defaultValues';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [InputTextModule, FormsModule, TranslocoModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(private readonly storageService: StorageService){}

  headerData: IHeader = DHeader;

  ngOnInit (){
    this.headerData = this.storageService.getData<IHeader>('headerData');
  }


  saveData(key: string, data: string) {
    this.storageService.setData(key, data);
  }
}
