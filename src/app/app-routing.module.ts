import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { HelplineComponent } from './helpline/helpline.component';
import { DistrictDetailsComponent } from './district-details/district-details.component';
import { CountryDetailsComponent } from './country-details/country-details.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path: 'home',component:HomeComponent},
  {path: 'helpline',component: HelplineComponent},
  { path: 'district', component: DistrictDetailsComponent },
  { path: 'country', component: CountryDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
