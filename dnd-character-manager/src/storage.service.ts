import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  public headerData: { [key: string]: any } = {};
  public inventoryData: { [key: string]: any } = {};
  public descriptionData: { [key: string]: any } = {};
  public combatData: { [key: string]: any } = {};
  public attacksSpellsData: { [key: string]: any } = {};
  public statsData: { [key: string]: any } = {};
  public abilLangs: string = '';
  public featTraits: string = '';

  constructor() {
    this.downloadFromLocalStorage();
  }
  getData(key: string): any {
    return localStorage.getItem(key);
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
    const headerd = localStorage.getItem('headerData');
    if (headerd) {
      this.headerData = JSON.parse(headerd);
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
