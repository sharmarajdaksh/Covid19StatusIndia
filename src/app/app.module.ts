import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import {MatToolbarModule, MatButtonModule, MatExpansionModule, MatInputModule, MatCardModule, MatSelectModule} from '@angular/material';
import { HomeComponent } from './home/home.component';
import { BoardComponent } from './home/board/board.component';
import { HelplineComponent } from './helpline/helpline.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DistrictDetailsComponent } from './district-details/district-details.component';
import { CountryDetailsComponent } from './country-details/country-details.component';
import { ChartsModule } from 'ng2-charts';
import { MedicalTestComponent } from './medical-test/medical-test.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    BoardComponent,
    HelplineComponent,
    DistrictDetailsComponent,
    CountryDetailsComponent,
    MedicalTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatExpansionModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
  
    FormsModule,
    ReactiveFormsModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
