import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router, RouterOutlet} from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {SecondHeaderComponent} from './components/second-header/second-header.component';
import {filter} from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FooterComponent, RouterOutlet, SecondHeaderComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pwm-angular';

  header: number = 1;
  footer: boolean = true;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        const currentRoute = this.getChild(this.activatedRoute);

        currentRoute.queryParams.subscribe(params => {
          this.header = Number(params['header'] ?? 1);
          this.footer= params['footer'] === undefined ? true : params['footer'] === 'true';
        });
      });
  }

  getChild(route: ActivatedRoute): ActivatedRoute {
    while (route.firstChild) {
      route = route.firstChild;
    }
    return route;
  }
}
