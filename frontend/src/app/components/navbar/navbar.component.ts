import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  showLogOut:boolean;
  private uiServiceSubscription: Subscription;

  constructor(private uiService:UiService,private router:Router) { }

  ngOnInit(): void {
    this.uiServiceSubscription = this.uiService.onToggleLogout().subscribe(show => {
      this.showLogOut = show;
    });
  }

  public logout() {
    localStorage.removeItem("loginUser");
    this.uiService.setShowLogout(false);
    this.router.navigate(['/login']);
  }


}
