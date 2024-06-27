// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { IcsDropdownComponent } from './ics-dropdown.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        IcsDropdownComponent,
    ],
    exports: [
        IcsDropdownComponent,
    ]
})
export class IcsDropdownModule {

}
