import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(withEventReplay()), provideFirebaseApp(() => initializeApp({ projectId: "pwm-firebase-48e3e", appId: "1:953923855442:web:7e6ca0e869a2f1acf2eb8b", storageBucket: "pwm-firebase-48e3e.firebasestorage.app", apiKey: "AIzaSyDXeQluMXOBeVt9Qw351yrEtcOomr2Ofr8", authDomain: "pwm-firebase-48e3e.firebaseapp.com", messagingSenderId: "953923855442" })), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideFirebaseApp(() => initializeApp({ projectId: "pwm-firebase-48e3e", appId: "1:953923855442:web:7e6ca0e869a2f1acf2eb8b", storageBucket: "pwm-firebase-48e3e.firebasestorage.app", apiKey: "AIzaSyDXeQluMXOBeVt9Qw351yrEtcOomr2Ofr8", authDomain: "pwm-firebase-48e3e.firebaseapp.com", messagingSenderId: "953923855442" })), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())]
};
