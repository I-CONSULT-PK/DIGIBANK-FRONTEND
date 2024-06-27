import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'card-management',
    templateUrl: 'card-management.component.html',
    styleUrls: ['card-management.component.scss']
})
export class CardManagementComponent implements OnInit {
    constructor() { }
    test: Date = new Date();
    ngOnInit() {
    }
}


 