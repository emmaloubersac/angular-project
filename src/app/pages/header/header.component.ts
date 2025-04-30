import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { TimeService } from '../../time.service';
import { DatePipe } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [DatePipe, RouterOutlet],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  currentTime: Date = new Date();
  private timeService = inject(TimeService);
  private destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    const subscription = this.timeService.getTime().subscribe(time => {
      this.currentTime = time;
    });

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    })  
  }
}
