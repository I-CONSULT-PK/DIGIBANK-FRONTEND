// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { AccountSectionComponent } from './account-section.component';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        AccountSectionComponent,
    ],
    exports: [
        AccountSectionComponent,
    ]
})
export class AccountSectionModule {

}
