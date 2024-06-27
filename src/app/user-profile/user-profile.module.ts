import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { UserProfileComponent } from './user-profile.component';
import { BrowserModule } from '@angular/platform-browser';
import { IcsModalModule } from 'app/components/ics-modal/ics-modal.module';
import { SuccessPopupModule } from 'app/components/success-popup/success-popup.module';
import { IcsGridModule } from 'app/components/ics-grid/ics-grid.module';
import { ComponentsModule } from 'app/components/components.module';

@NgModule({
  imports: [
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    IcsModalModule,
    SuccessPopupModule,
    // IcsGridModule
    ComponentsModule,
  ],

  declarations: [
    UserProfileComponent,
  ],
  exports: [
    UserProfileComponent,
  ]
})

export class UserProfileModule { }