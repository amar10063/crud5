import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import {StaticpagesService} from '../staticpages.service';
import { Observable } from 'rxjs';
import {Register} from '../register';

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
  AllEmoloyee:Register; 
  aa:[]; 

    constructor(private formBuilder: FormBuilder, private staticpagesService: StaticpagesService) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            Name: ['', Validators.required],
            Mobile: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            Password: ['', [Validators.required, Validators.minLength(6)]]
        });

    }
    createemployee(employee: Register) {
      this.staticpagesService.createEmployee(employee).subscribe(
        (data) => {
          this.datasaved = true;
          this.massage = 'User Created';
          alert(this.massage);
          this.AllEmoloyee = data;
          console.log(this.AllEmoloyee);
          alert(this.AllEmoloyee.Status);
         this.aa= this.AllEmoloyee.dataList;
         // console.log(this.aa);
         // this.registerForm.reset();
        }
      )
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;
        let employee = this.registerForm.value;
        console.log(this.registerForm.value);
        this.createemployee(employee);
  }


    }

   

