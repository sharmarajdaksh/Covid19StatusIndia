import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.services';
import { Data } from '../data.model';
import { StateDataModel } from '../stateData.model';
import { ChartOptions, ChartType, ChartDataSets, ChartPluginsOptions } from 'chart.js';
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
  public lastUpdated;
  public states_codes=["an","ap","ar","as","br","ch","ct","dd","dl","dn","ga","gj","hp","hr","jh","jk","ka","kl","la","ld","mh",
                      "ml","mn","mp","mz","nl","or","pb","py",
                      "rj","sk","tg","tn","tr","tt","up","ut","wb"]

  public states_list=[];
  public daily_changes=[];
  public dates_List=[];
  public searchText:string;


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

  lineChartOptions:ChartOptions={
    responsive:true,
    responsiveAnimationDuration:1
  };
  lineChartPlugins=[];
  lineChartLegend = true;
  lineChartType:ChartType= 'line';
  lineChartLabels:Label[]=[];
  lineChartDataset:ChartDataSets[]=[
    {data:[],label:''}
  ]

  

  constructor(private _service: DataService) { }


  ngOnInit() {
    this._service.getData().subscribe(res => {
      this.data = res;
      this.stateWiseList = res.statewise;
      this.state = "India"
      this.active = this.stateWiseList[0].active;
      this.deaths = this.stateWiseList[0].deaths;
      this.recovered = this.stateWiseList[0].recovered;
      this.barChartData[0].data = [this.active, this.recovered, this.deaths];
      this.barChartData[0].label = this.state;
      this.lastUpdated=this.stateWiseList[0].lastupdatedtime;
      this.stateWiseList.splice(0, 1)
      for(let i=0;i<this.states_codes.length;i++){
        for(let idx=0;idx<this.stateWiseList.length;idx++){
            if(this.states_codes[i] == (this.stateWiseList[idx].statecode).toLowerCase()){
              this.states_list.push(this.stateWiseList[idx].state)
              break;
            }
          }
       }
      
    })
    

    this._service.getStateDailyData().subscribe(res=>{
      for(let index=0; index<res.length;index++){
        if(res[index]['status'] == "Confirmed"){
            this.daily_changes.push(res[index]);
        }
      }
    })
    

  }
  ngAfterInit(){
    let idx :number=0;
    let value:number=0;
  //  console.log(this.daily_changes)
  //console.log(this.states_codes);
    while(idx < this.daily_changes.length){
      for(let i=0;i<this.states_codes.length;i++){
        value = value  + (Number(this.daily_changes[idx][this.states_codes[i]]))
      }
      this.lineChartDataset[0].data.push(value);
      this.dates_List.push(this.daily_changes[idx]['date'])  
      value =0;
      idx = idx+6;
    }
    console.log(this.lineChartDataset[0].data);
    console.log(this.lineChartDataset[0].label);

    this.lineChartLabels= this.dates_List;
    this.lineChartDataset[0].label= "Day wise data of" + ' ' + this.state;
    
  }
  public showDetails(obj: StateDataModel) {

    this.lineChartDataset[0].data= [];
    this.dates_List = [];
    this.active = obj.active;
    this.deaths = obj.deaths;
    this.recovered = obj.recovered;
    this.state = obj.state;
    this.barChartData[0].data = [this.active, this.recovered, this.deaths];
    this.barChartData[0].label= this.state;
    this.lastUpdated=obj.lastupdatedtime;
    let index:number= 0;
    while(index<this.daily_changes.length ){
      this.lineChartDataset[0].data.push(this.daily_changes[index][(obj.statecode).toLowerCase()]);
      this.dates_List.push(this.daily_changes[index]['date']);
      index= index + 6;
    }
    this.lineChartDataset[0].label='Day wise data of' + ' ' + this.state;
    this.lineChartLabels= this.dates_List;

   }

}

