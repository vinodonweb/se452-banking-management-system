import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { Account } from '../../Account';
import { Deposit } from 'src/app/Deposit';

@Component({
  selector: 'app-add-deposit',
  templateUrl: './add-deposit.component.html',
  styleUrls: ['./add-deposit.component.css'],
})
export class AddDepositComponent implements OnInit {
  @Output() onAddDeposit: EventEmitter<Deposit> = new EventEmitter();
  accountNumber: string;
  amount:number;
  transactionNumber:string;
  notes:string;
  reminder: boolean = false;
  showAddTask: boolean;
  subscription: Subscription;


  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggleDeposit()
      .subscribe((value) => (this.showAddTask = value));
  }

  ngOnInit(): void {}
  
   ngOnDestroy() {
        // Unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    }

  onSubmit() {
    if (!this.accountNumber) {
      alert('Please add a deposit!');
      return;
    }

    const newDeposit: Deposit = {
      accountNumber: this.accountNumber,
      transactionNumber: this.generateTransactionNumber(),
      amount:this.amount,
      depositDate:Date.now(),
      notes:this.notes
    };

    this.onAddDeposit.emit(newDeposit);

 this.accountNumber='';
 this.transactionNumber='';
 this.amount=0;
 this.notes='';
  }

  generateTransactionNumber(): string {
    const timestamp = Date.now(); // Get current timestamp
    const prefix = 'D'; // Prefix for transaction number

    // Generate a unique transaction number using timestamp
    const transactionNumber = `${prefix}${timestamp}`;

    return transactionNumber;
  }
}
