// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { BenificiaryManagementListingComponent } from './benificiary-management-listing.component';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';
import { ComponentsModule } from 'app/components/components.module';

@NgModule({
    imports: [
        CommonModule,
        ComponentsModule
    ],
    declarations: [
        BenificiaryManagementListingComponent,
    ],
    exports: [
        BenificiaryManagementListingComponent,
    ]
})
export class BenificiaryManagementListingModule {

}
