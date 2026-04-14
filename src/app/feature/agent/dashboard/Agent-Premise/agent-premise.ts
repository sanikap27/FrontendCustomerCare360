import { Component, OnInit } from '@angular/core';

import { Premise } from '../Models/premise.model';

import { AgentPremiseService } from '../Services/agent-premise.service';
import { CommonModule } from '@angular/common';

@Component({

  selector: 'app-agent-premise',

  templateUrl: './agent-premise.html',

  styleUrls: ['./agent-premise.css'],
  imports:[CommonModule]

})

export class AgentPremiseComponent implements OnInit {

  premises: Premise[] = [];

  constructor(private service: AgentPremiseService) {}

  ngOnInit() {

    this.getPremises();

  }

  getPremises() {

    this.service.getPremises().subscribe({

      next: (res) => this.premises = res,

      error: (err) => console.error(err)

    });

  }

}
 