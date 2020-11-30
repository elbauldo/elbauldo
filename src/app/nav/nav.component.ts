import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { ToastrService } from 'ngx-toastr';
import { DataStorageService } from '../_data/data-storage.service';
import { Guitar } from '../_models/Guitar';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent implements OnInit {

  isLoading = false;

  constructor(private router: Router, private toastr: ToastrService, public authService: AuthService, private dsStorageSrv: DataStorageService) { }

  ngOnInit(): void {
  }

  login() {
    this.authService.loginWithRedirect().subscribe(response => {
      this.router.navigateByUrl('/members');
    });
  }

  logout() {
    console.log(document.location.origin.toString());
    this.authService.logout({returnTo: document.location.origin});
  }

  toastTime()  {
      this.toastr.error('you shall not pass!');
  }

  persist() {
    this.dsStorageSrv.storeGuitars();
  }

  hydrate() {
    this.isLoading = true;
    this.dsStorageSrv.fetchGuitars().subscribe(resData => {
      this.isLoading = false;
    },
      error => {
        this.isLoading = false;
    });
  }
}
