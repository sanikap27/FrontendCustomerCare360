import { Component, OnInit, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { CustomerReportService } from '../services/customer-report.service';

@Component({
  selector: 'app-customer-reports',
  standalone: true,
  imports: [FormsModule, DatePipe], // Only import what is necessary
  templateUrl: './CustomerReports.html',
  styleUrls: ['./CustomerReports.css']
})
export class CustomerReportsComponent implements OnInit {
  // Inject service modernly
  private readonly service = inject(CustomerReportService);

  // Table data signal
  reports = signal<any[]>([]);

  // Form state signal
  newReport = signal({
    scope: '',
    metrics: '',
    generatedDate: new Date().toISOString().split('T')[0] // Default to today's date string
  });

  ngOnInit(): void {
    this.loadReports();
  }

  loadReports(): void {
    this.service.getReports().subscribe({
      next: (res) => this.reports.set(res),
      error: (err) => console.error('Failed to load reports', err)
    });
  }

  // Update specific fields within the signal object
  updateFormField(field: string, value: any): void {
    this.newReport.update(prev => ({ ...prev, [field]: value }));
  }

  addReport(): void {
    const reportData = this.newReport();
    
    if (!reportData.scope || reportData.metrics) {
        // Basic validation check
    }

    this.service.createReport(reportData).subscribe({
      next: () => {
        alert('Report created successfully! ✅');
        // Reset form signal
        this.newReport.set({ scope: '', metrics: '', generatedDate: new Date().toISOString().split('T')[0] });
        this.loadReports();
      },
      error: (err) => alert('Error creating report ❌')
    });
  }

  deleteReport(id: number): void {
    if (!confirm('Are you sure you want to delete this report?')) return;

    this.service.deleteReport(id).subscribe({
      next: () => {
        alert('Report deleted successfully! 🗑️');
        // Efficiently remove item from the signal array
        this.reports.update(prev => prev.filter(r => r.customerReportId !== id));
      },
      error: (err) => console.error('Delete failed', err)
    });
  }
}