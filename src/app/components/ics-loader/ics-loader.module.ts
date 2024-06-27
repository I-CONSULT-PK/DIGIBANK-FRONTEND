// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { IcsLoaderComponent } from './ics-loader.component';
import { LoaderService } from 'app/@core/helper/loader.service';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        IcsLoaderComponent,
    ],
    exports: [
        IcsLoaderComponent,
    ],
    providers: [LoaderService]
})
export class IcsLoaderModule {

}
