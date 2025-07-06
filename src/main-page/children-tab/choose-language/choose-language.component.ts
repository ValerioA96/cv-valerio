import { Component } from '@angular/core';
import { TranslationService } from '../../../services/translation-service/translation-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-choose-language',
  imports: [CommonModule],
  templateUrl: './choose-language.component.html',
  styleUrl: './choose-language.component.css'
})
export class ChooseLanguageComponent {
  language: string = '';
  constructor(private _translationService: TranslationService) {
    this.language = this._translationService.getCurrentLanguage();
  }

  switchLanguage(lang: string) {
    this._translationService.setLanguage(lang);
    this.language = this._translationService.getCurrentLanguage();
  }

}
