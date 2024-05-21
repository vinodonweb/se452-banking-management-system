import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title: string = 'DePaul Bank';
  showAddDeposit: boolean = false;
  showAddWithdraw: boolean = false;
  subscriptionDeposit: Subscription;
  subscriptionWithdraw: Subscription;
  showBtnDeposit:boolean=true;
  showBtnWithdraw:boolean=true;

  constructor(private uiService: UiService, private router: Router) {
    this.subscriptionDeposit = this.uiService
      .onToggleDeposit()
      .subscribe((value) => (this.showAddDeposit = value,this.showBtnWithdraw=!value));

      this.subscriptionWithdraw = this.uiService
      .onToggleWithdraw()
      .subscribe((value) => (this.showAddWithdraw = value,this.showBtnDeposit=!value));
  }

  ngOnInit(): void {}
  
   ngOnDestroy() {
     // Unsubscribe to ensure no memory leaks
     this.subscriptionDeposit.unsubscribe();
     this.subscriptionWithdraw.unsubscribe();
   }

  toggleAddDeposit() {
    this.uiService.toggleAddDeposit();
  
  }

  toggleAddWithdraw() {
    this.uiService.toggleAddWithdraw();
  }

  hasRoute(route: string) {
    return this.router.url === route;
  }
}
