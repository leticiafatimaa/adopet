import { Observable } from 'rxjs/Observable';
import { AuthService } from './../../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  returnUrl = '/animals-list'

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: AuthService,
  ) { }

  ngOnInit() {
  }

 /*  login() {
    this.service.logginWithGoogle().then(
      sucess => this.router.navigate( [this.returnUrl] ),
      error => {
        this.snackBar.open(error.message, 'Ok', { duration: 8000 })
      }
    );
  } */

}
