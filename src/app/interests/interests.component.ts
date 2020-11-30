import { Component, OnInit, Output } from '@angular/core';
import { Guitar } from '../_models/Guitar';
import { GuitarService } from '../_services/guitar.service';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css']
})
export class InterestsComponent implements OnInit {

  guitars: Guitar[];

  constructor(private gtrServ: GuitarService) { }

  ngOnInit(): void {
    this.guitars = this.gtrServ.Guitars;
  }

  getGuitars() {
    return this.guitars;
  }
}
