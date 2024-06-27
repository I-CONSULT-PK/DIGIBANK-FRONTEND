// import { Component } from '@angular/core';

// @Component({
//     moduleId: module.id,
//     selector: 'bank-statement',
//     templateUrl: 'bank-statement.component.html',
//     styleUrls: ['bank-statement.component.scss']
// })
// export class BankStatementComponent {

// }

import { Component } from '@angular/core';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

@Component({
  moduleId: module.id,
  selector: 'bank-statement',
  templateUrl: 'bank-statement.component.html',
  styleUrls: ['bank-statement.component.scss']
})
export class BankStatementComponent {

  generatePDF(): void {
    // Initialize jsPDF
    const doc = new jsPDF();

    // Define the columns to be included in the PDF
    const columns: string[] = ["Transaction Date", "Description", "Debit", "Credit", "Available Balance"];

    // Define the data for the table
    const data: string[][] = [
      ["20/11/23", "Opening Balance", "1,500", "99,225", "€199,225"],
      // Add more rows as needed
    ];

    // Set the position for the table
    const startY = 10;

    // Generate the table with specified columns, data, and position
    // doc.autoTable({
    //   head: [columns],
    //   body: data,
    //   startY: startY
    // });

    // Save the PDF
    doc.save('bank_statement.pdf');
  }
}

