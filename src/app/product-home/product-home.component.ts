import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'product-home',
    templateUrl: 'product-home.component.html',
    styleUrls: ['product-home.component.scss']
})
export class ProductHomeComponent implements OnInit {
    constructor(private router: Router) { }
    ngOnInit() { }
    SignUp() {
        
        this.router.navigate(["/login"]);

    }
}
