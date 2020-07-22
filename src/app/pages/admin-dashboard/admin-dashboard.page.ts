import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.page.html',
  styleUrls: ['./admin-dashboard.page.scss'],
})
export class AdminDashboardPage implements OnInit {

  constructor(private afAuthService:AuthService,
              private router:Router
    ) { }

  ngOnInit() {
  }

  onLogout(){
    this.afAuthService.logout();
    this.router.navigate(['/login']);

  }

}
