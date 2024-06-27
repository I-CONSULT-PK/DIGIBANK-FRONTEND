import { CommonModule, DecimalPipe } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AgGridModule } from "ag-grid-angular";
import { IcsGridComponent } from "./ics-grid.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    imports: [
        AgGridModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        // DcsModalModule,
        // DcsCheckboxModule,
        // DcsNumericModule,
        // DcsTextboxModule,
        // DcsDropdownModule,
        // DcsDimentionModule,
        // DCSErrorModule,
    ],
    exports: [IcsGridComponent,],
    declarations: [IcsGridComponent,],
    providers: [DecimalPipe]
    //   providers: [ExcelService, SMAcadpolicyService,DecimalPipe,utdocsubtypeassignService,FIPostinggrpService,FIPostinggrpService,FICOAService,FIPostkeyaccountService]
})
export class IcsGridModule { }