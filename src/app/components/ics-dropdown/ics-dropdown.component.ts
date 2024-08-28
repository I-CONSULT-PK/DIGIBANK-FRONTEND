import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ics-dropdown',
  templateUrl: './ics-dropdown.component.html',
  styleUrls: ['./ics-dropdown.component.scss']
})
export class IcsDropdownComponent {
  @Input() placeholder: any = '';
  @Input() innerValue: string = '';
  @Output() valueChange: EventEmitter<any> = new EventEmitter<any>();
  @Output() selectionChange: EventEmitter<any> = new EventEmitter<any>();
  @Output() ChangeCallback: EventEmitter<any> = new EventEmitter<any>();

  changeIcon: boolean = false;

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
    async ChnagePos() {
        this.changeIcon = !this.changeIcon;
    }
}
