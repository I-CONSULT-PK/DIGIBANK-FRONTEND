// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
// import { FundsTransferComponent } from './benificiary-management.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { ComponentsModule } from 'app/components/components.module';
import { BenificiaryManagementComponent } from './benificiary-management.component';
import { IcsModalModule } from 'app/components/ics-modal/ics-modal.module';
import { SuccessPopupModule } from 'app/components/success-popup/success-popup.module';
import { IcsGridModule } from 'app/components/ics-grid/ics-grid.module';
import { IcsDropdownModule } from 'app/components/ics-dropdown/ics-dropdown.module';
import { beneficiaryManagmentService } from './benificiary-management.service';
import { IcsErrorModule } from 'app/components/ics-error/ics-error.module';

@NgModule({
    imports: [
        ReactiveFormsModule,
        ComponentsModule,
        IcsModalModule,
        SuccessPopupModule,
        IcsGridModule,
        IcsDropdownModule,IcsErrorModule
    ],
    declarations: [
        BenificiaryManagementComponent ,
    ],
    exports: [
        BenificiaryManagementComponent,
    ],
    providers:[beneficiaryManagmentService]
   

})
export class BenificiaryManagementModule {

};
