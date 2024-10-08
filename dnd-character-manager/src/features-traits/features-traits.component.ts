import { InputTextareaModule } from 'primeng/inputtextarea';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  selector: 'app-features-traits',
  standalone: true,
  imports: [InputTextareaModule, FormsModule, TranslocoModule],
  templateUrl: './features-traits.component.html',
  styleUrl: './features-traits.component.scss'
})
export class FeaturesTraitsComponent {
  @Input({ required: true }) featTraits!: string;
  @Output() onSave: EventEmitter<{dataClass: string, dataName: string, dataValue: any}> = new EventEmitter();

  saveData(data: any) {
    this.onSave.emit({dataClass: 'featTraits', dataName: '', dataValue: data});
  }
}
