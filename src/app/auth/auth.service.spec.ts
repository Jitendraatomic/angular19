import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { fakeAsync, tick } from '@angular/core/testing';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService],
    });
    service = TestBed.inject(AuthService);
  });

  afterEach(() => {
    localStorage.clear(); // Clear localStorage after each test
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('login', () => {
    it('should store the token in localStorage and update authentication status', () => {
      spyOn(localStorage, 'setItem').and.callThrough();
      const token = 'test-token';

      service.login(token);

      expect(localStorage.setItem).toHaveBeenCalledWith('auth_token', token);
      service.getAuthenticationStatus().subscribe((status) => {
        expect(status).toBeTrue();
      });
    });
  });

  describe('logout', () => {
    it('should remove the token from localStorage and update authentication status', () => {
      spyOn(localStorage, 'removeItem').and.callThrough();
      localStorage.setItem('auth_token', 'test-token'); // Pre-set token for the test

      service.logout();

      expect(localStorage.removeItem).toHaveBeenCalledWith('auth_token');
      service.getAuthenticationStatus().subscribe((status) => {
        expect(status).toBeFalse();
      });
    });
  });

  describe('checkAuthStatus', () => {
    it('should return true if token exists in localStorage', () => {
      localStorage.setItem('auth_token', 'test-token');

      const result = service.checkAuthStatus();

      expect(result).toBeTrue();
    });

    it('should return false if token does not exist in localStorage', () => {
      localStorage.removeItem('auth_token'); // Ensure no token exists

      const result = service.checkAuthStatus();

      expect(result).toBeFalse();
    });
  });

  describe('getAuthenticationStatus', () => {
    it('should emit the correct authentication status', fakeAsync(() => {
      const statuses: boolean[] = [];

      service.getAuthenticationStatus().subscribe((status) => statuses.push(status));

      // Initial status (no token)
      expect(statuses[statuses.length - 1]).toBeFalse();

      // After login
      service.login('test-token');
      tick();
      expect(statuses[statuses.length - 1]).toBeTrue();

      // After logout
      service.logout();
      tick();
      expect(statuses[statuses.length - 1]).toBeFalse();
    }));
  });
});
