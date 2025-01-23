import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AuthService } from './auth/auth.service'; // Assuming you have an AuthService to manage authentication
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  isAuthenticated:any = false; // Authentication status
  private authStatusSubscription: Subscription = new Subscription();
  constructor(private authService: AuthService,private router: Router) {}

  ngOnInit() {

    // Check the authentication status (update as per your AuthService method)
    this.authStatusSubscription = this.authService.getAuthenticationStatus().subscribe(status => {
      this.isAuthenticated = status;
    });
  }
  ngOnDestroy() {
    // Unsubscribe when the component is destroyed to avoid memory leaks
    this.authStatusSubscription.unsubscribe();
  }
  navigateTo(route: string): void {
    this.router.navigate([`/${route}`]);
  }
  onLogout(): void {
    this.authService.logout();
    this.router.navigate(['/auth/login']);
    this.isAuthenticated=false // Redirect to login page
  }
}
