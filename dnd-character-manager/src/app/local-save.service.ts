import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalSaveService {

  constructor() { }

  setData(dataName: string, data: {} | string): void{
    let JSONData: string = JSON.stringify(data);
    localStorage.setItem(dataName, JSONData);
  }

  getData(dataName: string) {
    if (localStorage.getItem(dataName)){
      let JSONData: string = localStorage.getItem(dataName) || '';
      return JSON.parse(JSONData);
    } else if (dataName === 'abilLangs' || dataName === 'featTraits'){
      return '';
    } else {
      return {};
    }
  }
}
