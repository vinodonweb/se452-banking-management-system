import { Component, NgModule, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Account } from 'src/app/Account';
import { Dashboard } from 'src/app/Dashboard';
import { Deposit } from 'src/app/Deposit';
import { TaskService } from 'src/app/services/task.service';
import { UiService } from 'src/app/services/ui.service';
import { Withdraw } from 'src/app/Withdraw';
import { CommonModule } from '@angular/common'


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  messagePopup:string;
  messageClass:string;
  showPopup=false;
  showImage=true;
  subscription:Subscription;
  dashboards: Dashboard[];

  deposits: Deposit[] = [];
  withdraws: Withdraw[] = [];


  constructor(private taskService: TaskService,private uiService:UiService, private router: Router, private route: ActivatedRoute) {
    this.subscription = this.uiService
    .onToggleDeposit()
    .subscribe((value) => (this.showImage = !value));

    this.subscription = this.uiService
    .onToggleWithdraw()
    .subscribe((value) => (this.showImage = !value));
   }

  ngOnInit() {
    this.taskService.dashboard$.subscribe(dashboard => { this.dashboards = dashboard });
    this.getTasks();
  }

  getTasks() {
    this.taskService.getDashboard();
    console.log(this.dashboards);
    
  }
 





   delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
