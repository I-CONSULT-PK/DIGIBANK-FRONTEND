// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { BankStatementComponent } from './bank-statement.component';
import { ComponentsModule } from 'app/components/components.module';
import { AccountSectionModule } from 'app/components/account-section/account-section.module';
@NgModule({
    imports: [
        ComponentsModule,
        // -----------------
        AccountSectionModule
    ],
    declarations: [
        BankStatementComponent,
    ],
    exports: [
        BankStatementComponent,
    ]
})
export class BankStatementModule {

}
