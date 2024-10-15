import { Injectable } from '@angular/core';
import '../data-types/data.interfaces'
import { LocalSaveService } from './local-save.service';
import { isNumber, isString } from '@ngneat/transloco';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private headerData!: IHeader;
  private inventoryData!: IInventory;
  private descriptionData!: IDescription;
  private combatData!: ICombat;
  private attacksSpellsData!: IAttacksSpells;
  private statsData!: IStats;
  private abilLangs!: string;
  private featTraits!: string;
  private saveService: LocalSaveService;

  constructor() {
    this.saveService = new LocalSaveService();
    this.headerData = this.saveService.getData('headerData');
    this.inventoryData = this.saveService.getData('inventoryData');
    this.descriptionData = this.saveService.getData('descriptionData');
    this.combatData = this.saveService.getData('combatData');
    this.attacksSpellsData = this.saveService.getData('attacksSpellsData');
    this.statsData = this.saveService.getData('statsData');
    this.abilLangs = this.saveService.getData('abilLangs');
    this.featTraits = this.saveService.getData('featTraits');
  }

  setData(dataName: string, data: string | number | boolean){
    if (Object.hasOwn(this.headerData, dataName)){
      let partialData: Partial<IHeader> = {[dataName] : data};
      this.headerData = Object.assign(this.headerData, partialData);
    }
    else if (Object.hasOwn(this.inventoryData, dataName)){
      let partialData: Partial<IInventory> = {[dataName] : data};
      this.inventoryData = Object.assign(this.inventoryData, partialData);
    }
    else if (Object.hasOwn(this.descriptionData, dataName)){
      let partialData: Partial<IDescription> = {[dataName] : data};
      this.descriptionData = Object.assign(this.descriptionData, partialData);
    }
    else if (Object.hasOwn(this.combatData, dataName)){
      let partialData: Partial<ICombat> = {[dataName] : data};
      this.combatData = Object.assign(this.combatData, partialData);
    }
    else if (Object.hasOwn(this.attacksSpellsData, dataName)){
      let partialData: Partial<IAttacksSpells> = {[dataName] : data};
      this.attacksSpellsData = Object.assign(this.attacksSpellsData, partialData);
    }
    else if (Object.hasOwn(this.statsData, dataName)){
      let partialData: Partial<IStats> = {[dataName] : data};
      this.statsData = Object.assign(this.statsData, partialData);
    }
    else if (dataName === 'abilLangs' && isString(data)){
      this.abilLangs = data;
    }
    else if (dataName === 'featTraits' && isString(data)){
      this.featTraits = data;
    }
    this.saveAllData();
  }

  saveAllData() {
    this.saveService.setData('headerData', this.headerData);
    this.saveService.setData('inventoryData', this.inventoryData);
    this.saveService.setData('descriptionData', this.descriptionData);
    this.saveService.setData('combatData', this.combatData);
    this.saveService.setData('attacksSpellsData', this.attacksSpellsData);
    this.saveService.setData('statsData', this.statsData);
    this.saveService.setData('abilLangs', this.abilLangs);
    this.saveService.setData('featTraits', this.featTraits);

  }

  getData(dataName: string){
    if (dataName === 'headerData'){
      return this.headerData;
    } else if (dataName === 'inventoryData'){
      return this.inventoryData;
    } else if (dataName === 'descriptionData'){
      return this.descriptionData;
    } else if (dataName === 'combatData'){
      return this.combatData;
    } else if (dataName === 'attacksSpellsData'){
      return this.attacksSpellsData;
    } else if (dataName === 'statsData'){
      return this.statsData;
    } else if (dataName === 'abilLangs'){
      return this.abilLangs;
    } else if (dataName === 'featTraits'){
      return this.featTraits;
    } else {
      return '';
    }
  }
}
