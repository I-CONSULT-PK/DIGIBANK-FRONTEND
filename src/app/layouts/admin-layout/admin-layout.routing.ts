import { Routes } from "@angular/router";

import { DashboardComponent } from "../../dashboard/dashboard.component";
import { UserProfileComponent } from "../../user-profile/user-profile.component";
// import { TableListComponent } from '../../table-list/table-list.component';
// import { TypographyComponent } from '../../typography/typography.component';
// import { IconsComponent } from '../../icons/icons.component';
// import { MapsComponent } from '../../maps/maps.component';
// import { NotificationsComponent } from '../../notifications/notifications.component';
// import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { signupComponent } from "../../signup/signup.component";
import { loginComponent } from "../../login/login.component";
import { BenificiaryManagementComponent } from "app/Modules/benificiary-management/benificiary-management.component";
import { AccountManagementComponent } from "app/Modules/account-management/account-management.component";
import { CardManagementComponent } from "app/Modules/card-management/card-management.component";
import { FundsTransferComponent } from "app/Modules/funds-transfer/funds-transfer.component";
import { MutualFundsComponent } from "app/Modules/mutual-funds/mutual-funds.component";
import { BankStatementComponent } from "app/Modules/bank-statement/bank-statement.component";
import { PayOrderComponent } from "app/Modules/pay-order/pay-order.component";
import { CheaqeManagementComponent } from "app/Modules/cheaqe-management/cheaqe-management.component";
import { ComplaintManagementComponent } from "app/Modules/complaint-management/complaint-management.component";
import { MaidenSectionComponent } from "app/Modules/maiden-section/maiden-section.component";
import { ForgotPasswordComponent } from "../../forgot-password/forgot-password.component";
import { LogoutComponent } from "app/logout/logout.component";
import { DonationsComponent } from "app/Modules/donations/donations.component";
import { AddChildAccountComponent } from "app/add-child-account/add-child-account.component";
import { RemittanceComponent } from "app/Modules/remittance/remittance.component";


export const AdminLayoutRoutes: Routes = [
  {
    path: "",
    children: [
      { path: "maiden", component: MaidenSectionComponent },
      { path: "dashboard", component: DashboardComponent },
      { path: "user-profile", component: UserProfileComponent },
      { path: "Benificiary", component: BenificiaryManagementComponent },
      { path: "Accounts", component: AccountManagementComponent },
      { path: "Card", component: CardManagementComponent },
      { path: "BankStatement", component: BankStatementComponent },
      { path: "Card", component: CardManagementComponent },
      { path: "signup", component: signupComponent },
      { path: "login", component: loginComponent },
      { path: "Funds", component: FundsTransferComponent },
      { path: "PayOrder", component: PayOrderComponent },
      { path: "Cheque", component: CheaqeManagementComponent },
      { path: "AddChildAccount", component: AddChildAccountComponent },
      {path: "Remittance", component: RemittanceComponent },
      // { path: 'upgrade', component: UpgradeComponent },
      { path: "Mutual", component: MutualFundsComponent },
      { path: "Complaint", component: ComplaintManagementComponent },
      { path: "Donation", component: DonationsComponent },
      { path: "Forget", component: ForgotPasswordComponent },
      { path: "Logout", component: LogoutComponent },
    ],
  },
];
