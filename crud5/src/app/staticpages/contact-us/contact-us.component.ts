import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import {StaticpagesService} from '../staticpages.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})

export class ContactUsComponent implements OnInit {
  
  registerForm: FormGroup;
  submitted = false;
  users: any;

    constructor(private formBuilder: FormBuilder, private staticpagesService: StaticpagesService) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            Name: ['', Validators.required],
            mobile: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });

        this.staticpagesService.getUsers()
      .subscribe( data => {
        this.users = data;
        alert(data);
      });
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        alert('SUCCESS!! :-)');
        console.log(this.registerForm.value);
        this.staticpagesService.createUser(this.registerForm.value)
      .subscribe( data => {
        alert("submitted");
      });
  }
    }

   

