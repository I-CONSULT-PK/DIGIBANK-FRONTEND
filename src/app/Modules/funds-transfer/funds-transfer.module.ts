import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'; // Import FormsModule
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { ComponentsModule } from 'app/components/components.module';
import { IcsModalModule } from 'app/components/ics-modal/ics-modal.module';
import { SuccessPopupModule } from 'app/components/success-popup/success-popup.module';
import { IcsGridModule } from 'app/components/ics-grid/ics-grid.module';
import { FundsTransferComponent } from './funds-transfer.component';
import { IcsDropdownModule } from 'app/components/ics-dropdown/ics-dropdown.module';

@NgModule({
    imports: [
        ReactiveFormsModule,
        FormsModule, // Add FormsModule here
        ComponentsModule,
        IcsModalModule,
        SuccessPopupModule,
        IcsGridModule,
        IcsDropdownModule
    ],
    declarations: [
        FundsTransferComponent,
    ],
    exports: [
        FundsTransferComponent,
    ]
})
export class FundsTransferModule { }
