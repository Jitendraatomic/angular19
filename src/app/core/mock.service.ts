import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MockService {
  private users = [
    { id: 1, name: 'Admin', role: 'admin', email: 'admin@example.com', password: 'admin123' },
    { id: 2, name: 'User1', role: 'user', email: 'user1@example.com', password: 'user123' },
  ];

  getUsers(): Observable<any[]> {
    return of(this.users);
  }

  addUser(user: any): Observable<string> {
    this.users.push({ id: this.users.length + 1, ...user });
    return of('User added successfully!');
  }

  authenticateUser(email: string, password: string): Observable<boolean> {
    const user = this.users.find(u => u.email === email && u.password === password);
    return of(!!user);
  }
}
