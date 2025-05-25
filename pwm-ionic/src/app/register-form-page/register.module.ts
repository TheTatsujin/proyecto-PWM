import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import {RegisterFormPageComponent} from "./register-form-page.component";
import {IonicModule} from "@ionic/angular";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    RegisterRoutingModule,
    IonicModule,
    ReactiveFormsModule,
  ],
  declarations: [RegisterFormPageComponent]
})
export class RegisterModule { }
