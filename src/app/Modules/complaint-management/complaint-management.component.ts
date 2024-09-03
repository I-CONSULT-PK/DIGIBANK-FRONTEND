import { Component, ViewChild } from '@angular/core';
import { IcsModalComponent } from 'app/components/ics-modal/ics-modal.component';



@Component({
    moduleId: module.id,
    selector: 'complaint-management',
    templateUrl: 'complaint-management.component.html',
    styleUrls: ['complaint-management.component.scss'],

})
export class ComplaintManagementComponent {
    constructor() { }
    @ViewChild('Modal1') modal: IcsModalComponent | any;
    @ViewChild('NewModal1') NewModal1: IcsModalComponent | any;

    test: Date = new Date();
    ngOnInit() {
    }
    beneficiaryTypeData: any = [
        {
            id: 0,
            benname: "Moblile App not working"
        },
        {
            id: 0,
            benname: "Account Dormante"
        },
        {
            id: 0,
            benname: "Funds Transfer Issue"
        },
        {
            id: 0,
            benname: "Debit Card block issue"
        }
    ];
    async OpenModal() {
        
        this.modal.open();
    }
    async SuccessPopup() {
        
        this.NewModal1.open('xs');
    }
}
