import { Subject } from 'rxjs';
import { Guitar } from '../_models/Guitar';


export class ObsService {

  private geetarsPrivate: Guitar[] = [
    new Guitar(null, null, 'one', 'aasas', '1980', 'sasasasa'),
    new Guitar(null, null, 'one', 'aasas', '1980', 'sasasasa')
  ];

  private bananaCount = 100;

  private gtr = new Guitar(null, null, 'one', 'aasas', '1980', 'sasasasa');

  geetars = new Subject<Guitar[]>();

  yellowSkin = new Subject<number>();

  constructor() { }

  ngOnInit(): void {
  }


  ngOnDestroy(): void {
  }

  updateGeetars() {
    this.geetarsPrivate.push(this.gtr);
    this.geetars.next(this.geetarsPrivate.slice());

    this.bananaCount++;
    this.yellowSkin.next(this.bananaCount);

    }

    getGeetars() {
        return this.geetarsPrivate;
  }

  getBananaCount() {
    return this.bananaCount;
    }

}