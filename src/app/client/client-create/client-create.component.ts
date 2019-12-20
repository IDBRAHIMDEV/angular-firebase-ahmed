import { ClientService } from './../client.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.css']
})
export class ClientCreateComponent implements OnInit {

  clientForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    balance: new FormControl(0, [Validators.required])
  });

  constructor(private clientService: ClientService, private router: Router) { }

  ngOnInit() {
  }

  saveClient() {
    this.clientService.persistClient(this.clientForm.value)
        .then((res) => this.router.navigate(['/clients']))
        .catch((err) => console.log(err))
  }

}
