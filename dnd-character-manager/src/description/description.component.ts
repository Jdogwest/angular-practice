import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { StorageService } from '../app/storage.service';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  selector: 'app-description',
  standalone: true,
  imports: [InputTextareaModule, FormsModule, TranslocoModule],
  templateUrl: './description.component.html',
  styleUrl: './description.component.scss'
})
export class DescriptionComponent {
  @Input({ required: true }) storageService!: StorageService;

  descriptionData!: descriptionDT;

  ngOnInit (){
    this.descriptionData = this.storageService.getData('descriptionData') as descriptionDT;
  }

  saveData(key: string, data: string) {
    this.storageService.setData(key, data);
  }
}
