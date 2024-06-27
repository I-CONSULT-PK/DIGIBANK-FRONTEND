// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { IcsModalComponent } from './ics-modal.component';
import { ModalModule } from 'ngb-modal';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        ModalModule,
        CommonModule
    ],
    declarations: [
        IcsModalComponent,
    ],
    exports: [
        IcsModalComponent,
    ]
})
export class IcsModalModule {

}
