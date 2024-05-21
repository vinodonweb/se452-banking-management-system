import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Account } from '../../Account';
import { Deposit } from 'src/app/Deposit';
import { Withdraw } from 'src/app/Withdraw';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  [x: string]: any;
  accounts: Account[] = [];
  deposits: Deposit[] = [];
  withdraws: Withdraw[] = [];

  constructor(private taskService: TaskService,private router:Router,private route:ActivatedRoute) {}

  ngOnInit(): void {
   this.getTasks();
  }

  getTasks():void {
    this.taskService.getTasks().subscribe((accounts) => (this.accounts = accounts));
  }

  deleteTask(account: Account) {
    this.taskService
      .deleteTask(account)
      .subscribe(
        () => (this.accounts = this.accounts.filter((t) => t.accountId !== account.accountId))
      );
  }

  toggleReminder(account: Account) {
    account.reminder = !account.reminder;
    this.taskService.updateTaskReminder(account).subscribe();
  }

  addDeposit(deposit: Deposit) {
    this.taskService.addDeposit(deposit).subscribe((deposit) => this.deposits.push(deposit));
    
  }
  addWithdraw(withdraw: Withdraw) {
    this.taskService.addWithdraw(withdraw).subscribe((withdraw) => this.withdraws.push(withdraw));
  }

  refreshComponent():void {
    this.router.routeReuseStrategy.shouldReuseRoute=()=>false;
    this.router.onSameUrlNavigation='reload';
    this.router.navigate(['./'],{relativeTo:this.route})
  }
}
