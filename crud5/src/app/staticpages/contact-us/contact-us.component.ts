import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { StaticpagesService } from '../staticpages.service';
import { Observable } from 'rxjs';
import { Register } from '../register';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})

export class ContactUsComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  users: any;
  datasaved: boolean;
  massage: string;
  regForm: any;
  AllEmoloyee: Register;
  aa: [];

  constructor(private formBuilder: FormBuilder, private staticpagesService: StaticpagesService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      // Flag: 1,
      Empid: [''],
      Name: ['', Validators.required],
      Mobile: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      Password: ['', [Validators.required, Validators.minLength(6)]]
    });
    this.allEmployee();
  }
  onSubmit() {
    this.submitted = true;
    const employee = this.registerForm.value;
    console.log(this.registerForm.value);
    if (employee.Empid == '') {
      employee.Flag = '1';
      this.createemployee(employee);
    }
    else {
      this.updateEmployee(employee);
    }

  }

  allEmployee() {
    this.staticpagesService.getAllEmployee().subscribe((data) => {
      this.AllEmoloyee = data;
      this.aa = this.AllEmoloyee.dataList;
    });
  }


  createemployee(employee: any) {

    this.staticpagesService.createEmployee(employee).subscribe(
      (data) => {
        this.datasaved = true;
        this.massage = 'User Created';
        alert(this.massage);
        this.AllEmoloyee = data;
        console.log(this.AllEmoloyee);
        alert(this.AllEmoloyee.Status);
        this.aa = this.AllEmoloyee.dataList;
        console.log(this.aa);
        // this.registerForm.reset();
      }
    )
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  

  deleteEmployee(employee: any) {
    employee.Flag = '3';
    alert(employee.Name);
    alert(employee.Flag);
    this.staticpagesService.deleteEmployeeById(employee).subscribe(() => {
      this.massage = 'Record deleted succesfully';
      alert(this.massage);
      this.allEmployee();
    });
  }

  bindEmployee(employee: any) {
    employee.Flag = '2';
    this.registerForm.controls.Name.setValue(employee.Name);
    this.registerForm.controls.Mobile.setValue(employee.Mobile);
    this.registerForm.controls.email.setValue(employee.Email);
    this.registerForm.controls.Password.setValue(employee.Password);
    this.registerForm.controls.Empid.setValue(employee.Empid);
    // this.registerForm.controls.Password.setValue(employee.Flag);
    console.log(employee);
  }
  updateEmployee(employee: any) {
    alert('update');
    const employee = this.registerForm.value;
    employee.Flag = '2';
    console.log(employee);
    this.staticpagesService.editEmployeeById(employee).subscribe(
      (data) => {
        this.massage = 'Record Updated succesfully';
        alert(this.massage);
        this.registerForm.reset();
        this.allEmployee();
      });
  }
}

