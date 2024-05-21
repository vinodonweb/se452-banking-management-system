import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private showAddDeposit: boolean = false;
  private showAddWithdraw: boolean = false;
  private subjectDeposit = new Subject<any>();
  private subjectWithdraw = new Subject<any>();

  constructor() {}

  toggleAddDeposit(): void {
    this.showAddDeposit = !this.showAddDeposit;
    this.subjectDeposit.next(this.showAddDeposit);
  }


  toggleAddWithdraw(): void {
    this.showAddWithdraw = !this.showAddWithdraw;
    this.subjectWithdraw.next(this.showAddWithdraw);
  }

  onToggleDeposit(): Observable<any> {
    return this.subjectDeposit.asObservable();
  }

  onToggleWithdraw(): Observable<any> {
    return this.subjectWithdraw.asObservable();
  }
}
