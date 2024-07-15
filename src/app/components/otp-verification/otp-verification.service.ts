import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { HttpHelper } from "app/@core/helper/http.Helper";
import { AppService } from "app/@core/service/App.Service";
import { Observable } from "rxjs";
@Injectable({
    providedIn: 'root',
})
export class otpService extends AppService<any>{

    constructor() {
        super('otp');
    }
    async OTPCreation(dto: any) {
        debugger
        const result = await this.post("createOTP", dto);
        return result;
    }
    async OTPVerify(dto: any) {
        debugger
        const result = await this.post("verifyOTP", dto);
        return result;
    }

}