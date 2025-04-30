import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Transaction } from './transaction-detail/transaction.model';
import { map, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {
  private httpClient = inject(HttpClient);
  private transactionsCache: Transaction[] | null = null;

  getTransactionsList(){
    if (this.transactionsCache) {
      return of(this.transactionsCache);
    }

    return this.httpClient.get<{transactions : Transaction[]}>('http://localhost:3000/transactions').pipe(
      map(res => res.transactions),
      tap(transactions => this.transactionsCache = transactions)
    );
  } 

  getTransactionsById(transactionId: string) {
    return this.httpClient.get<Transaction>(`http://localhost:3000/transaction/${transactionId}`);
  }
   
}
