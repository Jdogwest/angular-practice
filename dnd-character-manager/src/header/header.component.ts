import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Input({ required: true }) headerData!: headerDT;
  @Output() onSave: EventEmitter<{dataClass: string, dataName: string, dataValue: any}> = new EventEmitter();

  saveData(key: string, data: any) {
    this.onSave.emit({dataClass: 'headerData' ,dataName: key, dataValue: data});
  }
}
