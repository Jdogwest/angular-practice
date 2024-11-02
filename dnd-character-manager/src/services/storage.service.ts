import { Injectable } from '@angular/core';
import {
  DAttackSpells,
  DCombat,
  DDescription,
  DHeader,
  DInventory,
  DStats,
} from '../constants/data.default-values';
import '../interfaces/data.interfaces';
import { LocalSaveService } from './local-save.service';

@Injectable()
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
    this.headerData = this.saveService.getData<IHeader>('headerData', DHeader);
    this.inventoryData = this.saveService.getData('inventoryData', DInventory);
    this.descriptionData = this.saveService.getData(
      'descriptionData',
      DDescription
    );
    this.combatData = this.saveService.getData('combatData', DCombat);
    this.attacksSpellsData = this.saveService.getData(
      'attacksSpellsData',
      DAttackSpells
    );
    this.statsData = this.saveService.getData('statsData', DStats);
    this.abilLangs = this.saveService.getData<string>('abilLangs', '');
    this.featTraits = this.saveService.getData<string>('featTraits', '');
  }

  setData<T>(dataName: string, data: T): void {
    switch (dataName) {
      case 'abilLangs':
        this.abilLangs = data as string;
        break;
      case 'featTraits':
        this.featTraits = data as string;
        break;
      case 'headerData':
        this.headerData = data as IHeader;
        break;
      case 'inventoryData':
        this.inventoryData = data as IInventory;
        break;
      case 'descriptionData':
        this.descriptionData = data as IDescription;
        break;
      case 'combatData':
        this.combatData = data as ICombat;
        break;
      case 'attacksSpellsData':
        this.attacksSpellsData = data as IAttacksSpells;
        break;
      case 'statsData':
        this.statsData = data as IStats;
        break;
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
  getData<T>(dataName: 'abilLangs' | 'featTraits' | string) {
    switch (dataName) {
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
