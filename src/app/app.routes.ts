import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { Exercise1Component } from './pages/exercise1/exercise1.component';
import { Exercise2Component } from './pages/exercise2/exercise2.component';
import { Exercise3Component } from './pages/exercise3/exercise3.component';
import { TransactionDetailComponent } from './pages/exercise3/transactions/transaction-detail/transaction-detail.component';
import { TransactionsComponent } from './pages/exercise3/transactions/transactions.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'exercise1', component: Exercise1Component },
  { path: 'exercise2', component: Exercise2Component },
  { path: 'exercise3', component: Exercise3Component},
  { path:'exercise3/transaction/:transactionId', component: TransactionDetailComponent},
  
];