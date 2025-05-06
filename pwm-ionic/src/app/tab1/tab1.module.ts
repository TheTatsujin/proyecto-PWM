import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { Tab1PageRoutingModule } from './tab1-routing.module';
import {DropdownComponent} from "../components/dropdown/dropdown.component";
import {TicketTableComponent} from "../components/ticket-table/ticket-table.component";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    DropdownComponent,
    TicketTableComponent
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}
