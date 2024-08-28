import { Component, OnInit } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import { ChangeDetectorRef } from "@angular/core";

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: "/Admin/maiden",
    title: "Dashboard",
    icon: "fa fa-home",
    class: "",
  },
  {
    path: "/Admin/Benificiary",
    title: "Add Benificiary ",
    icon: "fa fa-users",
    class: "",
  },
  {
    path: "/Admin/Accounts",
    title: "Accounts",
    icon: "fa fa-user",
    class: "",
  },
  // { path: '/BankStatement', title: 'Bank Statement', icon: 'receipt_long', class: '' },
  {
    path: "/Admin/Funds",
    title: "Transactions",
    icon: "fa fa-exchange",
    class: "",
  },
  {
    path: "/login",
    title: "Logout ",
    icon: "fa fa-sign-out",
    class: "",
  },
  // { path: '/Mutual', title: 'Mutual Funds', icon: 'account_balance_wallet', class: '' },
  // { path: '/PayOrder', title: 'Pay Order', icon: 'local_atm', class: '' },
  // { path: '/Card', title: 'Card Management', icon: 'credit_card', class: '' },
  // { path: '/Cheque', title: 'Cheque Management', icon: 'currency_exchange', class: '' },
  // { path: '/Complaint', title: 'Complaint Management', icon: 'manage_history', class: '' },
  // { path: '/Donation', title: 'Donation', icon: 'manage_history', class: '' },
  // { path: '/Remittance', title: 'Remittance', icon: 'manage_history', class: '' },

  // { path: '/CurrencyConvertor', title: 'CurrencyConvertor', icon: 'manage_history', class: '' },
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"],
})
export class SidebarComponent implements OnInit {
  menuItems: RouteInfo[] = ROUTES;
  selectedMenu: RouteInfo | null = null;

  constructor(private router: Router, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    // Set default active menu item
    this.setDefaultActiveMenu();

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.highlightActiveMenu(event.urlAfterRedirects);
      }
    });
  }

  navigate(menu: RouteInfo) {
    this.selectedMenu = menu;
    this.router.navigate([menu.path]).then(() => {
      this.cdr.detectChanges();
    });
  }

  setDefaultActiveMenu() {
    // Default to Dashboard if no route matches
    const defaultRoute = this.menuItems.find(
      (item) => item.title === "Dashboard"
    );
    this.selectedMenu = defaultRoute || null;
    this.router.navigate([defaultRoute?.path || "/Admin/maiden"]);
  }

  highlightActiveMenu(currentRoute: string) {
    this.selectedMenu =
      this.menuItems.find((menuItem) =>
        this.router.isActive(menuItem.path, true)
      ) || this.selectedMenu;
  }

  isActive(menuItem: RouteInfo): boolean {
    return this.selectedMenu === menuItem;
  }

  isMobileMenu() {
    return $(window).width() <= 991;
  }
}
