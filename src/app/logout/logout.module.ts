import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { IcsErrorModule } from 'app/components/ics-error/ics-error.module';
import { LogoutComponent } from './logout.component';
 

@NgModule({
  imports: [
    HttpClientModule,
    BrowserModule,
    CommonModule,
    RouterModule, FormsModule, ReactiveFormsModule,
  ],

  declarations: [
    LogoutComponent,
  ],
  exports: [
    LogoutComponent,
  ],
  providers: []
})

export class LogoutModule { }
