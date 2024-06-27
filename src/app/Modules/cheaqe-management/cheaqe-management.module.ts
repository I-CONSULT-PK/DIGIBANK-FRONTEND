// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { CheaqeManagementComponent } from './cheaqe-management.component';
import { AccountSectionModule } from 'app/components/account-section/account-section.module';
import { ComponentsModule } from 'app/components/components.module';

@NgModule({
    imports: [
        ComponentsModule,
        AccountSectionModule
    ],
    declarations: [
        CheaqeManagementComponent,
    ],
    exports: [
        CheaqeManagementComponent,
    ]
})
export class CheaqeManagementModule {

}
