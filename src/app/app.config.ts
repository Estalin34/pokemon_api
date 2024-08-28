import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getAnalytics, provideAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideHttpClient(), 
    provideFirebaseApp(() => initializeApp({"projectId":"app-pokemon-21683","appId":"1:571738223421:web:a781203b1998db1715cb54","storageBucket":"app-pokemon-21683.appspot.com","apiKey":"AIzaSyCxD0w629vJDjVcW8sBwlvrtpLsFPdT7r8","authDomain":"app-pokemon-21683.firebaseapp.com","messagingSenderId":"571738223421"})), provideAuth(() => getAuth()), provideAnalytics(() => getAnalytics()), ScreenTrackingService, UserTrackingService, provideFirestore(() => getFirestore()), provideStorage(() => getStorage()),
  ]
};
