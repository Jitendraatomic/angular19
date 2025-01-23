import { HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';

export const authInterceptor: (req: HttpRequest<any>, next: HttpHandlerFn) => Observable<HttpEvent<any>> =
  (req, next) => {
    const authToken = localStorage.getItem('token'); // Assuming JWT token is stored in localStorage

    if (authToken) {
      const clonedRequest = req.clone({
        setHeaders: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      return next(clonedRequest);
    }

    return next(req);
  };
