import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {FaqService} from "../services/faq.service";
import {Subscription} from "rxjs";
import {Faq} from "../model/faq";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page implements OnInit, OnDestroy {
  faqService = inject(FaqService);
  private subscription: Subscription | undefined;
  protected retrievedFaq: Faq[] |undefined;
  constructor() {}

  ngOnInit() {
    this.subscription = this.faqService.getFrequentlyAskedQuestions().subscribe(faq => this.retrievedFaq = faq);
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

}
