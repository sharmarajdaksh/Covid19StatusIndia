import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { Ng2GoogleChartsModule, GoogleChartsSettings } from 'ng2-google-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import {MatToolbarModule, MatButtonModule, MatExpansionModule, MatInputModule, MatCardModule, MatSelectModule, MatProgressSpinnerModule} from '@angular/material';
import { HomeComponent } from './home/home.component';
import { BoardComponent } from './home/board/board.component';
import { HelplineComponent } from './components/helpline/helpline.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { DistrictDetailsComponent } from './components/district-details/district-details.component';
import { CountryDetailsComponent } from './components/country-details/country-details.component';
import { ChartsModule } from 'ng2-charts';
import { FilterStatePipe } from './Pipes/filter-state.pipe'
import { MedicalTestComponent } from './components/medical-test/medical-test.component'
import { MatCarouselModule} from '@ngmodule/material-carousel';
import { CarouselComponent } from './home/carousel/carousel.component';
import { MapComponent } from './components/map/map.component'


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    BoardComponent,
    HelplineComponent,
    DistrictDetailsComponent,
    CountryDetailsComponent,
    MedicalTestComponent,
    CarouselComponent,
    FilterStatePipe,
    MapComponent
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
    Ng2GoogleChartsModule,
    MatCardModule,
    MatSelectModule,
    MatCarouselModule,
    FormsModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
