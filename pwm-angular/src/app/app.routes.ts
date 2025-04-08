import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import("./components/pages/main-page/main-page.component")
        .then((m) => m.MainPageComponent)
  },
  {
    path: 'tickets',
    loadComponent: () =>
      import("./components/pages/ticket-page/ticket-page.component")
        .then((m) => m.TicketPageComponent),
  },
  {
    path: 'artists',
    loadComponent: () =>
      import("./components/pages/artist-page/artist-page.component")
        .then((m) => m.ArtistPageComponent),
  },
  {
    path: 'login',
    loadComponent: () =>
      import("./components/pages/login-form-page/login-form.component")
        .then((m) => m.LoginFormComponent)
  },
  {
    path: 'register',
    loadComponent: () =>
      import("./components/pages/register-form-page/register-form.component")
        .then((m) => m.RegisterFormComponent)
  },
  {
    path: 'recovery',
    loadComponent: () =>
      import("./components/pages/recovery-form/recovery-form.component")
        .then((m) => m.RecoveryFormComponent)
  },
  {
    path: 'user',
    loadComponent: () =>
      import("./components/pages/user-page/user-page.component")
        .then((m) => m.UserPageComponent)
  }
];
