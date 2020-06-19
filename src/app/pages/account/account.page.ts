import { Component, OnInit } from '@angular/core';
import User from '../../models/User';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  user = User;
  constructor() { }

  ngOnInit() {
    console.log("Account Page",this.user)
  }

}
