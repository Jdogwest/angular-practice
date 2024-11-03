import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { TranslocoModule } from '@ngneat/transloco';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { debounceTime, Subscription } from 'rxjs';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-description',
  standalone: true,
  imports: [
    InputTextareaModule,
    FormsModule,
    TranslocoModule,
    ReactiveFormsModule,
  ],
  templateUrl: './description.component.html',
  styleUrl: './description.component.scss',
})
export class DescriptionComponent {
  descriptionForm: FormGroup;
  subs: Subscription | undefined;

  constructor(private readonly storageService: StorageService) {
    let descriptionData =
      this.storageService.getData<IDescription>('descriptionData');
    this.descriptionForm = new FormGroup({
      bonds: new FormControl(descriptionData.bonds),
      flaws: new FormControl(descriptionData.flaws),
      ideals: new FormControl(descriptionData.ideals),
      personality: new FormControl(descriptionData.personality),
    });
  }

  ngOnInit(): void {
    this.descriptionForm.valueChanges
      .pipe(debounceTime(1000))
      .subscribe((_) => {
        this.saveToStorage();
      });
  }

  ngOnDestroy() {
    this.subs?.unsubscribe;
  }

  saveToStorage() {
    this.storageService.setData(
      'descriptionData',
      this.descriptionForm.getRawValue()
    );
  }
}
