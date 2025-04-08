@injectable({providedIn: 'root'})

export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {};

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean {
    let isLoggedIn = this.authService.isAuthenticated();
    return isLoggedIn;
  }
}
