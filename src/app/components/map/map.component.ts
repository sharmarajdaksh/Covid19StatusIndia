import { Component, OnInit } from '@angular/core';
import { GoogleChartInterface } from 'ng2-google-charts';
import { DataService } from '../../data.services';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  states_data = [['State','COVID-Confirmed Cases']];
  response: any[]=[];
  mapReady=false;
  constructor(public serv: DataService){}

  ngOnInit(){
    this.serv.getData().subscribe((res)=>{
        this.response=res.statewise;
        this.response.splice(0,1);

        for(let state of this.response){
          let temp = [state.state,Number(state.confirmed)];
          if( state.state=="Odisha"){
            temp = ['IN-OR',Number(state.confirmed)];
          }
          this.states_data.push(temp);
        }
        this.mapReady=true
      },
      (err)=>{
        console.log(err)
      }
    );
  }
  
  public geoChart: GoogleChartInterface = {
    chartType: 'GeoChart',
    dataTable: this.states_data,
    options: {
      region: 'IN', // INDIA
      colorAxis: {colors: ['#76F559', '#2B8630', '#D0FB21','#FE9200','#FE2600','#BD2121']},
      resolution: 'provinces',
      backgroundColor: '#00000',
      datalessRegionColor: '#00000',
      defaultColor: '#00000',
      'height': 600,
    }
  };
}
