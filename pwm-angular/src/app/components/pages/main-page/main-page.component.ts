import { Component } from '@angular/core';
import {AccordionComponent} from '../../accordion/accordion.component';
import {RouterLink} from '@angular/router';
import {MatButton} from '@angular/material/button';

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
export class MainPageComponent {
  questions = [
    "How many owls can I carry to the event?",
    "How much are the event tickets?",
    "Will there be an event next year?",
    "Will there be DJ Santa?"
  ]
  answers = [
    "As many as you want because we are throwing a party!",
    "You can look at our prices at the tickets section",
    "Of course, we are looking forward to seeing you next year!",
    "Yes, he will party as hard as ever!"
  ]
  /* TODO -> Load images */
}
