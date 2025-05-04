import {Component, ChangeDetectorRef, inject} from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs/operators';
import { NgIf } from '@angular/common';
import {UploadImageService} from '../../services/upload-image.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  imports: [NgIf],
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {
  selectedFile: File | null = null;
  private uploadImageService = inject(UploadImageService)
  constructor(private cdr: ChangeDetectorRef) {}

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
