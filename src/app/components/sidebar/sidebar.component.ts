import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  // { path: '/maiden', title: 'Home', icon: 'home', class: '' },
  { path: '/Admin/maiden', title: 'Dashboard', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/55831f7909cc1213c774fa6bbe9444e4bd7c3b5bdb8f0291c03d5b704ac2db4c?', class: '' },
  // { path: '/BankStatement', title: 'Bank Statement', icon: 'receipt_long', class: '' },
  { path: '/Admin/Benificiary', title: 'Add Benificiary ', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/efd9de894b80c8cf24c31ef597db9a75e978543f6e37ba6562ca65cc4bec1520?', class: '' }, 
  { path: '/Admin/Accounts', title: 'Accounts', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ce8af22fe078839128765c774cf001f56d2138998a6759ace921a094cc2c0b19?', class: '' },

  { path: '/Admin/Funds', title: 'Transactions', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/764429aa1ca8e9e56824a19865b080b51b279de229674e8a6712937cc65e7bf1?', class: '' },

  { path: '/Admin/Login', title: 'Logout ', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/2a197809347bfb9e7280349b9933af1f13033b08d965df9ffde26a93a4ce3b9b?', class: '' }, 

  // { path: '/PayOrder', title: 'Pay Order', icon: 'local_atm', class: '' },
  // { path: '/Card', title: 'Card Management', icon: 'credit_card', class: '' },
  // { path: '/Cheque', title: 'Cheque Management', icon: 'currency_exchange', class: '' },
  // { path: '/Complaint', title: 'Complaint Management', icon: 'manage_history', class: '' },
  // { path: '/Donation', title: 'Donation', icon: 'manage_history', class: '' },
  // { path: '/Remittance', title: 'Remittance', icon: 'manage_history', class: '' },
 
  // { path: '/CurrencyConvertor', title: 'CurrencyConvertor', icon: 'manage_history', class: '' },
 
 
];
 
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  menuItems: RouteInfo[];
  selectedMenu: RouteInfo;
 
  constructor(private router: Router) { }
 
  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.selectedMenu = this.menuItems[0]
 
  }
  navigate(menu: RouteInfo) {
    this.selectedMenu = menu;
    this.router.navigate([menu.path]);
  }
 
  isMobileMenu() {
    return $(window).width() <= 991;
  }
}