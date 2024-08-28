import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AppService } from "app/@core/service/App.Service";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class navbarService extends AppService<any>{
    constructor() {
        super('customer');
    }
    async getCustomerById(userid: any) {

        const result = await this.get('getCustomer', userid);
        return result;
    }
    async getBanks() {
        const result = await this.get(`/fund/getBanks`);
        return result;
    }
}
