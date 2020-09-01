import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.services';
import { Helpline } from '../../Models/helpline.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-helpline',
  templateUrl: './helpline.component.html',
  styleUrls: ['./helpline.component.css']
})
export class HelplineComponent implements OnInit {
  helplines:any[];
  result: any[]=[];
  flag:boolean;
  cities: any[];

  constructor(public dataserv: DataService, private fb: FormBuilder) { }
  
  searchHelplineForm: FormGroup;

  statesList= ["Andaman & Nicobar","Andhra Pradesh","Assam","Bihar","Chandigarh","Chhattisgarh","Delhi","Goa","Gujarat","Haryana","Jammu & Kashmir","Jharkhand","Karnataka","Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Odisha","Puducherry","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttar Pradesh","Uttarakhand","West Bengal"]
  servicesList=["Accomodation and Shelter Homes","Ambulance","Delivery [Vegetables, Fruits, Groceries, Medicines, etc.]","Other","Hospitals and Centers","Police","Government Helpline","Mental well being and Emotional Support","CoVID-19 Testing Lab"]
  


  ngOnInit() {
    this.dataserv.getHelplines().subscribe((res)=>{
          this.helplines=res;
          console.log(res)
        }
      ,(err)=>{
        console.log(err)
    });


    this.searchHelplineForm=this.fb.group({
      state: ['Select the state',Validators.required],
      city: ['Select the city',Validators.required],
      service: ['Select the service',Validators.required]
    });

    this.flag=false
  }

  selectCities(){
    let set1= new Set();
    for(let res of this.helplines){
      if(res.state==this.searchHelplineForm.value.state){
        set1.add(res.city);
      }
    }
    this.cities=Array.from(set1)
  }


  showHelplines(){
    this.flag=true
    this.result=[]
    if(this.searchHelplineForm.value.service=='all'){
      for(let res of this.helplines){
        if(res.state==this.searchHelplineForm.value.state  && res.city==this.searchHelplineForm.value.city){
          this.result.push(res)
        }
      }
    }
    else{
    for(let res of this.helplines){
      if(res.state==this.searchHelplineForm.value.state && res.category == this.searchHelplineForm.value.service
        && res.city==this.searchHelplineForm.value.city){
        this.result.push(res)
      }
    }
  }
    
  }

}
