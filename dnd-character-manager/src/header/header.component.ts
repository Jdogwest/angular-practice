import { StorageService } from './../app/storage.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslocoModule } from '@ngneat/transloco';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [InputTextModule, FormsModule, TranslocoModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Input({ required: true }) storageService!: StorageService;

  headerData!: IHeader;

  ngOnInit (){
    this.headerData = this.storageService.getData('headerData') as IHeader;
  }


  saveData(key: string, data: string) {
    this.storageService.setData(key, data);
  }
}
