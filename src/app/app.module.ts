import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { InterestsComponent } from './interests/interests.component';
import { InterestListComponent } from './interests/interest-list/interest-list.component';
import { InterestDetailComponent } from './interests/interest-detail/interest-detail.component';
import { InterestEditComponent } from './interests/interest-edit/interest-edit.component';
import { GuitarService } from './_services/guitar.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SharedModule } from './_modules/shared.module';
import { AuthHttpInterceptor, AuthModule } from '@auth0/auth0-angular';
import { LoadingSpinnerComponent } from './_funkystuff/loading-spinner/loading-spinner.component';
import { ObsComponent } from './obs/obs.component';
import { ObsService } from './obs/obs.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    InterestsComponent,
    InterestListComponent,
    InterestDetailComponent,
    InterestEditComponent,
    LoadingSpinnerComponent,
    ObsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    AuthModule.forRoot({
      domain: 'dev-f5kwkiow.us.auth0.com',
      clientId: 'LKzYntJ16ZCztIMe1PAAyWW1KCcsDavJ'
    }),
  ],
  providers: [GuitarService, { provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true}, ObsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
