import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Guitar } from '../_models/Guitar';
import { GuitarStyle } from '../_models/guitar-style';
import { Manufacturer } from '../_models/manufacturer';

@Injectable({
  providedIn: 'root'
})
export class GuitarService {

  guitarsChanged = new Subject<Guitar[]>();

  public Manufacturers: Manufacturer[] = [
    new Manufacturer('gibson', 'USA', null),
    new Manufacturer('fender', 'USA', null),
    new Manufacturer('squier', 'ASIA', 'fender'),
    new Manufacturer('epiphone', 'CHINA', 'gibson'),
    new Manufacturer('ibanez', 'JAPAN', null)
  ];

  public Guitars: Guitar[];

  staticGuitars() {
    return  [
      new Guitar(this.Manufacturers[3], GuitarStyle.Styles[1], 'Riviera P93', 'ES1919191', '2019', 'assets/epi.png'),
      new Guitar(this.Manufacturers[3], GuitarStyle.Styles[1], 'Sheraton Pro II', 'ES100091', '2010', 'assets/epi.png'),
      new Guitar(this.Manufacturers[1], GuitarStyle.Styles[1], 's500', 'GL8987', '2015', 'assets/s500.jpg'  )
    ];
  }

  constructor() { }

  getGuitars() {
    console.log(this.Guitars);
    return this.Guitars.slice();
  }

  getGuitar(index: number) {
    return this.Guitars[index];
  }


  addGuitar(Guitar: Guitar) {
    this.Guitars.push(Guitar);
    this.guitarsChanged.next(this.Guitars.slice());
  }

  updateGuitar(index: number, newGuitar: Guitar) {
    this.Guitars[index] = newGuitar;
    this.guitarsChanged.next(this.Guitars.slice());
  }

  deleteGuitar(index: number) {
    this.Guitars.splice(index, 1);
    this.guitarsChanged.next(this.Guitars.slice());
  }

  setGuitars(guitars: Guitar[]) {
        console.log(' guitars from firebase');
        this.Guitars = guitars;
        this.guitarsChanged.next(this.Guitars.slice());
  }
}
