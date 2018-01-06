import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {AuthService} from "./services/auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>,
            next: HttpHandler): Observable<HttpEvent<any>> {

    const headers = this.getHeaders();

    if (headers.has('access-token')) {
      const cloned = req.clone({
        headers: headers
      });
      return next.handle(cloned);
    }
    else {
      return next.handle(req);
    }
  }

  getHeaders():HttpHeaders {
    let result = new HttpHeaders();
    AuthService.REQUIRED_HEADERS.forEach((key) => {
      if (localStorage.getItem(key)) {
        result = result.set(key, localStorage.getItem(key))
      }
    });
    return result;
  }
}
