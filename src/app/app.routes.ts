import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { authGuard } from '../auth-guard/auth.guard';


export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { 
    path: 'login', 
    loadComponent: () => import('../login-page/login-page.component').then(m => m.LoginPageComponent),
  },
  {
    path: 'main-page',
    loadComponent: () => import('../main-page/main-page.component').then(m => m.MainPageComponent),
    canActivate: [authGuard]
  },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
