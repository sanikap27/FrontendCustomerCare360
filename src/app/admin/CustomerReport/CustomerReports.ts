import { Component, OnInit } from '@angular/core';

import { CustomerReportService } from '../services/customer-report.service';

import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';

@Component({

  selector: 'app-customer-reports',

  standalone: true,

  imports: [FormsModule, CommonModule],

  templateUrl: './CustomerReports.html',

  styleUrls: ['./CustomerReports.css']

})

export class CustomerReportsComponent implements OnInit {

  reports: any[] = [];

  newReport = {

    scope: '',

    metrics: '',

    generatedDate: new Date()

  };

  constructor(private service: CustomerReportService) {}

  ngOnInit() {

    this.loadReports();

  }

  loadReports() {

    this.service.getReports().subscribe(res => {

      this.reports = res;

    });

  }

  addReport() {

  console.log(this.newReport); // 👈 CHECK THIS

  this.service.createReport(this.newReport).subscribe((res: any) => {
    alert('Report created successfully!');

    this.loadReports();

  });

}
 

  deleteReport(id: number) {

    this.service.deleteReport(id).subscribe(() => {
      alert('Report deleted successfully!');

      this.reports = this.reports.filter(r => r.customerReportId !== id);

    });

  }

}
 