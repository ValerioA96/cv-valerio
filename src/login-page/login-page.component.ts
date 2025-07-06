import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { UtilityFunctions } from '../utility-functions/utility-functions';
import { AuthService } from '../services/auth-service/auth.service';
import { Langauges } from '../models/models';
import { Router } from '@angular/router';
import { TranslationService } from '../services/translation-service/translation-service.service';

@Component({
  standalone: true,
  selector: 'app-login-page',
  imports: [CommonModule, FormsModule, TranslateModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})

export class LoginPageComponent implements OnInit {
  errorMessage: string = '';
  showError: boolean = false;
  
  constructor(private _authService: AuthService,
              private router: Router,
              private _translationService: TranslationService
  ) {}

  ngOnInit() {
    this._translationService.initLanguage();
  }

  onSubmit(form: NgForm){
    if(this._authService.login(form.value.password)) {
      this.showError = false;
      this.router.navigate(['/main-page']);
    }else {
      this.showError = true;
    }
  }

  switchLanguage(lang: Langauges) {
    this._translationService.setLanguage(lang);
  }

}
