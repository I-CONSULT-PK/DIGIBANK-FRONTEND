import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
    moduleId: module.id,
    selector: 'mutual-funds',
    templateUrl: 'mutual-funds.component.html',
    styleUrls: ['mutual-funds.component.scss']
})
export class MutualFundsComponent implements OnInit {
constructor() { }

openFillSignPopup(): void {
    Swal.fire({
      title: 'Fill & Sign the form',
      html: `
        <form>
          <label for="name">Name:</label><br>
          <input type="text" id="name" name="name"><br>
          <label for="cellNumber">Cell Number:</label><br>
          <input type="text" id="cellNumber" name="cellNumber"><br>
          <label for="accountTitle">Account Title:</label><br>
          <input type="text" id="accountTitle" name="accountTitle"><br>
        </form>
      `,
      showCancelButton: true,
      confirmButtonText: 'Save',
      cancelButtonText: 'Cancel',
      showLoaderOnConfirm: true,
      preConfirm: () => {
        // You can retrieve the form data here and handle it accordingly
        const name = (document.getElementById('name') as HTMLInputElement).value;
        const cellNumber = (document.getElementById('cellNumber') as HTMLInputElement).value;
        const accountTitle = (document.getElementById('accountTitle') as HTMLInputElement).value;
        return { name, cellNumber, accountTitle };
      }
    }).then((result) => {
      if (result.isConfirmed) {
        // Handle the form data if the user clicks "Save"
        console.log('Form submitted:', result.value);
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        // Handle if the user clicks "Cancel" or outside the modal
        console.log('Form submission canceled');
      }
    });
  }

  ngOnInit(): void {
    document.getElementById("downloadLink").addEventListener("click", function(event) {
      event.preventDefault(); // Prevent default link behavior

      // Create a temporary anchor element
      var link = document.createElement('a');
      link.href = 'path/to/sample.pdf'; // Replace 'path/to/sample.pdf' with the actual path to your sample PDF file
      link.download = 'sample.pdf'; // Set the download attribute to specify the filename

      // Append the anchor element to the document body
      document.body.appendChild(link);

      // Trigger a click event on the anchor element
      link.click();

      // Clean up
      document.body.removeChild(link);
    });
}};
