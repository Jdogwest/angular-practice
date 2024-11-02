import { Injectable } from '@angular/core';

@Injectable()
export class LocalSaveService {
  setData(dataName: string, data: {} | string): void {
    let JSONData: string = JSON.stringify(data);
    localStorage.setItem(dataName, JSONData);
  }

  getData(key: 'abilLangs' | 'featTraits', defaultValue: string): string;
  getData<T>(key: string, defaultValue: T): T;
  getData(
    key: 'abilLangs' | 'featTraits' | string,
    defaultValue: string | object
  ): string | object {
    let JSONData: string | null = localStorage.getItem(key);

    if (!JSONData) {
      return defaultValue;
    }

    let backData = this.checkParse(JSONData) ?? defaultValue;

    if (typeof backData === 'object' && Object.keys(backData).length > 0) {
      return backData;
    }

    if (typeof backData === 'string') {
      return backData;
    }

    return defaultValue;
  }

  private checkParse(JSONData: string) {
    try {
      return JSON.parse(JSONData);
    } catch {
      console.error('Error while trying to parse JSON string.');
      return undefined;
    }
  }
}
