import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Account } from '../Account';
import { Deposit } from '../Deposit';
import { Withdraw } from '../Withdraw';

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

  constructor(private http: HttpClient) {}

  getTasks(): Observable<Account[]> {
    return this.http.get<Account[]>(this.apiUrl+"/account");
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
    return this.http.post<Deposit>(this.apiUrl+"/deposit", deposit, httpOptions);
  }

  addWithdraw(withdraw: Withdraw): Observable<Withdraw> {
    return this.http.post<Withdraw>(this.apiUrl+"/withdraw", withdraw, httpOptions);
  }

  
}
