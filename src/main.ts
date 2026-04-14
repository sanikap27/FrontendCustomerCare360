import { bootstrapApplication } from '@angular/platform-browser';

import { provideRouter } from '@angular/router';   // ✅ ADD THIS

import { App } from './app/app';

import { routes } from './app/app.routes';         // ✅ ADD THIS

import { provideHttpClient, withInterceptors } from '@angular/common/http';

import { TokenInterceptor } from './app/core/interceptors/token';

bootstrapApplication(App, {

  providers: [

    provideRouter(routes),   // ✅ VERY IMPORTANT

    provideHttpClient(withInterceptors([TokenInterceptor]))

  ]

});
 