import { Component, OnInit } from '@angular/core';
import {FormGroup,  FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor(private formbuilder: FormBuilder) { }
  addForm: FormGroup;
  ngOnInit() {

this.addForm = this.formbuilder.group({
  sid: ['', Validators.required],
  fName: ['', Validators.required],
  lName: ['', Validators.required],
  email: ['', Validators.required]
});

}
onSubmit(){
alert(this.addForm.value.fName);
console.log(this.addForm.value);
}
}
