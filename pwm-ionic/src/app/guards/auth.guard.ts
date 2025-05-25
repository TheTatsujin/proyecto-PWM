import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  GuardResult,
  MaybeAsync,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import {AuthService} from "../services/auth.service";
import {combineLatest, filter, map, Observable, take} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {};
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> {
    return combineLatest([
      this.authService.isAuthenticated$,
      this.authService.authCheckCompleted$
    ]).pipe(
      filter(([_, completed]) => completed),
      take(1),
      map(([isAuthenticated]) => {
        return isAuthenticated ? true : this.router.createUrlTree(['/tabs/login']);
      })
    );
  }
}
