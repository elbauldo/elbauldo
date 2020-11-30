import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Guitar } from 'src/app/_models/Guitar';
import { GuitarService } from 'src/app/_services/guitar.service';

@Component({
  selector: 'app-interest-detail',
  templateUrl: './interest-detail.component.html',
  styleUrls: ['./interest-detail.component.css']
})
export class InterestDetailComponent implements OnInit {

  guitar: Guitar;
  id: number;
  routeUrl: string;

  constructor(
        private guitarService: GuitarService,
        private route: ActivatedRoute,
        private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.guitar = this.guitarService.getGuitar(this.id);
    });
  }

  onEditGuitar() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }
}
