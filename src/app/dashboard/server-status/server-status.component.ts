import { Component, OnDestroy, OnInit } from '@angular/core';
import { DashboardItemComponent } from "../dashboard-item/dashboard-item.component";

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [DashboardItemComponent],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit,OnDestroy {
  currentStatus: 'offline' | 'online' | 'unknown' = 'online';
  private interval?: ReturnType<typeof setInterval>
  constructor(){
  }
  ngOnInit(){
    setInterval(() => {
      const rnd=Math.random();
      if(rnd<0.5) this.currentStatus='online';
      else if(rnd<0.9) this.currentStatus='offline';
      else this.currentStatus='unknown';
    },2500);
  }
  ngOnDestroy(){
    clearTimeout(this.interval);
  }
}
