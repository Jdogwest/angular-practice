import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-description',
  standalone: true,
  imports: [InputTextareaModule, FormsModule],
  templateUrl: './description.component.html',
  styleUrl: './description.component.scss'
})
export class DescriptionComponent {
  personality: string = '';
  ideals: string = '';
  bonds: string = '';
  flaws: string = '';
  constructor(private storageService: StorageService) {
    this.personality = this.storageService.descriptionData['personality'] ?? '';
    this.ideals = this.storageService.descriptionData['ideals'] ?? '';
    this.bonds = this.storageService.descriptionData['bonds'] ?? '';
    this.flaws = this.storageService.descriptionData['flaws'] ?? '';
  }
  saveData(key: string, data: any){
    this.storageService.descriptionData[key] = data;
    this.storageService.saveAllData();
  }
}
