import { Injectable } from '@angular/core';
import { AppService } from 'app/@core/service/App.Service';

@Injectable({
  providedIn: 'root'
})
export class BenificiaryManagementService extends AppService<any>{

  constructor() {
    super('beneficiary');
   }
  async getAllBeneficiaries(customerId : number , isFavouriteData : boolean) {
    // var dto: any = {};
    // dto = {
    //     customerId: customerId,
    // };
    const result = await this.get(`getAllBeneficiary?customerId=${customerId}&flag=${isFavouriteData}`);
    // /v1/beneficiary/getAllBeneficiary?customerId=150&flag=false
    return result;
}
  async deleteBenificiary(id: number){
    const result = await this.post(`deleteBene/${id}`);
    return result;
  }
  async fetchAccountDetails(accountNumber: any){
    const result = await this.get(`/getLocalAccountTitle?senderAccountNumber=${accountNumber}`);
    return result;
  }
}
