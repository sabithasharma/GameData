import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class BasicAuthInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with basic auth credentials if available
        const authdata = localStorage.getItem('token');
        if (authdata) {
            request = request.clone({
                setHeaders: {
                    Authorization: authdata,
                }
            });
        }
        const authReq = request.clone({ setHeaders: { Authorization: authdata } });

        return next.handle(request);
    }
}
