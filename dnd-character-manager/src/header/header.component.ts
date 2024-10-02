import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [InputTextModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
