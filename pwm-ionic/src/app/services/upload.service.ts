import {inject, Injectable, Input} from '@angular/core';
import {addDoc, collection, Firestore} from '@angular/fire/firestore';
import {Image} from '../model/image';

@Injectable({
  providedIn: 'root'
})
export class UploadImageService {
  private fireStore = inject(Firestore)
  constructor() { }

  public isImageTooLarge(base64: string): boolean {
    const byteLength = this.getBase64SizeInBytes(base64);

    const MAX_SIZE_BYTES = 900 * 1024; // 900 KB con holgura
    if (byteLength > MAX_SIZE_BYTES) {
      return true
    }
    return false;
  }

  public getBase64SizeInBytes(base64: string): number {
    const base64Str = base64.split(',')[1] || base64;
    const padding = (base64Str.match(/=+$/) || [''])[0].length;
    return (base64Str.length * 3) / 4 - padding;
  }

  public async fileToBase64(file: File): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = error => reject(error);
    });
  }

  async uploadImage(file: File, fileName: string): Promise<void> {
    const encodedImage = await this.fileToBase64(file);
    const image: Image = {
      name: fileName,
      value: encodedImage,
    };
    const fireRef = collection(this.fireStore, 'uploads');
    addDoc(fireRef, image);
  }
}
