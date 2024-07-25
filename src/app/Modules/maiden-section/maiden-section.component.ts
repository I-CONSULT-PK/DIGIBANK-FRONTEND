import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IcsModalComponent } from 'app/components/ics-modal/ics-modal.component';
import { Router } from '@angular/router';

@Component({
  selector: 'maiden-section',
  templateUrl: './maiden-section.component.html',
  styleUrls: ['./maiden-section.component.scss']
})
export class MaidenSectionComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  async gotoLogin(): Promise<void> {
    await this.router.navigate(["/login"]);
  }
  async gotoBenificiary(): Promise<void> {
    await this.router.navigate(["/BenificiaryManagementModule"]);
  }
}
