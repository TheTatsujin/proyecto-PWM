import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import {RegisterFormPageComponent} from "./register-form-page.component";
import {IonicModule} from "@ionic/angular";
import {ReactiveFormsModule} from "@angular/forms";
import {UploadComponent} from "../components/upload/upload.component";
import {IonButton} from "@ionic/angular/standalone";

@NgModule({
  imports: [
    CommonModule,
    RegisterRoutingModule,
    IonicModule,
    ReactiveFormsModule,
    UploadComponent,
    IonButton,
  ],
  declarations: [RegisterFormPageComponent]
})
export class RegisterModule { }
