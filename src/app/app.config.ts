import { ApplicationConfig } from '@angular/core';

import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

import { provideHttpClient, withInterceptors } from '@angular/common/http';

import { TokenInterceptor } from './core/interceptors/token';

import { importProvidersFrom } from '@angular/core';
import { FormsModule } from '@angular/forms';

export const appConfig: ApplicationConfig = {

  providers: [
    importProvidersFrom(FormsModule),

    provideRouter(routes),

    provideHttpClient(

      withInterceptors([TokenInterceptor])   // ✅ clean & correct

    )

  ]

};
 