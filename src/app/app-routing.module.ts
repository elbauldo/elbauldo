import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InterestDetailComponent } from './interests/interest-detail/interest-detail.component';
import { InterestEditComponent } from './interests/interest-edit/interest-edit.component';
import { InterestsResolverService } from './interests/interests-resolver';
import { InterestsComponent } from './interests/interests.component';
import { ObsComponent } from './obs/obs.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'obs', component: ObsComponent},
  {
    path: 'interests', component: InterestsComponent,
    children: [
      {
        path: ':id',
        component: InterestDetailComponent,
        resolve: [InterestsResolverService]
      },
      {
        path: ':id/edit',
        component: InterestEditComponent,
        resolve: [InterestsResolverService]
      },
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }