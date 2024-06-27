import { Inject } from "@angular/core";
import { Injectable } from "@angular/core";
import { HttpHelper } from "../helper/http.Helper";
import { HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { AppConstants } from "app/@constant/app.constant";
@Injectable({
    providedIn: "root",
})
export class BaseService<T extends any> {
    headers = new HttpHeaders();
    private httpHelper: HttpHelper;
    protected attributes: any = {};
    protected attribProp: any = {};

    constructor(
        @Inject(String) public controller: string,
        @Inject(String) private url: any,
    ) {
        this.httpHelper = AppConstants.injector.get(HttpHelper);
        this.headers = this.headers.append("Content-Type", "application/json");
        this.headers = this.headers.append("Access-Control-Allow-Origin", "*");
    }

    addDefaultCondition(key: string, params: Array<any>) {
        this.attributes[key] = params;
        this.setAttributes();
    }

    setAttributes() {
        this.headers.delete("attributes");
        this.headers = new HttpHeaders();
        this.headers = this.headers.append("Content-Type", "application/json");
        this.headers = this.headers.append("Access-Control-Allow-Origin", "*");
        if (this.attributes) {
            this.headers = this.headers.append(
                "attributes",
                "{'DefaultConditions':" + JSON.stringify(this.attributes) + "}"
            );
        }
    }

    clearCondition() {
        this.headers.delete("DefaultConditions");
        this.attributes = {};
        this.headers.delete("attributes");
        this.headers = new HttpHeaders();
    }
    async getNext(nextOf: any) {
        const dto = await this.get("next", nextOf);
        return dto;
    }

    async getPrevious(previousOf: any) {
        const dto = await this.get("previous", previousOf);

        return dto;
    }

    async getLast() {
        const dto = await this.get("last");

        return dto;
    }

    async getFirst() {
        const dto = await this.get("first");

        return dto;
    }

    async Get(key: any) {
        const dto = await this.get("", key);

        return dto;
    }

    async getAll() {
        const dto = await this.get();

        return dto;
    }

    async getreportAll(url: any) {
        const dto = await this.getreportdata(url);

        return dto;
    }

    async save(dto: any) {
        let result;
        if (dto.KeyValue) {
            result = await this.put("", dto);
        } else {
            result = await this.post("", dto);
        }

        return result;
    }

    async delete(Id: any) {
        const dto = <any>{
            KeyValue: Id,
            ReturnObject: true,
        };

        const result = await this.del("", dto);
        return result;
    }

    async get(method?: any, params?: Array<any>): Promise<any> {
        return await this.httpHelper.get<any>(
            this.getUrl(method, params),
            this.headers
        );
    }

    async getreportdata(urlreport?: any, method?: any, params?: Array<any>): Promise<any> {
        return await this.httpHelper.get<any>(
            // this.getUrl(method, params),
            urlreport,
            this.headers
        );
    }

    getObservable(
        method?: any,
        params?: Array<any>
    ): Observable<any> {
        return this.httpHelper.getObservable<any>(
            this.getUrl(method, params),
            this.headers
        );
    }

    async post(
        method: string,
        body?: any,
        params?: Array<any>,
    ): Promise<any> {
        return await this.httpHelper.post<any>(
            this.getUrl(method, params),
            this.headers,
            body
        );
    }

    async put(
        method: string,
        body?: any,
        params?: [any]
    ): Promise<any> {
        return await this.httpHelper.put<any>(
            this.getUrl(method, params),
            this.headers,
            body
        );
    }

    async del(
        method: string,
        body?: any,
        params?: [any]
    ): Promise<any> {
        return await this.httpHelper.delete<any>(
            this.getUrl(method, params),
            this.headers,
            body
        );
    }

    private getUrl(method: string, params?: any): string {
        let result: string;
        result = this.url
            .concat("/" + AppConstants.settings.ApiVersion + "/")
            .concat(this.controller + "/")
            .concat(method || "");

        if (params) {
            result = result
                .concat("/")
                .concat(Array.isArray(params) ? params.join("/") : params);
        }

        return result;
    }

    async uploadFile(
        method: string,
        header: HttpHeaders,
        body?: any,
        params?: Array<any>,
    ): Promise<any> {
        return await this.httpHelper.post<any>(
            this.getUrl(method, params),
            header,
            body
        );
    }
}
