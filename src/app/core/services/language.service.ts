import { Injectable } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  selected: string = '';

  constructor(
    private translateService: TranslateService
  ) { }

  setInitialAppLanguage() {
    this.translateService.setDefaultLang('en');
    
    if(localStorage.getItem('selectedLanguage')) {
      this.selected = localStorage.getItem('selectedLanguage');
      this.setLanguage(this.selected);
    }
  }

  setLanguage(lng) {
    this.translateService.use(lng);
    this.selected = lng;
    localStorage.setItem('selectedLanguage', lng)
  }
}
