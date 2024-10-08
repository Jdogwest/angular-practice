import { Injectable } from '@angular/core';
import '../src/data-types/data.interfaces'

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  public headerData!: headerDT;
  public inventoryData!: inventoryDT;
  public descriptionData!: descriptionDT;
  public combatData!: combatDT;
  public attacksSpellsData!: attacksSpellsDT;
  public statsData!: statsDT;
  public abilLangs!: string;
  public featTraits!: string;

  constructor() {
    this.downloadFromLocalStorage();
  }
  getData(key: string): any {
    return localStorage.getItem(key);
  }

  setData(dataClass:string, key: any, data: any){
    switch (dataClass){
      case 'headerData':
        this.headerData[key as keyof headerDT] = data;
        break;
      case 'inventoryData':
        this.inventoryData[key as keyof inventoryDT] = data;
        break;
      case 'descriptionData':
        this.descriptionData[key as keyof descriptionDT] = data;
        break;
      case 'combatData':
        this.combatData[key as keyof combatDT] = data;
        break;
      case 'attackSpellsData':
        this.attacksSpellsData[key as keyof attacksSpellsDT] = data;
        break;
      case 'statsData':
        this.statsData[key as keyof statsDT] = data;
        break;
      case 'abilLang':
        this.abilLangs = data;
        break;
      case 'featTraits':
        this.featTraits = data;
        break;
    }
    this.saveAllData();
  }

  saveAllData() {
    localStorage.setItem('headerData', JSON.stringify(this.headerData));
    localStorage.setItem('inventoryData', JSON.stringify(this.inventoryData));
    localStorage.setItem(
      'descriptionData',
      JSON.stringify(this.descriptionData)
    );
    localStorage.setItem('combatData', JSON.stringify(this.combatData));
    localStorage.setItem('statsData', JSON.stringify(this.statsData));
    localStorage.setItem(
      'attacksSpellsData',
      JSON.stringify(this.attacksSpellsData)
    );
    localStorage.setItem('abilLangs', JSON.stringify(this.abilLangs));
    localStorage.setItem('featTraits', JSON.stringify(this.featTraits));
  }

  downloadFromLocalStorage() {
    const headerData = localStorage.getItem('headerData');
    if (headerData) {
      this.headerData = JSON.parse(headerData);
    }
    const descriptionData = localStorage.getItem('descriptionData');
    if (descriptionData) {
      this.descriptionData = JSON.parse(descriptionData);
    }
    const inventoryd = localStorage.getItem('inventoryData');
    if (inventoryd) {
      this.inventoryData = JSON.parse(inventoryd);
    }
    const combatData = localStorage.getItem('combatData');
    if (combatData) {
      this.combatData = JSON.parse(combatData);
    }
    const attacksSpellsData = localStorage.getItem('attacksSpellsData');
    if (attacksSpellsData) {
      this.attacksSpellsData = JSON.parse(attacksSpellsData);
    }
    const statsData = localStorage.getItem('statsData');
    if (statsData) {
      this.statsData = JSON.parse(statsData);
    }
    const abilLangs = localStorage.getItem('abilLangs');
    if (abilLangs) {
      this.abilLangs = JSON.parse(abilLangs);
    }
    const featTraits = localStorage.getItem('featTraits');
    if (featTraits) {
      this.featTraits = JSON.parse(featTraits);
    }
  }
}
