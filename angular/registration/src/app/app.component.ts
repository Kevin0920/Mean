import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Registration";
  users=[];
  user = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    password_confirm: "",
    address: "",
    unit: "",
    city: "",
    state: "",
    answer: "",
  }
  success = "";
  onSubmit(){
    this.users.push(this.user);
    this.success = "Thank you so much " + this.user.first_name + "we will need send you confirmation email at " + this.user.email
    this.user ={
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      password_confirm: "",
      address: "",
      unit: "",
      city: "",
      state: "",
      answer: "",
    }
  }
}
