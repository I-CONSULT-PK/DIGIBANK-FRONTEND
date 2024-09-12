import { Component } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
      styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

userName : string;
  async ngOnInit() {
    const userDetails = localStorage.getItem('userDetails');
    const userData = JSON.parse(userDetails);
    this.userName = userData.firstName + ' ' + userData.lastName
    console.log(this.userName,"user name");
  }
}
