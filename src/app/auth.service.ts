import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  acessToken: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6ImFkbWluIiwiaWF0IjoxNTE2MjM5MDIyfQ.T26Dm4buOBRdxNs58srk1l_N5y1Dxii9y-YMj-9J7mM';

  constructor() { }

  isAuthenticated() {
    return sessionStorage.getItem('acess-token') !== null;
  }

  login(email: string, password: string): boolean {
    if(email === 'admin' && password === 'admin') {
      sessionStorage.setItem('acess-token', this.acessToken);
      return true;
    }

    return false;
  }

  logout() {
    sessionStorage.removeItem('acess-token');
  }
}
