import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [PageNotFoundComponent, NavbarComponent],
  imports: [
    CommonModule
  ]
})
export class PartialsModule { }
