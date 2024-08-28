import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { HttpHelper } from "app/@core/helper/http.Helper";
import { AppService } from "app/@core/service/App.Service";
import { Observable } from "rxjs";
@Injectable({
    providedIn: 'root',
})
export class beneficiaryManagmentService extends AppService<any> {

    constructor() {
        super('beneficiary');
    }

    async getAllBeneficiaryList(customerid: any) {
        const result = await this.post("getAllBeneficiary", customerid);
        return result;
    }

}