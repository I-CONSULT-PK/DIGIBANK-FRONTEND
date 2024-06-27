import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'ics-input',
    templateUrl: 'ics-input.component.html',
    styleUrls: ['ics-input.component.scss']
})
export class IcsInputComponent {
    @Output() ChangeCallback = new EventEmitter<void>();

    innerValue: any = "";
    @Input()
    get value(): any {
        return this.innerValue;
    }

    set value(v: any) {
        if (v !== this.innerValue) {
            this.innerValue = v;
        }
    }
    @Input()
    caption: string = "";
    @Input()
    Type: string = "text";
    @Input()
    placeholder: string = "";

    @Input()
    fieldName: string = "";
    constructor() { }
    async ngOnInit() { }

    async ChangeEVent() {
        debugger
        this.ChangeCallback.emit();
    }
}
