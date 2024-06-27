// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { ComplaintManagementComponent } from './complaint-management.component';
import { AccountSectionModule } from 'app/components/account-section/account-section.module';
import { ComponentsModule } from 'app/components/components.module';
import { IcsModalModule } from 'app/components/ics-modal/ics-modal.module';
import { SuccessPopupModule } from 'app/components/success-popup/success-popup.module';

@NgModule({
    imports: [
        ReactiveFormsModule,
        ComponentsModule,  
        AccountSectionModule,
        IcsModalModule,
        SuccessPopupModule
    ],
    declarations: [
        ComplaintManagementComponent,
    ],
    exports: [
        ComplaintManagementComponent,
    ]
})
export class ComplaintManagementModule {

}
