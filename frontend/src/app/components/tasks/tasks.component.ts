import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { UiService } from '../../services/ui.service';
import { Account } from '../../Account';
import { Deposit } from 'src/app/Deposit';
import { Withdraw } from 'src/app/Withdraw';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  messagePopup:string;
  messageClass:string;
  showPopup=false;
  showImage=true;
  subscription:Subscription;
  accounts: Account[] = [];
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
    this.taskService.accounts$.subscribe(accounts => { this.accounts = accounts });
    this.getTasks();
  }

  getTasks() {
    this.taskService.getTasks();
    console.log(this.accounts);
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

  async addDeposit(deposit: Deposit):Promise<void> {
    this.taskService.addDeposit(deposit).subscribe((deposit) => this.deposits.push(deposit));
    this.accounts.forEach(account => {
      if (account.accountNumber == deposit.accountNumber) {
        account.balance += deposit.amount;
      }
    })
    this.showPopup=true;
    this.messagePopup="Deposit successful for account number:"+deposit.accountNumber+" !";
    this.messageClass="Success";
    await this.delay(10000);
    this.showPopup=false;

  }
  async addWithdraw(withdraw: Withdraw):Promise<void> {
    this.taskService.addWithdraw(withdraw).subscribe((withdraw) => this.withdraws.push(withdraw));
    this.accounts.forEach(account => {
      if (account.accountNumber == withdraw.accountNumber) {
        account.balance -= withdraw.amount;
      }
    })
    this.showPopup=true;
    this.messagePopup="Withdraw successful for account number:"+withdraw.accountNumber+" !";
    this.messageClass="Success";
    await this.delay(10000);
    this.showPopup=false;
  }


   delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}



