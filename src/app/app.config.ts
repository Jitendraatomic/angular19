import { ApplicationConfig } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './core/auth.interceptor';

// const routes: Routes =import { Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.gaurd';

// Define routes
export const routes: Routes = [
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  
  // Auth Module with Lazy Loading
  { path: 'auth', loadChildren: () => import('./auth/auth.routes').then(m => m.AUTH_ROUTES) },

  // User Management - Protected by Auth Guard
  { 
    path: 'users', 
    loadChildren: () => import('./user-management/user-management.routes').then(m => m.USER_MANAGEMENT_ROUTES),
    canActivate: [AuthGuard]
  },

  // Document Management - Protected by Auth Guard
  { 
    path: 'documents', 
    loadChildren: () => import('./document/document.routes').then(m => m.DOCUMENT_ROUTES),
    canActivate: [AuthGuard]
  },

  // Q&A Module - Protected by Auth Guard
  { 
    path: 'qna', 
    loadChildren: () => import('./qna/qna.routes').then(m => m.QNA_ROUTES),
    canActivate: [AuthGuard]
  }
];


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptors([authInterceptor])),
  ],
};
