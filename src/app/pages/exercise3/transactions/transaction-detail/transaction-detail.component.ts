import { Component, DestroyRef, inject, input, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Transaction } from './transaction.model';
import { DatePipe } from '@angular/common';
import { TransactionsService } from '../transactions.service';

@Component({
  selector: 'app-transaction-detail',
  imports: [RouterLink, DatePipe],
  templateUrl: './transaction-detail.component.html',
  styleUrl: './transaction-detail.component.css'
})
export class TransactionDetailComponent implements OnInit {
  transaction: Transaction | null = null;

  private activatedRoute = inject(ActivatedRoute);
  private transactionsService = inject(TransactionsService);
  private destroyRef = inject(DestroyRef);
  

  ngOnInit() {
    const transactionId = this.activatedRoute.snapshot.paramMap.get('transactionId');
    if (transactionId) {

      const subscription = this.transactionsService.getTransactionsById(transactionId)
        .subscribe({
          next: data => {
            this.transaction = data;
          },
          error: (err) => {
            console.error("Error loading transaction:", err);
          }
        }
      );

      this.destroyRef.onDestroy(() => {
        subscription.unsubscribe();
      })  
    }
  }

}



