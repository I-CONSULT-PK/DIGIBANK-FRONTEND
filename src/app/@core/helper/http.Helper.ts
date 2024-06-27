import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class HttpHelper {
//   protected localStorage: LocalStorage;

  constructor(private http: HttpClient) {
    // this.localStorage = AppConstants.injector.get(LocalStorage);
  }

  async get<T>(url: string, headers: HttpHeaders): Promise<T> {

    return await this.http
      .get<T>(url, { headers })
      .toPromise()
      .then((res) => {
        return res;
      })
      .catch((o) => {
        return o.error;
      });
  }

  getObservable<T>(url: string, headers: HttpHeaders): Observable<T> {
    return this.http.get<T>(url, { headers });
  }

  async post<T>(url: string, headers: HttpHeaders, body?: any): Promise<T> {
    return await this.http
      .post<T>(url, body, { headers })
      .toPromise()
      .then((res) => {
        return res;
      })
      .catch((o) => {
        return o.error;
      });
  }

  async put<T>(url: string, headers: HttpHeaders, body?: any): Promise<T> {
    return await this.http
      .put<T>(url, body, { headers })
      .toPromise()
      .then((res) => {
        return res;
      })
      .catch((o) => {
        return o.error;
      });
  }

  async delete<T>(url: string, headers: HttpHeaders, body?: any): Promise<T> {
    headers = new HttpHeaders();
    let token = localStorage.getItem("token")?.toString();
    const httpOptions = {
      headers: new HttpHeaders()
        .append("Content-type", "application/json")
        .set("Authorization", token ? token : ""),
      body: body,
    };

    return await this.http
      .delete<T>(url, httpOptions)
      .toPromise()
      .then((res) => {
        return res;
      })
      .catch((o) => {
        return o.error;
      });
  }
}
