import { Component } from '@angular/core';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';

@Component({
  selector: 'app-combat-parameters',
  standalone: true,
  imports: [InputTextareaModule, InputTextModule, CheckboxModule],
  templateUrl: './combat-parameters.component.html',
  styleUrl: './combat-parameters.component.scss'
})
export class CombatParametersComponent {

}
