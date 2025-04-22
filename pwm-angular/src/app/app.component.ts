import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {SecondHeaderComponent} from './components/second-header/second-header.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FooterComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pwm-angular';

/*
  header: boolean = false;
  second: boolean = false;
  footer: boolean = false;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(param => {
      this.header = param['header'] === 'true';
      this.second = param['second'] === 'true';
      this.footer = param['footer'] === 'true';
    })
  }
 */
}
