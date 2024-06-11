import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Account } from '../Account';
import { Deposit } from '../Deposit';
import { Withdraw } from '../Withdraw';

import { Router } from '@angular/router';
import { Dashboard } from '../Dashboard';
import { Transaction } from '../Transaction';
import { User } from '../User';
import { ResponseAPI } from '../ResponseAPI';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'ngrok-skip-browser-warning': '69420'
  }),
};

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = 'https://d7e9-2607-fb91-2265-c068-c497-8b4f-75a4-1c5b.ngrok-free.app/api';
  public   refresh: Subject<Account[]>=new Subject<Account[]>();
  public   refreshDashboard: Subject<Dashboard[]>=new Subject<Dashboard[]>();
  public   refreshTransactions: Subject<Transaction[]>=new Subject<Transaction[]>();
  accounts$=this.refresh.asObservable();
  transactions$=this.refreshTransactions.asObservable();
  dashboard$=this.refreshDashboard.asObservable();

  constructor(private http: HttpClient,private router:Router) {}

   getTasks() {
    return this.http.get<Account[]>(this.apiUrl+"/account", httpOptions).subscribe(accounts=>this.refresh.next(accounts));
  }

  getTransactions(accountNumber:String) {
    return this.http.get<Transaction[]>(this.apiUrl+"/transactions/"+accountNumber, httpOptions).subscribe(transactions=>this.refreshTransactions.next(transactions));
  }
  getDashboard() {
    return this.http.get<Dashboard[]>(this.apiUrl+"/dashboard", httpOptions).subscribe(dashboard=>this.refreshDashboard.next(dashboard));
  }


  deleteTask(account: Account): Observable<Account> {
    const url = `${this.apiUrl}/${account.accountId}`;
    return this.http.delete<Account>(url, httpOptions);
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

  
  login(user: User):Observable<ResponseAPI> {
    var post= this.http.post<ResponseAPI>(this.apiUrl+"/login", user, httpOptions);
    return post;
  }

  signup(user: User): Observable<boolean> {
    var post= this.http.post<boolean>(this.apiUrl+"/signup", user, httpOptions);
    return post;
  }
}
