import { NgModule } from "@angular/core";
import { AccountSectionModule } from "app/components/account-section/account-section.module";
import { ComponentsModule } from "app/components/components.module";
import { MaidenSectionComponent } from "./maiden-section.component";
import { CommonModule } from "@angular/common";


@NgModule({
    imports: [
        ComponentsModule,
        AccountSectionModule,
        CommonModule
    ],
    declarations: [
        MaidenSectionComponent,
    ],
    exports: [
        MaidenSectionComponent,
    ]
})
export class MaidenSectionModule {

}
