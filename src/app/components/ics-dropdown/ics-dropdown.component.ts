import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ics-dropdown',
  templateUrl: './ics-dropdown.component.html',
  styleUrls: ['./ics-dropdown.component.scss']
})
export class IcsDropdownComponent {
  @Input() caption: string = '';
  @Input() value: any;
  @Input() placeholder: any = '';
  @Input() valueMember: string = '';
  @Input() displayMember: string = '';
  @Input() data: any[] = [];
  @Output() valueChange: EventEmitter<any> = new EventEmitter<any>();
  @Output() selectionChange: EventEmitter<any> = new EventEmitter<any>();

  changeIcon: boolean = false;

  ChangeEVent() {
    this.selectionChange.emit(this.value);
  }

  ChnagePos() {
    this.changeIcon = !this.changeIcon;
  }
}
