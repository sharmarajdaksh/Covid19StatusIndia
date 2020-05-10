import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { DataService } from './data.services';
import { Data } from './data.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(public serv: DataService){
  }
  data:any[];
  show=false
  getData(){
   // this.show=true
    this.serv.getData().subscribe(
      (res)=>{
        this.data=res.statewise
        console.log(res.statewise)
      },
      (err)=>{
        console.log(err)
      }
    );

  }
  showData(){
    console.log(this.data)
    this.show=true
  }
}
