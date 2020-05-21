import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Question } from './question.model';

@Component({
  selector: 'app-medical-test',
  templateUrl: './medical-test.component.html',
  styleUrls: ['./medical-test.component.css']
})
export class MedicalTestComponent implements OnInit {

  userDetailsForm: FormGroup;
  quizOver=false;
  quizStart=true;
  result: string;
  resultClass:string;
  score=0
  count=0
  statesList= ["Andaman & Nicobar","Andhra Pradesh","Assam","Bihar","Chandigarh","Chhattisgarh","Delhi","Goa","Gujarat","Haryana","Jammu & Kashmir","Jharkhand","Karnataka","Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Odisha","Puducherry","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttar Pradesh","Uttarakhand","West Bengal"]
  
  currentQues: Question;
  questions: Question[]=[{statement: "Do you have any of the symptoms of COVID-19?",optionA:"No",optionB:"Yes"},
                          {statement: "Travelled internationallly in past 21 days?",optionA:"No",optionB:"Yes"},
                        {statement:"Contact someone who is tested Positive for COVID-19 or works in hospital?",optionA:"No",optionB:"Yes"},
                      {statement: "Do you have any of following problems/diseases?",optionA:"No",optionB:"Yes"}]

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.userDetailsForm=this.fb.group({
      name: [null,Validators.required],
      age: [null,Validators.required],
      state: [null,Validators.required],
      email: [null, [Validators.required,Validators.email]]
    });
  }

  startTest(){
    this.quizStart= false;
    this.currentQues=this.questions[this.count]
  }

  optionClicked(point: number){
    this.count=this.count+1
    this.score=this.score+(point+1)*(4-this.count+1)
    if(this.count<4){
      this.currentQues=this.questions[this.count]
      
    }
    else{
      if(this.score>=17){
        this.result="Your Chances of getting infected by COVID-19 are Very High!";
        this.resultClass="alert alert-danger font-weight-bold";
      }
      else{
        if(this.score<17 &&this.score>=13){
          this.result="Your Chances of getting infected by COVID-19 are low but you should be more alert!";
          this.resultClass="alert alert-warning font-weight-bold";
        }
        else{
          this.result="Your Chances of getting infected by COVID-19 are very low!";
          this.resultClass="alert alert-success font-weight-bold"
        }
      }
    }
  }

  submitData(){
    this.quizOver=true
  }

  restartTest(){
    this.score=0
    this.count=0
    this.quizStart=true
    this.quizOver=false
  }

}
