import { Component, OnInit } from '@angular/core';
import { ServiceAccount } from '../models/service-account.model';
import { ServiceAccountService } from '../services/service-account.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({

  selector: 'app-service-account',

  templateUrl: './service-accounts.html',
  imports: [FormsModule,CommonModule],
  styleUrl: './service-accounts.css',

})

export class ServiceAccountsComponent implements OnInit {

  accounts: ServiceAccount[] = [];

  newAccount: ServiceAccount = {

    serviceAccountId: 0,

    customerId: 0,

    serviceType: '',

    startDate: '',

    endDate: '',

    status: 'Active'

  };

  constructor(private service: ServiceAccountService) {}

  ngOnInit() {

    this.loadAccounts();

  }

  loadAccounts() {

    this.service.getAll().subscribe(res => {

      this.accounts = res;

    });

  }

  addAccount() {

    this.service.create(this.newAccount).subscribe(() => {

      alert("Added successfully");

      this.loadAccounts();

    });

  }

  deleteAccount(id: number) {

    this.service.delete(id).subscribe(() => {

      alert("Deleted");

      this.loadAccounts();

    });

  }

}
 