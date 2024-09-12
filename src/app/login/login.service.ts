import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { HttpHelper } from "app/@core/helper/http.Helper";
import { AppService } from "app/@core/service/App.Service";
import { Observable } from "rxjs";
@Injectable({
    providedIn: 'root',
})
export class loginService extends AppService<any> {

    constructor() {
        super('customer');
    }

    async login(dto: any) {
        const result = await this.post("login", dto);
        return result;
    }

    async forgotUsername(dto: any) {
        const result = await this.post("forgetUserName", dto);
        return result;
    }
    async forgotUserTogetEmail(dto: any) {
        const result = await this.post("forgetUser", dto);
        return result;
    }
    async forgotpassword(dto: any) {
        const result = await this.post("forgetPassword", dto);
        return result;
    }
    async fetchUserDetails(userId : number) {
        const result = await this.get(`fetchUserDetails?userId=${userId}`);
        return result;
    }

    // These API's Not belong To This Module It will be Move by Customer Module Soon
    // async GetEmployeeById(empid: any) {
    //     const result = await this.get('customer', [empid]);
    //     return result;
    // }
    // async GetAllBeneficiaryById(customerId: any) {
    //     const result = await this.get('getAllBeneficiary', [customerId]);
    //     return result;
    // }

}