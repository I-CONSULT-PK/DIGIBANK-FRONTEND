import { Component } from '@angular/core';
import { BenificiaryManagementService } from '../benificiary-management.service';

@Component({
  moduleId: module.id,
  selector: 'benificiary-management-listing',
  templateUrl: 'benificiary-management-listing.component.html',
  styleUrls: ['benificiary-management-listing.component.scss']
})
export class BenificiaryManagementListingComponent {
  beneficiaries: any[];
  isFavouriteData: boolean = false;

  constructor(private benificiaryManagementService: BenificiaryManagementService) { }
  async ngOnInit() {
    await this.getAllBeneficiaries();
  }
  async getAllBeneficiaries() {
    const userData = localStorage.getItem('userInfo');
    if (userData) {
      const user = JSON.parse(userData);
      console.log('Logged in user:', user);
      console.log('customerId:', user.customerId);
      const dto: any = await this.benificiaryManagementService.getAllBeneficiaries(user.customerId, this.isFavouriteData);
      this.beneficiaries = dto.data;
      console.log(this.beneficiaries, "hello world")

    }
  }
  columnDefs = [
    {
      headerName: 'Description',
      field: 'beneficiaryName',
      cellRenderer: (params: { value: any; }) => {
        return `
              <div class="d-flex justify-content-start align-items-center">
                <div class="w-40-px h-40-px">
                  <img class="w-100" src="../../../assets/img/digibank-logo.png" alt="">
                </div>
                <div class="text-center mx-2 fs-15px">${params.value}</div>
              </div>`;
      },
    },
    { headerName: 'Banks', field: 'beneficiaryBankName' },
    { headerName: 'Account Number', field: 'accountNumber' },
    // {
    //     headerName: 'Action',
    //     cellRenderer: (params) => {
    //         return `
    //       <div class="d-flex flex-row gap-2">
    //         <div class="px-2 py-1 border rounded-circle shadow-sm cursor-pointer">
    //           <i class="far fa-heart"></i>
    //         </div> 
    //         <div class="px-2 py-1 border rounded-circle shadow-sm cursor-pointer">
    //           <i class="fas fa-edit fav-icon"></i>
    //         </div>
    //         <div class="px-2 py-1 border rounded-circle shadow-sm cursor-pointer">
    //           <i class="fas fa-trash-alt fav-icon"></i>
    //         </div>
    //       </div>`;
    //     },
    // },
  ];

}
