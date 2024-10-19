import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { StorageService } from '../app/storage.service';
import { TranslocoModule } from '@ngneat/transloco';
import { DDescription } from '../data-types/data.defaultValues';

@Component({
  selector: 'app-description',
  standalone: true,
  imports: [InputTextareaModule, FormsModule, TranslocoModule],
  templateUrl: './description.component.html',
  styleUrl: './description.component.scss'
})
export class DescriptionComponent {
  constructor(private readonly storageService: StorageService){}

  descriptionData: IDescription = DDescription;

  ngOnInit (){
    this.descriptionData = this.storageService.getData<IDescription>('descriptionData');
  }

  saveData(key: string, data: string) {
    this.storageService.setData(key, data);
  }
}
