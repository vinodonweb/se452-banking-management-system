import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResponseAPI } from 'src/app/ResponseAPI';
import { UiService } from 'src/app/services/ui.service';
import { User } from 'src/app/User';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  signupUsers: any[] = [];
  loginObj: User = {
    username: '',
    password: '',
    email:'',
    accountType:''
  }
  constructor(private router: Router,private taskService:TaskService,private uiService:UiService) { }

  ngOnInit(): void {
   
  }

  onLogin() {
   // const isUserExist = this.signupUsers.find(m => m.username == this.loginObj.username && m.password == this.loginObj.password);
   this.taskService.login(this.loginObj).subscribe(
    (response: ResponseAPI) => {
      console.log('Login response', response);
    if(response.message=='Login successful')
    {
      localStorage.setItem("loginUser",JSON.stringify(this.loginObj));
    this.router.navigate(['/home']);
    this.uiService.setShowLogout(true);
    }
    else 
    alert('invalid user credential');
    
    
    });
   
   
  }




  public isLoggedIn(): boolean {
    let token = localStorage.getItem("loginUser");
    return token != null && token.length > 0;
  }

  public getToken(): string | null {
    return this.isLoggedIn() ? localStorage.getItem("loginUser") : null;
  }
}
