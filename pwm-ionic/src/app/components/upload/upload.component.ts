import {ChangeDetectorRef, Component } from '@angular/core';
import {NgIf} from "@angular/common";
import {UploadImageService} from "../../services/upload.service";

@Component({
    selector: 'app-upload',
    templateUrl: './upload.component.html',
    styleUrls: ['./upload.component.scss'],
    imports: [
        NgIf
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
