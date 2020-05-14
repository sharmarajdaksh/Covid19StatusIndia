import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.services';
import { Data } from '../data.model';
import { StateDataModel } from '../stateData.model';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css']
})
export class CountryDetailsComponent implements OnInit {

  public state;
  public data: Data;
  public stateWiseList: any[];
  public active;
  public recovered;
  public deaths;
  public lastUpdated




  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = ['Active', 'Recovered', 'Deaths'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    { barPercentage: 1,
      barThickness:75,
      data: [], label: '',
      borderColor:['#ffcc00','#70b74c','red'],
      borderWidth:1,
      hoverBackgroundColor:'black',
      backgroundColor: ['#FFFF99', '#c1e0b2', '#ffb7b4'] }
  ];

  constructor(private _service: DataService) { }


  ngOnInit() {
    this._service.getData().subscribe(res => {
      this.data = res;
      console.log(res.statewise[0]);
      this.stateWiseList = res.statewise;
      this.state = "India"
      this.active = this.stateWiseList[0].active;
      this.deaths = this.stateWiseList[0].deaths;
      this.recovered = this.stateWiseList[0].recovered;
      this.barChartData[0].data = [this.active, this.recovered, this.deaths];
      this.barChartData[0].label = this.state;
      this.lastUpdated=this.stateWiseList[0].lastupdatedtime;
      this.stateWiseList.splice(0, 1)
      console.log(this.barChartData[0].data);
     // console.log(res.statewise)

    })
  }
  public showDetails(obj: StateDataModel) {
    //console.log(obj);
    this.active = obj.active;
    this.deaths = obj.deaths;
    this.recovered = obj.recovered;
    this.state = obj.state;
    this.barChartData[0].data = [this.active, this.recovered, this.deaths];
    //console.log(this.barChartData[0].data);
    this.barChartData[0].label= this.state;
    this.lastUpdated=obj.lastupdatedtime;


  }

}
