import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder} from '@angular/forms';
import { IcsModalComponent } from 'app/components/ics-modal/ics-modal.component';
import { IcsDropdownComponent } from 'app/components/ics-dropdown/ics-dropdown.component';

@Component({
    selector: 'funds-transfer',
    templateUrl: './funds-transfer.component.html',
    styleUrls: ['./funds-transfer.component.scss']
})
export class FundsTransferComponent implements OnInit {
 

  profileForm = new FormGroup({
    TransferName: new FormControl(''),
    accountNumber: new FormControl(''),
    accountTitle: new FormControl(''),
    nickName: new FormControl('')
  });

  TransferData: any[] = [
    { Id: null, TransferName: 'Accont Name' },
    { Id: 1, TransferName: 'Fatima' },
    { Id: 2, TransferName: ' Ahmad Ali' },
    { Id: 3, TransferName: 'Nasir Khan ' },

  ];
    ngOnInit() {
      
        
    }
    onDropdownChange() {
      console.log('Selected bank:', this.profileForm.value.TransferName);
    }
  

}



