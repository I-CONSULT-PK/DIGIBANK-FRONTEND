// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { IcsInputComponent } from './ics-input.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        FormsModule
    ],
    declarations: [
        IcsInputComponent,
    ],
    exports: [
        IcsInputComponent,
    ]
})
export class IcsInputModule {

}
