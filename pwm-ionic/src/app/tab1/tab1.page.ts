import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {

  defaultLocation = "Arquitectura";
  defaultChoice = "Arquitectura";


  ngOnInit() {
    if (typeof window !== 'undefined' && window.localStorage) {
      const saved = localStorage.getItem('selectedLocation');
      if (saved) {
        this.defaultLocation = saved;
        this.defaultChoice = saved;
      }
    }
  }

  onChoiceSelected(selectedValue: string) {
    this.defaultLocation = selectedValue;
    this.defaultChoice = selectedValue
    localStorage.setItem('selectedLocation', selectedValue);
  }
}
