import { Client } from './../../models/client';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ClientService } from './../client.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.css']
})
export class ClientEditComponent implements OnInit {

  clientForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    balance: new FormControl(0, [Validators.required])
  });
 
  constructor(
      private router: Router, 
      private route: ActivatedRoute, 
      private clientService: ClientService) { }

  id: string = ""; 

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.getOneClient(params.id);
    });
  }

  getOneClient(id) {
    this.clientService.retreiveOne(id)
        .subscribe((res: Client) => {
          this.clientForm.patchValue(res);
        })
  }

  updateClient() {

    let currentClient: Client = {
      ...this.clientForm.value,
      id: this.id
    }

    this.clientService.updateClient(currentClient)
        .then(() => this.router.navigate(['/clients']))
        .catch(err => console.error(err))
  }

}
