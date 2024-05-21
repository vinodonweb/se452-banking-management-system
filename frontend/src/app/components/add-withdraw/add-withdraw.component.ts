import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { Account } from '../../Account';
import { Withdraw } from 'src/app/Withdraw';

@Component({
  selector: 'app-add-withdraw',
  templateUrl: './add-withdraw.component.html',
  styleUrls: ['./add-withdraw.component.css'],
})
export class AddWithdrawComponent implements OnInit {
  @Output() onAddWithdraw: EventEmitter<Withdraw> = new EventEmitter();
  accountNumber: string;
  amount:number;
  transactionNumber:string;
  notes:string;
  withdrawalType:string;
  reminder: boolean = false;
  showAddWithdraw: boolean;
  subscription: Subscription;


  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggleWithdraw()
      .subscribe((value) => (this.showAddWithdraw = value));
  }

  ngOnInit(): void {}
  
   ngOnDestroy() {
        // Unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    }

  onSubmit() {
    if (!this.accountNumber) {
      alert('Please add a value for withdrawal!');
      return;
    }

    const newDeposit: Withdraw = {
      accountNumber: this.accountNumber,
      transactionNumber: this.generateTransactionNumber(),
      amount:this.amount,
      withdrawalType:this.withdrawalType,
      withdrawalDate:Date.now(),
      notes:this.notes
    };

    this.onAddWithdraw.emit(newDeposit);

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
