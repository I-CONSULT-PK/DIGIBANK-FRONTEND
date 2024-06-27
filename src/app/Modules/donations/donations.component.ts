import { Component } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
    moduleId: module.id,
    selector: 'donations',
    templateUrl: 'donations.component.html',
    styleUrls: ['donations.component.scss']
})
export class DonationsComponent {
    totalWealth: number = 0;

    calculateZakat() {
      if (isNaN(this.totalWealth) || this.totalWealth <= 0) {
        Swal.fire({
          icon: 'error',
          title: 'Invalid Amount',
          text: 'Please enter a valid amount for total wealth.'
        });
        return;
      }
  
      let zakat = this.totalWealth * 0.025; // Zakat rate is 2.5%
      if (this.totalWealth < 30000) {
        zakat = 0;
      }
  
      Swal.fire({
        icon: 'success',
        title: 'Zakat Calculation',
        html: `Your Zakat Amount: $${zakat.toFixed(2)}`
      });
    }
}
