import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html'
})
export class LoginPageComponent implements OnInit {
  isLoginClicked = false;
  username : string ="";
  password : string ="";
  usernameResult : string ="";
  passwordResult : string ="";
  constructor() { }

  ngOnInit(): void {
  }

  OnSubmitLogin(){
    this.isLoginClicked = true;
    this.usernameResult = this.username;
    this.passwordResult = this.password;

  }

}
