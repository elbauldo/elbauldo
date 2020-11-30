import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Guitar } from 'src/app/_models/Guitar';
import { GuitarService } from 'src/app/_services/guitar.service';

@Component({
  selector: 'app-interest-list',
  templateUrl: './interest-list.component.html',
  styleUrls: ['./interest-list.component.css']
})
export class InterestListComponent implements OnInit {

  guitars: Guitar[];

  constructor(private router: Router, private route: ActivatedRoute, private gtrServ: GuitarService) { }

  ngOnInit(): void {
    console.log('interest-list-cpmponent.ts');
    this.guitars = this.gtrServ.getGuitars();
    }

  onOpenItem(id: number) {
    alert(this.guitars[id].name);
  }
}
