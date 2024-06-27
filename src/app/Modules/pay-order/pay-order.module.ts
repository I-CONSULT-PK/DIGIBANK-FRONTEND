// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { PayOrderComponent } from './pay-order.component';
import { AccountSectionModule } from 'app/components/account-section/account-section.module';
import { ComponentsModule } from 'app/components/components.module';

@NgModule({
    imports: [
        ComponentsModule,
        AccountSectionModule,
    ],
    declarations: [
        PayOrderComponent,
    ],
    exports: [
        PayOrderComponent,
    ]
})
export class PayOrderModule {

}
