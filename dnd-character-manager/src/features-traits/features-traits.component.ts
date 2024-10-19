import { InputTextareaModule } from 'primeng/inputtextarea';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslocoModule } from '@ngneat/transloco';
import { StorageService } from '../app/storage.service';

@Component({
  selector: 'app-features-traits',
  standalone: true,
  imports: [InputTextareaModule, FormsModule, TranslocoModule],
  templateUrl: './features-traits.component.html',
  styleUrl: './features-traits.component.scss'
})
export class FeaturesTraitsComponent {
  constructor(private readonly storageService: StorageService){}

  featTraits: string = '';

  ngOnInit (){
    this.featTraits = this.storageService.getData('featTraits');
  }

  saveData(data: string) {
    this.storageService.setData('featTraits', data);
  }
}
