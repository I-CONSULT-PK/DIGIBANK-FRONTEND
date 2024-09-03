import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IcsModalComponent } from 'app/components/ics-modal/ics-modal.component';
import { Router } from '@angular/router';

@Component({
  selector: 'maiden-section',
  templateUrl: './maiden-section.component.html',
  styleUrls: ['./maiden-section.component.scss']
})
export class MaidenSectionComponent implements OnInit{
  isAmounthidden=true; 
  @ViewChild('chartIframe') iframe: ElementRef;
  iframeError = false;
  iframeLoaded = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.checkIframeLoading();
  }

  async gotoLogin(): Promise<void> {
    await this.router.navigate(["/login"]);
  }
  async gotoBenificiary(): Promise<void> {
    await this.router.navigate(["/BenificiaryManagementModule"]);
  }

  toggleAmountVisibility() {
    this.isAmounthidden = !this.isAmounthidden;
  }
  onIframeLoad(): void {
    this.iframeLoaded = true;
  }
  checkIframeLoading(): void {
    const timeoutDuration = 5000;
    setTimeout(() => {
      if (!this.iframeLoaded) {
        this.iframeError = true;
      }
    }, timeoutDuration);
  }
}
