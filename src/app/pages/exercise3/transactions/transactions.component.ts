import { Component, DestroyRef, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router} from '@angular/router';
import { Transaction } from './transaction-detail/transaction.model';
import { CommonModule, DatePipe } from '@angular/common';
import { TransactionsService } from './transactions.service';

@Component({
  selector: 'app-transactions',
  imports: [ DatePipe, CommonModule],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.css'
})


export class TransactionsComponent {
  transactionsList: Transaction[] = [];
  sortField: 'id' | 'date' | 'amount' | 'description' | "balance" | "label" = 'id';
  ascending: boolean = true;
  
  private router = inject(Router);
  private destroyRef = inject(DestroyRef);
  private transactionsService = inject(TransactionsService);


  ngOnInit() {
    const subscription = this.transactionsService.getTransactionsList().subscribe(transactions => {
      this.transactionsList = transactions;
    });
      this.destroyRef.onDestroy(() => {
        subscription.unsubscribe();
      })  
  }

  sortBy(field: keyof Transaction) {
    this.sortField = field;
    this.ascending = !this.ascending;
    this.transactionsList.sort((a, b) => {
      if (a[field] < b[field]) return this.ascending ? -1 : 1;
      if (a[field] > b[field]) return this.ascending ? 1 : -1;
      return 0;
    });
  }

  goToDetail(id: string) {
    this.router.navigate(['/exercise3/transaction', id]);
  }

  getSortArrow(field: string): string {
    return this.sortField === field ? (this.ascending ? '▲' : '▼') : '';
  }
}

