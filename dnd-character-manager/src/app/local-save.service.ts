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
    if (dataName === 'abilLangs' || dataName === 'featTraits'){
      if (localStorage.getItem(dataName)){
        let JSONData: string = localStorage.getItem(dataName) || '';
        let backData;
        try {backData = JSON.parse(JSONData);}
        catch {
          console.error("Error while trying to parse JSON string.");
          backData = '';
        }
        if (typeof(backData) === 'string'){
          return backData;
        } else {
          console.error("Error while reading data from local storge.\nType error: expecting string, but got ", typeof(backData));
          return '';
        }
      }
    } else {
      if (localStorage.getItem(dataName)){
        let JSONData: string = localStorage.getItem(dataName) || '';
        let backData;
        try {backData = JSON.parse(JSONData);}
        catch {
          console.error("Error while trying to parse JSON string.");
          backData = {};
        }
        if (typeof(backData) === 'object'){
          return backData;
        } else {
          console.error("Error while reading data from local storge.\nType error: expecting object, but got ", typeof(backData));
          return {};
        }
      } else {
        return {};
      }
    }
  }
}
