import {inject, Injectable} from '@angular/core';
import {addDoc, collection, Firestore} from '@angular/fire/firestore';
import {Image} from '../model/image';

@Injectable({
  providedIn: 'root'
})
export class UploadImageService {
  private fireStore = inject(Firestore)
  constructor() { }

  private async fileToBase64(file: File): Promise<string> {
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
