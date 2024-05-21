export interface Withdraw {
    withdrawId?: number;
    accountNumber: string;
    transactionNumber: string;
    withdrawalType: string;
    amount: number;
    notes:string;
    withdrawalDate:Number;
  }
  