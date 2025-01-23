import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserListComponent } from './user-management.component';
import { MockService } from '../core/mock.service';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';
import { AsyncPipe, NgForOf } from '@angular/common';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;
  let mockService: jasmine.SpyObj<MockService>;

  beforeEach(async () => {
    // Create a mock of the MockService
    const mockServiceSpy = jasmine.createSpyObj('MockService', ['getUsers']);

    await TestBed.configureTestingModule({
      imports: [UserListComponent, AsyncPipe, NgForOf], // Include the AsyncPipe and NgForOf
      providers: [
        { provide: MockService, useValue: mockServiceSpy }, // Provide the mock service
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    mockService = TestBed.inject(MockService) as jasmine.SpyObj<MockService>;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should call getUsers from MockService and display users', () => {
    const mockUsers = [
      { name: 'John Doe', role: 'Admin' },
      { name: 'Jane Smith', role: 'User' },
    ];
  
    mockService.getUsers.and.returnValue(of(mockUsers)); // Mocking the observable response
  
    fixture.detectChanges(); // Trigger change detection
  
    // Ensure the getUsers method was called
    expect(mockService.getUsers).toHaveBeenCalled();
  
    const userElements = fixture.debugElement.queryAll(By.css('li'));
    expect(userElements.length).toBe(2); // There should be 2 users
  
    // Check the content of the list items
    expect(userElements[0].nativeElement.textContent).toContain('John Doe - Admin');
    expect(userElements[1].nativeElement.textContent).toContain('Jane Smith - User');
  });
});
