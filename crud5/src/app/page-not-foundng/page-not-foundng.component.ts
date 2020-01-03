import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-page-not-foundng',
  templateUrl: './page-not-foundng.component.html',
  styleUrls: ['./page-not-foundng.component.css']
})
export class PageNotFoundngComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  gotoHome() {
    this.router.navigate(['/']);
  }
}
