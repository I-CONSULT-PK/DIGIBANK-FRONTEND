import { MessageBoxComponent } from './MessageBox.component';
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { ModalModule } from "ngb-modal";
import { NgModule } from "@angular/core";

@NgModule({
    imports: [ModalModule, CommonModule, FormsModule],
    declarations: [MessageBoxComponent],
    exports: [MessageBoxComponent],
})
export class DCSMessageBoxModule { }
