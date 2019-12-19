import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientCreateComponent } from './client-create/client-create.component';
import { ClientEditComponent } from './client-edit/client-edit.component';



@NgModule({
  declarations: [ClientListComponent, ClientCreateComponent, ClientEditComponent],
  imports: [
    CommonModule
  ],
  exports: [ClientListComponent]
})
export class ClientModule { }
