import { Component, OnInit, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';
import { PremiseService } from '../services/premise.service';

@Component({
  selector: 'app-premise',
  standalone: true,
  imports: [FormsModule, NgClass],
  templateUrl: './premise.html',
  styleUrl: './premise.css',
})
export class PremisesComponent implements OnInit {
  // Use modern inject function
  private readonly service = inject(PremiseService);

  // Use Signals for data and state
  premises = signal<any[]>([]);
  
  // Signal for the creation form
  newPremise = signal({
    address: '',
    region: '',
    meterId: '',
    status: 'Energized'
  });

  ngOnInit(): void {
    this.loadPremises();
  }

  loadPremises(): void {
    this.service.getPremises().subscribe({
      next: (res) => this.premises.set(res),
      error: (err) => console.error('Failed to load premises', err)
    });
  }

  // Helper to update specific fields in the signal object
  updateFormField(field: string, value: any): void {
    this.newPremise.update(prev => ({ ...prev, [field]: value }));
  }

  addPremise(): void {
    const data = this.newPremise();
    if (!data.address || !data.meterId) {
      alert('Please fill in required fields ❗');
      return;
    }

    this.service.addPremise(data).subscribe({
      next: () => {
        alert('Premise added successfully! ✅');
        this.loadPremises();
        // Reset the form signal
        this.newPremise.set({
          address: '',
          region: '',
          meterId: '',
          status: 'Energized'
        });
      },
      error: (err) => console.error('Add failed', err)
    });
  }

  deletePremise(id: number): void {
    if (!confirm('Are you sure you want to delete this premise?')) return;

    this.service.deletePremise(id).subscribe({
      next: () => {
        alert('Premise deleted successfully! 🗑️');
        // Efficiently update UI without a full reload
        this.premises.update(prev => prev.filter(p => p.premiseId !== id));
      },
      error: (err) => console.error('Delete failed', err)
    });
  }
}