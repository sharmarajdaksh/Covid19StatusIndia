import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.services';
import { Helpline } from '../helpline.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-helpline',
  templateUrl: './helpline.component.html',
  styleUrls: ['./helpline.component.css']
})
export class HelplineComponent implements OnInit {
  helplines:any[];
  result: any[]=[];

  constructor(public dataserv: DataService, private fb: FormBuilder) { }
  
  searchHelplineForm: FormGroup;

  statesList= ["Andaman & Nicobar","Andhra Pradesh","Assam","Bihar","Chandigarh","Chhattisgarh","Delhi","Goa","Gujarat","Haryana","Jammu & Kashmir","Jharkhand","Karnataka","Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Odisha","Puducherry","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttar Pradesh","Uttarakhand","West Bengal"]
  servicesList=["Accomodation and Shelter Homes","Ambulance","Delivery [Vegetables, Fruits, Groceries, Medicines, etc.]","Other","Hospitals and Centers","Police","Government Helpline","Mental well being and Emotional Support"]
  


  ngOnInit() {
    this.dataserv.getHelplines().subscribe(
        (res)=>{
          this.helplines=res;
          console.log(res)
        }
      ,(err)=>{
        console.log(err)
    });
    console.log(this.helplines);

    this.searchHelplineForm=this.fb.group({
      state: ['Select the state',Validators.required],
      service: ['Select the service',Validators.required]
    })

  }

  showHelplines(){
    this.result=[]
    if(this.searchHelplineForm.value.service=='all'){
      for(let res of this.helplines){
        if(res.state==this.searchHelplineForm.value.state){
          this.result.push(res)
        }
      }
    }
    else{
    for(let res of this.helplines){
      if(res.state==this.searchHelplineForm.value.state && res.category == this.searchHelplineForm.value.service){
        this.result.push(res)
      }
    }
  }
    console.log(this.result)
    
  }

}
