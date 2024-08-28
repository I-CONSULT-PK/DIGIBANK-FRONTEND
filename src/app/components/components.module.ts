import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { IcsDropdownModule } from './ics-dropdown/ics-dropdown.module';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { IcsInputModule } from './ics-input/ics-input.module';
import { IcsLoaderModule } from './ics-loader/ics-loader.module';
import { HeaderComponent } from './header/header.component';
import { IcsGridModule } from './ics-grid/ics-grid.module';
import { IcsGridComponent } from './ics-grid/ics-grid.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    IcsDropdownModule,
    IcsInputModule,
    IcsLoaderModule,
    IcsGridModule
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    HeaderComponent

  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    MatIconModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    IcsDropdownModule,
    IcsInputModule,
    IcsLoaderModule,
    HeaderComponent,
    IcsGridComponent

  ]
})
export class ComponentsModule { }
