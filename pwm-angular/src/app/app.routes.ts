import { Routes } from '@angular/router';

export const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  loadComponent: () => {
    return import("./components/pages/main/main-page.component").then((m) => m.MainPageComponent);
  }
}];
