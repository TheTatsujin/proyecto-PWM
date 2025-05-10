import { NgModule } from '@angular/core';
import {CommonModule, NgIf, NgOptimizedImage} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UserPagePageRoutingModule } from './user-page-routing.module';
import { UserPagePage } from './user-page.page';
import {UploadComponent} from "../components/upload/upload.component";


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        UserPagePageRoutingModule,
        NgIf,
        NgOptimizedImage,
        UploadComponent
    ],
  declarations: [UserPagePage]
})
export class UserPagePageModule {}
