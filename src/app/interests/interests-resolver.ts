import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';

import { Guitar } from '../_models/Guitar';
import { GuitarService } from '../_services/guitar.service';

@Injectable({ providedIn: 'root' })
export class InterestsResolverService implements Resolve<Guitar[]> {
  constructor(
    private guitarService: GuitarService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const guitars = this.guitarService.getGuitars();

    if (guitars.length === 0) {
      return guitars; // reolve from database here
    } else {
      return guitars;
    }
  }
}
