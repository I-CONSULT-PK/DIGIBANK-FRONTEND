import { Component, OnInit } from "@angular/core";

@Component({
  selector: "account-management",
  templateUrl: "account-management.component.html",
  styleUrls: ["account-management.component.scss"],
})
export class AccountManagementComponent implements OnInit {
  isPopupVisible: boolean = false;

  showPopup() {
    this.isPopupVisible = true;
  }

  closePopup() {
    this.isPopupVisible = false;
  }
  constructor() {}
  test: Date = new Date();
  ngOnInit() {}
}
