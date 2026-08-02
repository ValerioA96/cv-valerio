import { Component, inject, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { LanguageType, TranslationService } from '../../../services/translation-service/translation-service.service';

@Component({
  selector: 'app-home',
  imports: [TranslateModule,RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  translator = inject(TranslationService);
  language: LanguageType = this.translator.getCurrentLanguage();

  downloadCV(): void {
    const path = this.language === 'it' ? 'assets/cv/anzil_cv_it.pdf' : 'assets/cv/anzil_cv_en.pdf';
    window.open(path, '_blank', 'noopener');

    const a = document.createElement('a');
    a.href = path;
    a.download = this.language === 'it' ? 'anzil_cv_it.pdf' : 'anzil_cv_en.pdf';
    a.click();
  }
}
