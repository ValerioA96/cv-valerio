import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({ providedIn: 'root' })
export class TranslationService {
  constructor(private translate: TranslateService) {}

  initLanguage() {
    const savedLang = localStorage.getItem('lang') || 'it';
    this.translate.setDefaultLang(savedLang);
    this.translate.use(savedLang);
  }

  setLanguage(lang: string) {
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
  }

  getCurrentLanguage(): string {
    return localStorage.getItem('lang')!;
  }
}