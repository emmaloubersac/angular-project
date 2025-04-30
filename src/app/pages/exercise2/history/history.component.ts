import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HistoryEntry } from '../exercise2.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-history',
  imports: [CommonModule],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})
export class HistoryComponent {
  @Input({required:true}) history!: HistoryEntry[];
  @Output() delete = new EventEmitter<HistoryEntry>();

  //to delete en entry from history array
  onDeleteEntry(entry:HistoryEntry) {
    this.delete.emit(entry);
  }

  
}
