import { Component, OnInit } from '@angular/core';
import { Transaction } from 'src/app/Transaction';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.css']
})
export class TransactionHistoryComponent implements OnInit {

  //transactions:Transaction[]=[{id:1,transactionNumber:'123sa',accountNumber:'102',amount:1000,transactionType:'Deposit',timestamp:'24th June.2024'}];
  transactions:Transaction[]=[];
  accountNumber:string;
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.transactions$.subscribe(transactions => { this.transactions = transactions });
    this.getTransactions();
  }


  getTransactions() {
    this.taskService.getTransactions(this.accountNumber);
    console.log(this.transactions);
  }

  apple(){
    console.log("apple");
    console.log(this.accountNumber);
  }
}
