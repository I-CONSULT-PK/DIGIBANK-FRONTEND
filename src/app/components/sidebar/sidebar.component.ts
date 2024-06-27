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
  { path: '/maiden', title: 'Home', icon: 'home', class: '' },
  { path: '/dashboard', title: 'Dashboard', icon: 'dashboard', class: '' },
  { path: '/Accounts', title: 'Accounts', icon: 'settings_input_component', class: '' },
  { path: '/BankStatement', title: 'Bank Statement', icon: 'receipt_long', class: '' },
  { path: '/Benificiary', title: 'Benificiary Management', icon: 'manage_accounts', class: '' },
  { path: '/Funds', title: 'Funds Transfer', icon: 'transfer_within_a_station', class: '' },
  { path: '/Mutual', title: 'Mutual Funds', icon: 'account_balance_wallet', class: '' },
  { path: '/PayOrder', title: 'Pay Order', icon: 'local_atm', class: '' },
  { path: '/Card', title: 'Card Management', icon: 'credit_card', class: '' },
  { path: '/Cheque', title: 'Cheque Management', icon: 'currency_exchange', class: '' },
  { path: '/Complaint', title: 'Complaint Management', icon: 'manage_history', class: '' },
  { path: '/Donation', title: 'Donation', icon: 'manage_history', class: '' },
  { path: '/Remittance', title: 'Remittance', icon: 'manage_history', class: '' },
  
  // { path: '/CurrencyConvertor', title: 'CurrencyConvertor', icon: 'manage_history', class: '' },


];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  selectedMenu: any;

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.selectedMenu = this.menuItems[0]

  }
  async Navigate(menu: any) {
    this.selectedMenu = menu
    this.router.navigate(['Admin' + menu.path]);
  }
  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  };
}
