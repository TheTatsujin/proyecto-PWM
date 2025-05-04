import {Component, inject, OnInit} from '@angular/core';
import {AccordionComponent} from '../../accordion/accordion.component';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {MatButton} from '@angular/material/button';
import {FaqService} from '../../../services/faq.service';
import {Subscription} from 'rxjs';
import {Faq} from '../../../model/faq';

@Component({
  selector: 'app-main-page',
  imports: [
    AccordionComponent,
    RouterLink,
    MatButton,
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent implements OnInit {
  faqService = inject(FaqService);
  route = inject(ActivatedRoute);

  private subscription: Subscription | undefined;
  protected retrievedFaq: Faq[] |undefined;
  userIdParam: string | undefined;

  ngOnInit() {
    this.route.queryParams.subscribe(params => {this.userIdParam = params['userId'];})
    this.subscription = this.faqService.getFrequentlyAskedQuestions().subscribe(faq => this.retrievedFaq = faq);
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
  /* TODO -> Load images */
}
