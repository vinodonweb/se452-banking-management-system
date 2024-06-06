import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Account } from '../Account';
import { Deposit } from '../Deposit';
import { Withdraw } from '../Withdraw';

import { Router } from '@angular/router';
import { Dashboard } from '../Dashboard';
import { Transaction } from '../Transaction';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = 'http://localhost:8080/api';
  public   refresh: Subject<Account[]>=new Subject<Account[]>();
  public   refreshDashboard: Subject<Dashboard[]>=new Subject<Dashboard[]>();
  public   refreshTransactions: Subject<Transaction[]>=new Subject<Transaction[]>();
  accounts$=this.refresh.asObservable();
  transactions$=this.refreshTransactions.asObservable();
  dashboard$=this.refreshDashboard.asObservable();

  constructor(private http: HttpClient,private router:Router) {}

   getTasks() {
    return this.http.get<Account[]>(this.apiUrl+"/account").subscribe(accounts=>this.refresh.next(accounts));
  }

  getTransactions(accountNumber:String) {
    return this.http.get<Transaction[]>(this.apiUrl+"/transactions/"+accountNumber).subscribe(transactions=>this.refreshTransactions.next(transactions));
  }
  getDashboard() {
    return this.http.get<Dashboard[]>(this.apiUrl+"/dashboard").subscribe(dashboard=>this.refreshDashboard.next(dashboard));
  }


  deleteTask(account: Account): Observable<Account> {
    const url = `${this.apiUrl}/${account.accountId}`;
    return this.http.delete<Account>(url);
  }

  updateTaskReminder(account: Account): Observable<Account> {
    const url = `${this.apiUrl}/${account.accountId}`;
    return this.http.put<Account>(url, account, httpOptions);
  }

  addDeposit(deposit: Deposit): Observable<Deposit> {
    var post= this.http.post<Deposit>(this.apiUrl+"/deposit", deposit, httpOptions);
    return post;
  }

  addWithdraw(withdraw: Withdraw): Observable<Withdraw> {
    var post= this.http.post<Withdraw>(this.apiUrl+"/withdraw", withdraw, httpOptions);
    return post;
  }

  
}
