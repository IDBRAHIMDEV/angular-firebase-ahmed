import { ResumePipe } from './../pipes/resume.pipe';

import { RouterModule } from '@angular/router';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientCreateComponent } from './client-create/client-create.component';
import { ClientEditComponent } from './client-edit/client-edit.component';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ResumePipe, ClientListComponent, ClientCreateComponent, ClientEditComponent],
  imports: [
    CommonModule,
    AngularFireModule,
    AngularFirestoreModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [ClientListComponent]
})
export class ClientModule { }
