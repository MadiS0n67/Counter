import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader, TRANSLATE_HTTP_LOADER_CONFIG } from '@ngx-translate/http-loader';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { routes } from './app.routes';

const firebaseConfig = {
  apiKey: "AIzaSyDAB3gTfac4hke4duVrrt_ow1HQ1daOAWs",
  authDomain: "counter-d38f9.firebaseapp.com",
  projectId: "counter-d38f9",
  storageBucket: "counter-d38f9.firebasestorage.app",
  messagingSenderId: "79587473117",
  appId: "1:79587473117:web:2a8a8c506c536d203e0d34",
  measurementId: "G-31J3YRP9PJ"
};


export const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);

export function HttpLoaderFactory(http: HttpClient) {
  return new (TranslateHttpLoader as any)(http, './assets/i18n/', '.json');
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    { provide: TRANSLATE_HTTP_LOADER_CONFIG, useValue: {} },
    importProvidersFrom(
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
        },
        defaultLanguage: 'pl'
      })
    )
  ]
};