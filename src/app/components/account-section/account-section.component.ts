import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'accounts-section',
    templateUrl: 'account-section.component.html',
    styleUrls: ['account-section.component.scss']
})
export class AccountSectionComponent implements OnInit {
    @Input() Selected: any = false;

    constructor() { }
    async ngOnInit() {
        this.Selected
    }

}
