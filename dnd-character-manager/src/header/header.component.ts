import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { StorageService } from '../storage.service';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [InputTextModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  characterName: string = '';
  classAndLevel: string = '';
  origin: string = '';
  playerName: string = '';
  species: string = '';
  worldView: string = '';
  expirience: string = '';
  constructor(private storageService: StorageService) {
    this.characterName = this.storageService.headerData['characterName'] ?? '';
    this.classAndLevel = this.storageService.headerData['classAndLevel'] ?? '';
    this.origin = this.storageService.headerData['origin'] ?? '';
    this.playerName = this.storageService.headerData['playerName'] ?? '';
    this.species = this.storageService.headerData['species'] ?? '';
    this.worldView = this.storageService.headerData['worldView'] ?? '';
    this.expirience = this.storageService.headerData['expirience'] ?? '';
  }
  saveData(key: string, data: any){
    this.storageService.headerData[key] = data;
    this.storageService.saveAllData();
  }
}
