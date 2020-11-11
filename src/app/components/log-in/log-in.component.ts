import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../../Services/auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  public userForm = new FormGroup({
    login: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private fb: FormBuilder,
              private router: Router, private authService: AuthService) {

  }

  ngOnInit(): void {
  }

  login() {
    const val = this.userForm.value;
    this.authService.login(val);
    console.log(val);
  }

  logout(){
    this.authService.logout();
  }
}
