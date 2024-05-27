import { Component, OnInit,  ViewChild } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {
  message: string = '';
  name: string;
  password: string;
  auth: AuthService;
  @ViewChild('loginForm') loginForm!: NgForm;

  constructor(
    private authService: AuthService, 
    private router: Router
  ) { }

  ngOnInit() {
    this.auth = this.authService;
  }

  onSubmit() {
    console.log(this.loginForm.value);
    // Do login here
  }

  setMessage() {
    if(this.auth.isLoggedIn) {
      this.message = 'Connected';
    } else {
      this.message = 'Name or Password incorrect'
    }
  }

  login() {
    this.message = 'Loading';
    this.auth.login(this.name, this.password)
      .subscribe((isLoggedIn: boolean) => {
        this.setMessage();
        if(isLoggedIn) {
          this.router.navigate(['/recipes']);
        } else {
          this.password = '';
          this.router.navigate(['/login']);
        }
      })
  }

  logout() {
    this.auth.logout();
    this.message = 'Deconneted';
  }

}
