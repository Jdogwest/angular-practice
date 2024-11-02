import { Injectable } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Injectable()
export class TranslateService {

  constructor(public translateServise: TranslocoService) { }

  currentLang: string = 'ru';

  public changeLanguage(){
    if (this.currentLang === 'ru'){
      this.translateServise.setActiveLang('en');
      this.currentLang = 'en';
    } else {
      this.translateServise.setActiveLang('ru');
      this.currentLang = 'ru';
    }
  }
}
