import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { EmployeeserviceService } from '../employeeservice.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  regForm: FormGroup;
  datasaved = false;
  massage: string;
  constructor(private formbuilder: FormBuilder, private employeeservice: EmployeeserviceService) { }

  ngOnInit() {
   
  }
  
  }

  
  // createemployee(employee: Employee) {
  //   this.employeeservice.createEmployee(employee).subscribe(
  //     () => {
  //       this.datasaved = true;
  //       this.massage = "User Created";
  //       this.regForm.reset();
  //     }
  //   )
  // }


