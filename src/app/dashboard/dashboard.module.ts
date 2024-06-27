import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { DashboardComponent } from './dashboard.component';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from 'app/components/components.module';
import { MatTooltipModule } from '@angular/material/tooltip';
const routes: Routes = [
 { path: '', component: DashboardComponent }
]; 
@NgModule({
 imports: [RouterModule.forChild(routes)],
 exports: [RouterModule]
}) 
export class UserDashboardRoutingModule { }


