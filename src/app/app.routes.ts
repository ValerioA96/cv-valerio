import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { authGuard } from '../auth-guard/auth.guard';
import { HomeComponent } from '../main-page/children-tab/home/home.component';
import { ExperienceComponent } from '../main-page/children-tab/experience/experience.component';
import { EducationComponent } from '../main-page/children-tab/education/education.component';
import { SkillsComponent } from '../main-page/children-tab/skills/skills.component';
import { ContactsComponent } from '../main-page/children-tab/contacts/contacts.component';
import { AboutMeComponent } from '../main-page/children-tab/about-me/about-me.component';
import { ChooseLanguageComponent } from '../main-page/children-tab/choose-language/choose-language.component';


export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { 
    path: 'login', 
    loadComponent: () => import('../login-page/login-page.component').then(m => m.LoginPageComponent),
  },
  {
    path: 'main-page',
    loadComponent: () => import('../main-page/main-page.component').then(m => m.MainPageComponent),
    children:[
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'experience', component: ExperienceComponent },
    { path: 'education', component: EducationComponent },
    { path: 'skills', component: SkillsComponent },
    { path: 'contacts', component: ContactsComponent },
    { path: 'about-me', component: AboutMeComponent },
    { path: 'choose-language', component: ChooseLanguageComponent }
  ],
    canActivate: [authGuard]
  },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
