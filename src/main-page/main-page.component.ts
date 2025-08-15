import { Langauges } from './../models/models';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslationService } from '../services/translation-service/translation-service.service';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-main-page',
  imports: [CommonModule, FormsModule, TranslateModule, RouterModule],
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  constructor(private _translationService: TranslationService) {
    this._translationService.initLanguage();
  }

  menuOpen = false;

  menuItems = [
    { label: 'MAIN_PAGE.HOME', link: '/main-page/home' },
    { label: 'MAIN_PAGE.EXPERIENCE', link: '/main-page/experience' },
    { label: 'MAIN_PAGE.EDUCATION', link: '/main-page/education' },
    // { label: 'MAIN_PAGE.SKILLS', link: '/main-page/skills' },
    { label: 'MAIN_PAGE.CONTACTS', link: '/main-page/contacts' },
    // { label: 'MAIN_PAGE.ABOUT_ME', link: '/main-page/about-me' },
    { label: 'MAIN_PAGE.LANGUAGE', link: '/main-page/choose-language' },
  ];


  switchLanguage(lang: Langauges) {
    this._translationService.setLanguage(lang);
  }
}
