import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { HttpHelper } from "app/@core/helper/http.Helper";
import { AppService } from "app/@core/service/App.Service";
import { Observable } from "rxjs";
@Injectable({
    providedIn: 'root',
})
export class signupService extends AppService<any> {

    constructor() {
        super('customer');
    }

    async VerifyCustomerV2(dto: any) {
        const result = await this.post("signup", dto);
        return result;
    }
    async RegisterCustomerV2(dto: any) {
        const result = await this.post("register", dto);
        return result;
    }
}