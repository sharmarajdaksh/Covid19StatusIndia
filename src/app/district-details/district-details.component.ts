import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.services';
import { DistrictData } from '../districtData.model';

@Component({
  selector: 'app-district-details',
  templateUrl: './district-details.component.html',
  styleUrls: ['./district-details.component.css']
})
export class DistrictDetailsComponent implements OnInit {

  state_cases:any[]=[];
  districts:any[]=[];
  result: DistrictData[]=[];

  statename:string;
  total:string;
  active:string;
  recovered:string;
  deaths: string;

  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.dataService.getData().subscribe((res)=>{
        this.state_cases=res.statewise
        this.statename="India";
        this.total=res.statewise[0].confirmed;
        this.deaths = res.statewise[0].deaths;
        this.active = res.statewise[0].active;
        this.recovered = res.statewise[0].recovered;
        this.state_cases.splice(0,1);
      },
      (err)=>{
        console.log(err);
      }
    );

    this.dataService.getDistricts().subscribe((res)=>{
        this.districts=res;
      },
      (err)=> {console.log(err)}
    );
  }
  
  showDistricts(state: string){
    this.result=[]
    let obj=this.districts[state]["districtData"]
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        let val:DistrictData = {name: key,data:obj[key]};
        this.result.push(val)
      }
    
  }
}

showState(state: string){
  for(let i of this.state_cases){
    if(i.state==state){
      this.statename=state;
        this.total=i.confirmed;
        this.deaths = i.deaths;
        this.active = i.active;
        this.recovered = i.recovered;
    }
  }
}


}
