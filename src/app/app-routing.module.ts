import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { HelplineComponent } from './components/helpline/helpline.component';
import { DistrictDetailsComponent } from './components/district-details/district-details.component';
import { CountryDetailsComponent } from './components/country-details/country-details.component';
import { MedicalTestComponent } from './components/medical-test/medical-test.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path: 'home',component:HomeComponent},
  {path: 'helpline',component: HelplineComponent},
  { path: 'district', component: DistrictDetailsComponent },
  {path: 'test',component: MedicalTestComponent},
  { path: 'country', component: CountryDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
