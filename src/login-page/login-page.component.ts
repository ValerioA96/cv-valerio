import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { UtilityFunctions } from '../utility-functions/utility-functions';
import { AuthService } from '../services/auth-service/auth.service';
import { Langauges } from '../models/models';
import { Router } from '@angular/router';

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
  
  constructor(private _translateService: TranslateService,
              private _authService: AuthService,
              private router: Router
  ) {}

  ngOnInit() {
    this._translateService.setDefaultLang('it');
    this.switchLanguage('it');
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
    this._translateService.use(lang);
  }

}
