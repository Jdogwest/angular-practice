import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { StorageService } from '../app/storage.service';
import { TranslocoModule } from '@ngneat/transloco';
import { DDescription } from '../data-types/data.defaultValues';

@Component({
  selector: 'app-description',
  standalone: true,
  imports: [InputTextareaModule, FormsModule, TranslocoModule, ReactiveFormsModule],
  templateUrl: './description.component.html',
  styleUrl: './description.component.scss'
})
export class DescriptionComponent {
  descriptionForm: FormGroup;

  constructor(private readonly storageService: StorageService){
    let descriptionData = this.storageService.getData<IDescription>('descriptionData');
    this.descriptionForm = new FormGroup({
      'bonds': new FormControl(descriptionData.bonds),
      'flaws': new FormControl(descriptionData.flaws),
      'ideals': new FormControl(descriptionData.ideals),
      'personality': new FormControl(descriptionData.personality),
    })
  }

  saveData(key: string, data: string) {
    this.storageService.setData(key, data);
  }
}
