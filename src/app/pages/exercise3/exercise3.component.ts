import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { TransactionsComponent } from "./transactions/transactions.component";

@Component({
  selector: 'app-exercise3',
  imports: [RouterModule, TransactionsComponent],
  templateUrl: './exercise3.component.html',
  styleUrl: './exercise3.component.css'
})
export class Exercise3Component {

}
