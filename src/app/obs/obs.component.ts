import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Guitar } from '../_models/Guitar';
import { ObsService } from './obs.service';

@Component({
  selector: 'app-obs',
  templateUrl: './obs.component.html',
  styleUrls: ['./obs.component.css']
})
export class ObsComponent implements OnInit, OnDestroy {

  geetars: Guitar[];

  bananaCounter: number;

  private igChangedGtrs: Subscription;
  private iYellowSkin: Subscription;

  constructor(private obsservice: ObsService) { }

  ngOnInit(): void {
    this.geetars = this.obsservice.getGeetars();
    this.bananaCounter = this.obsservice.getBananaCount();

    this.iYellowSkin = this.obsservice.yellowSkin
      .subscribe((bcount: number) => {
        this.bananaCounter = bcount;
      });

    this.igChangedGtrs = this.obsservice.geetars
      .subscribe( (gtrs: Guitar[]) => {
        this.geetars = gtrs;
      }
    );
  }

  ngOnDestroy(): void {
    this.igChangedGtrs.unsubscribe();
  }

  updateGeetars() {
    this.obsservice.updateGeetars();
  }
}
