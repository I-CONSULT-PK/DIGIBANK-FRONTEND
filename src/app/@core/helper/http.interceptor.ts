import { AppConstants } from "../../@constant/app.constant";
import { Injectable } from "@angular/core";
import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpErrorResponse,
    HttpResponse,
} from "@angular/common/http";
import { Observable, of, throwError } from "rxjs"
import {
    catchError,
    delay,
    finalize,
    map,
    retryWhen,
    tap,
} from "rxjs/operators";
import { Router } from "@angular/router"; import { LoaderService } from "./loader.service";
;

@Injectable()
export class DefaultInterceptor implements HttpInterceptor {

    constructor(public router: Router, private loaderService: LoaderService) {
    }

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        debugger
        const Islogin = localStorage.getItem("IsUserLogin");
        const token = localStorage.getItem("token");
        if (!token && Islogin) {
            this.router.navigate(["/login"]);
        }
        const userData = localStorage.getItem('userInfo'); // Retrieve the token from local storage
        if (userData) {
            const user = JSON.parse(userData);
            const token = user.token;
            if (token) {
                // Clone the request to add the new header
                const clonedRequest = req.clone({
                    setHeaders: {
                        Authorization: `Bearer ${token}`
                    }
                });

                // Pass the cloned request instead of the original request to the next handler
                return next.handle(clonedRequest);
            }
        }

        // Pass the original request if there's no token
        return next.handle(req);

        const modified = req.clone({
            // setHeaders: { Authorization: token ? token : "xxx" },
        });
        if (req.method == 'POST' || req.method == 'PUT' || req.method == 'DELETE') {
            this.loaderService.isLoading.next(true);
        }
        else {
            this.loaderService.isLoading.next(false);
        }
        return next.handle(modified).pipe(
            catchError((err) => {
                if (err instanceof HttpErrorResponse) {
                    switch ((<HttpErrorResponse>err).status) {
                        case 400:
                            return throwError(err);
                        case 401:
                            this.goto(``);
                        default:
                            return throwError(err);
                    }
                } else {
                    return throwError(err);
                }
            }),
            retryWhen((err) => {
                let retries = 1;
                return err.pipe(
                    delay(1000),
                    tap(() => { }),
                    map((error) => {
                        if (retries++ === 3) {
                            throw error;
                        }
                        this.loaderService.isLoading.next(false);
                        return error;
                    })
                );
            }),
            finalize(() => {
                this.loaderService.isLoading.next(false);
            })
        );
    }

    private goto(url: string) {
        setTimeout(() => this.router.navigateByUrl(url));
    }
}
