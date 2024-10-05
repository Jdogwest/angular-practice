import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  public headerData:{[key: string] : any} = {}

  constructor() {
    this.downloadFromLocalStorage();
  }
getData(key: string): any {
  return localStorage.getItem(key);
}

saveAllData() {
  localStorage.setItem('headerData', JSON.stringify(this.headerData));
}

downloadFromLocalStorage() {
  const hd = localStorage.getItem('headerData');
    if (hd) {
      this.headerData = JSON.parse(hd);
    }
}
}
