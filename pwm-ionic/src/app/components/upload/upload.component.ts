import {ChangeDetectorRef, Component } from '@angular/core';
import {NgIf} from "@angular/common";
import {UploadImageService} from "../../services/upload.service";
import {IonButton} from "@ionic/angular/standalone";

@Component({
    selector: 'app-upload',
    templateUrl: './upload.component.html',
    styleUrls: ['./upload.component.scss'],
  imports: [
    NgIf,
    IonButton
  ]
})
export class UploadComponent {
  selectedFile: File | null = null;
  constructor(private cdr: ChangeDetectorRef, private uploadImageService: UploadImageService) {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    this.cdr.detectChanges();
  }

  onUpload() {
    if (this.selectedFile) {
      this.uploadImageService.uploadImage(this.selectedFile, this.selectedFile.name)
      this.selectedFile = null;
      this.cdr.detectChanges();
    }
  }
}
