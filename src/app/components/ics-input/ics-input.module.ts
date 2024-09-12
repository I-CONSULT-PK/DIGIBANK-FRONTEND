// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { IcsInputComponent } from './ics-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        FormsModule,CommonModule,ReactiveFormsModule
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
