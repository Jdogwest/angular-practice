import { InputTextareaModule } from 'primeng/inputtextarea';
import { Component } from '@angular/core';
import { StorageService } from '../storage.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-features-traits',
  standalone: true,
  imports: [InputTextareaModule, FormsModule],
  templateUrl: './features-traits.component.html',
  styleUrl: './features-traits.component.scss'
})
export class FeaturesTraitsComponent {
  featTraits: string = '';
  constructor(private storageService: StorageService) {
    this.featTraits = this.storageService.featTraits ?? '';
  }
  saveData(data: string){
    this.storageService.featTraits = data;
    this.storageService.saveAllData();
  }
}
