import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { StorageService } from '../storage.service';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  selector: 'app-description',
  standalone: true,
  imports: [InputTextareaModule, FormsModule, TranslocoModule],
  templateUrl: './description.component.html',
  styleUrl: './description.component.scss'
})
export class DescriptionComponent {
  @Input({ required: true }) descriptionData!: descriptionDT;
  @Output() onSave: EventEmitter<{dataClass: string, dataName: string, dataValue: any}> = new EventEmitter();

  saveData(key: string, data: any) {
    this.onSave.emit({dataClass: 'descriptionData' ,dataName: key, dataValue: data});
  }
}
