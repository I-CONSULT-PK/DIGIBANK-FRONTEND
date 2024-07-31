import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'ics-dropdown',
    templateUrl: 'ics-dropdown.component.html',
    styleUrls: ['ics-dropdown.component.scss']
})
export class IcsDropdownComponent {

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
    valueMember: string = "";
    @Input()
    displayMember: string = "";

    @Input()
    caption: string = "";

    @Input()
    fieldName: string = "";

    @Input()
    defaultOrderbyIs: boolean = true;

    _data: any[] = [];
    get data(): any[] {
        return this._data;
    }

    @Input()
    set data(value: any[]) {
        
        this._data = value;
    }
    constructor() { }
    async ngOnInit() {
        
        this.data
    }

    async ChangeEVent() {
        
        this.ChangeCallback.emit();
    }
    changeIcon: boolean = false;
    async ChnagePos() {
        this.changeIcon = !this.changeIcon;
    }
}
