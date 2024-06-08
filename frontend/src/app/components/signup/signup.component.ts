import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';
import { User } from 'src/app/User';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupObj: User = {
    username: '',
    password: '',
    email: '',
    accountType: ''
  };
  constructor(private http: HttpClient, private router: Router, private taskService: TaskService) { }

  ngOnInit(): void {
  }

  onSignup() {

    //localStorage.setItem("signupUsers",JSON.stringify(this.signupUsers));
    this.taskService.signup(this.signupObj).subscribe((resp: boolean) => {
      if (resp)
      {
        debugger;
        console.log(resp);
        alert("User created successfully");
      this.router.navigate(['/login']);
      }
      else {
        alert("User/Email already exists")
      }
    }

    )
  }


}
