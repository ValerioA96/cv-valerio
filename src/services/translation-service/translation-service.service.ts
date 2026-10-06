import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

export type LanguageType = 'it' | 'en';

const DEFAULT_LANGUAGE: LanguageType = 'it';

@Injectable({ providedIn: 'root' })
export class TranslationService {
  constructor(private translate: TranslateService) {}

  initLanguage() {
    const savedLang = this.getCurrentLanguage();
    this.translate.setDefaultLang(savedLang);
    this.translate.use(savedLang);
  }

  setLanguage(lang: string) {
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
  }

  // se l'utente non ha mai scelto una lingua, 'lang' non e' salvato: si usa quella di default
  getCurrentLanguage(): LanguageType {
    return (localStorage.getItem('lang') as LanguageType) || DEFAULT_LANGUAGE;
  }
}