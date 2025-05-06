import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import {bootstrapApplication} from "@angular/platform-browser";
import {AppComponent} from "./app/app.component";
import {initializeApp, provideFirebaseApp} from "@angular/fire/app";
import {getFirestore, provideFirestore} from "@angular/fire/firestore";
import {getAuth, provideAuth} from "@angular/fire/auth";
import {environment} from "./environments/environment";

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));

bootstrapApplication(AppComponent, {
  providers: [
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()), provideFirebaseApp(() => initializeApp({ projectId: "pwm-firebase-48e3e", appId: "1:953923855442:web:7e6ca0e869a2f1acf2eb8b", storageBucket: "pwm-firebase-48e3e.firebasestorage.app", apiKey: "AIzaSyDXeQluMXOBeVt9Qw351yrEtcOomr2Ofr8", authDomain: "pwm-firebase-48e3e.firebaseapp.com", messagingSenderId: "953923855442" })), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())
  ]
});
