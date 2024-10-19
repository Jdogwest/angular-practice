import { Inject, Injectable } from '@angular/core';
import '../data-types/data.interfaces'
import { DHeader, DInventory, DDescription, DCombat, DAttackSpells, DStats } from '../data-types/data.defaultValues';
import { LocalSaveService } from './local-save.service';
import { isString } from '@ngneat/transloco';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private headerData: IHeader;
  private inventoryData: IInventory;
  private descriptionData: IDescription;
  private combatData: ICombat;
  private attacksSpellsData: IAttacksSpells;
  private statsData: IStats;
  private abilLangs: string;
  private featTraits: string;
  private saveService: LocalSaveService;

  constructor() {
    this.saveService = new LocalSaveService();
    this.headerData = this.saveService.getData('headerData', DHeader);
    this.inventoryData = this.saveService.getData('inventoryData', DInventory);
    this.descriptionData = this.saveService.getData('descriptionData', DDescription);
    this.combatData = this.saveService.getData('combatData', DCombat);
    this.attacksSpellsData = this.saveService.getData('attacksSpellsData', DAttackSpells);
    this.statsData = this.saveService.getData('statsData', DStats);
    this.abilLangs = this.saveService.getData<string>('abilLangs', '');
    this.featTraits = this.saveService.getData<string>('featTraits', '');
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

  private saveAllData() {
    this.saveService.setData('headerData', this.headerData);
    this.saveService.setData('inventoryData', this.inventoryData);
    this.saveService.setData('descriptionData', this.descriptionData);
    this.saveService.setData('combatData', this.combatData);
    this.saveService.setData('attacksSpellsData', this.attacksSpellsData);
    this.saveService.setData('statsData', this.statsData);
    this.saveService.setData('abilLangs', this.abilLangs);
    this.saveService.setData('featTraits', this.featTraits);

  }

  getData(dataName: 'abilLangs' | 'featTraits'): string;
  getData<T>(dataName: string): T;
  getData<T>(dataName: 'abilLangs' | 'featTraits' | string){
    switch (dataName){
      case 'headerData':
        return this.headerData;
      case 'inventoryData':
        return this.inventoryData;
      case 'descriptionData':
        return this.descriptionData;
      case 'combatData':
        return this.combatData;
      case 'attacksSpellsData':
        return this.attacksSpellsData;
      case 'statsData':
        return this.statsData;
      case 'abilLangs':
        return this.abilLangs;
      case 'featTraits':
        return this.featTraits;
      default:
        return {} as T;
    }
  }
}
