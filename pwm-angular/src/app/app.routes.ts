import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import("./components/pages/main-page/main-page.component")
        .then((m) => m.MainPageComponent),
  },
  {
    path: '/tickets',
    loadComponent: () =>
      import("./components/pages/ticket-page/ticket-page.component")
        .then((m) => m.TicketPageComponent),
  }
];
