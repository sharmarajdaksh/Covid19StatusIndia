import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.services';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  data:any[];
  total;
  active;
  deaths;
  recovered;
  constructor(public serv: DataService) { }

  ngOnInit() {
    this.serv.getData().subscribe(
      (res)=>{
        this.data=res.statewise
        console.log(res.statewise)
        this.total = res.statewise[0].confirmed;
        this.deaths = res.statewise[0].deaths;
        this.active = res.statewise[0].active;
        this.recovered = res.statewise[0].recovered;
      },
      (err)=>{
        console.log(err)
      }
    );
    console.log(this.data);
    
  }

}
