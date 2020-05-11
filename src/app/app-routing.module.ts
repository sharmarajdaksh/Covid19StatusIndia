import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { HelplineComponent } from './helpline/helpline.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path: 'home',component:HomeComponent},
  {path: 'helpline',component: HelplineComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
