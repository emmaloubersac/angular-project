import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HistoryEntry } from './exercise2.model';
import { HistoryComponent } from "./history/history.component";

@Component({
  selector: 'app-exercise2',
  imports: [RouterModule, FormsModule, HistoryComponent],
  templateUrl: './exercise2.component.html',
  styleUrl: './exercise2.component.css'
})

export class Exercise2Component {
  
  enteredNumber1 = 0;
  enteredNumber2 = 0;
  //list of available operation
  operation_list = ['+', '-', 'x','/'];
  operation = '+';
  result = 0;

  history: HistoryEntry[] = [];

 
  //to manage compute operation and add it to the history array
  onCalcul() {
    if (this.operation === '+'){
      this.result = this.enteredNumber1 + this.enteredNumber2;
      
    } else if (this.operation === '-'){
      this.result = this.enteredNumber1 - this.enteredNumber2;
    } else if (this.operation === 'x'){
      this.result = this.enteredNumber1 * this.enteredNumber2;
    } else {
      this.result = this.enteredNumber1 / this.enteredNumber2;
    }
    this.addOperationToHistory(this.enteredNumber1, this.enteredNumber2, this.operation, this.result)
    
  }
  
  //to add an operation to the history array
  addOperationToHistory(number1:number,number2:number,op:string, result:number) {
    const time = new Date().toLocaleTimeString();
    let operation = number1 + ' ' + op + ' ' + number2;
    this.history.unshift({time,operation,result});
  }

  //to delete an operation in history array
  deleteEntry(entry:HistoryEntry) {
    this.history = this.history.filter(h => h !== entry)
  }

}
