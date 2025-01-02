import { HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

export const jwtInterceptor: HttpInterceptorFn = (req: HttpRequest<any>, next: HttpHandlerFn): Observable<HttpEvent<any>> => {
  if (req.headers.has('No-Auth')) {
    const headers = req.headers.delete('No-Auth');
    const clonedRequest = req.clone({ headers });
    return next(clonedRequest);
  }

  const token = localStorage.getItem('jwt');
  let clonedRequest = req;

  if (token) {
    clonedRequest = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`)
    });
  }

  return next(clonedRequest).pipe(
    catchError(error => {
      console.error('Interceptor error:', error);
      return throwError(error);
    })
  );
};
