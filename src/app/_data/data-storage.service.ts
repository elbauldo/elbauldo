import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { GuitarService } from '../_services/guitar.service';
import { Guitar } from '../_models/Guitar';

@Injectable({ providedIn: 'root' })

export class DataStorageService {
  constructor(private http: HttpClient, private guitarService: GuitarService) {}

    storeGuitars() {
      const guitars = this.guitarService.getGuitars();
      this.http
      .put('https://interests-b58b2.firebaseio.com//guitars.json', guitars)
      .subscribe((response) => {
        console.log(response);
      });
  }

  fetchGuitars() {
    return this.http
      .get<Guitar[]>('https://interests-b58b2.firebaseio.com//guitars.json')
      .pipe(
        map((guitars) => {
          return guitars.map((gtr) => {
            return {
              ...gtr
            };
          });
        }),
        tap((guitars) => {
          this.guitarService.setGuitars(guitars);
        })
      );
  }
}

