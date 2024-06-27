// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { IcsErrorComponent } from './ics-error.component';
import { ModalModule } from "ngb-modal";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        ModalModule, CommonModule, FormsModule
    ],
    declarations: [
        IcsErrorComponent,
    ],
    exports: [
        IcsErrorComponent,
    ]
})
export class IcsErrorModule {

}
