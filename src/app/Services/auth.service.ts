import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient, private router: Router) {

  }

  login(object: any): void {
    // tslint:disable-next-line:no-unused-expression
    this.httpClient.post<any>('http://localhost:56575/api/auth/login', object).subscribe(x => {
      console.log(x);
      this.setSession(x);
      this.router.navigate(['/home']);
    }, (error => {
      console.log(error);

    }));
  }

  setSession(authResult): void {
    localStorage.setItem('token', authResult.token);
  }

  public isAuth(): boolean {
    const token = localStorage.getItem('token');
    if (token){
      return  true;
    }else{
      return false;
    }
  }
  public logout(){
    localStorage.clear();
  }
}
