import { Component, inject } from '@angular/core';
import { AsyncPipe, NgForOf } from '@angular/common';
import { MockService } from '../core/mock.service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [AsyncPipe, NgForOf],
  providers: [MockService], // Provide MockService here
  templateUrl: './user-management.component.html',
  //styleUrls: ['./user-management.component.scss'],
})
export class UserListComponent {
  private mockService = inject(MockService); // Use inject() for proper initialization
  users$ = this.mockService.getUsers(); // Observable for async pipe
}