import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  user: User;

  constructor(protected authService: AuthService) { }

  ngOnInit() {
    this.authService.authStatus.subscribe(_data => {
      this.user = _data;
    });
  }

  logout() {
    this.authService.logout();
  }

}
