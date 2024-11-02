import { InputTextareaModule } from 'primeng/inputtextarea';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslocoModule } from '@ngneat/transloco';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-features-traits',
  standalone: true,
  imports: [InputTextareaModule, FormsModule, TranslocoModule, ReactiveFormsModule],
  templateUrl: './features-traits.component.html',
  styleUrl: './features-traits.component.scss'
})
export class FeaturesTraitsComponent {
  featuresTraitsForm: FormGroup;

  constructor(private readonly storageService: StorageService){
    let featTraits = this.storageService.getData('featTraits');
    this.featuresTraitsForm = new FormGroup({
      'featTraits': new FormControl(featTraits),
    })
  }

  saveData(data: string) {
    this.storageService.setData('featTraits', data);
  }
}
