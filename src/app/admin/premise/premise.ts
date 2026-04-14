import { Component, OnInit } from '@angular/core';
import { PremiseService } from '../services/premise.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-premise',
  imports: [FormsModule,CommonModule],
  templateUrl: './premise.html',
  styleUrl: './premise.css',
})
export class PremisesComponent implements OnInit {
 premises: any[] = [];
 newPremise = {
   address: '',
   region: '',
   meterId: '',
   status: 'Energized'
 };
 constructor(private service: PremiseService) {}
 ngOnInit() {
   this.loadPremises();
 }
 loadPremises() {
   this.service.getPremises().subscribe(res => {
     this.premises = res;
   });
 }
 addPremise() {
   this.service.addPremise(this.newPremise).subscribe(() => {
    alert('Premise added successfully!');
      
     this.loadPremises();
     this.newPremise = {
       address: '',
       region: '',
       meterId: '',
       status: 'Energized'
     };
   });
 }
 deletePremise(id: number) {
   this.service.deletePremise(id).subscribe(() => {
    alert('Premise deleted successfully!');
     this.loadPremises();
   });
 }
}
