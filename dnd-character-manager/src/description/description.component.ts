import { Component } from '@angular/core';
import { InputTextareaModule } from 'primeng/inputtextarea';

@Component({
  selector: 'app-description',
  standalone: true,
  imports: [InputTextareaModule],
  templateUrl: './description.component.html',
  styleUrl: './description.component.scss'
})
export class DescriptionComponent {

}
