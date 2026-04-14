import { HttpInterceptorFn } from '@angular/common/http';

export const TokenInterceptor: HttpInterceptorFn = (req, next) => {

  // ❌ Skip token for login & register

  if (req.url.includes('/login') || req.url.includes('/register')) {

    return next(req);

  }

  const token = localStorage.getItem('token');

  if (token) {

    const clonedReq = req.clone({

      setHeaders: {

        Authorization: `Bearer ${token}`

      }

    });

    return next(clonedReq);

  }

  return next(req);

};
 