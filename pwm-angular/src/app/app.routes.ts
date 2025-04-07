import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import("./components/pages/main-page/main-page.component")
        .then((m) => m.MainPageComponent),
  }
];
