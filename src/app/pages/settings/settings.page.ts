import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  title: string = 'Impostazioni';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.router)
  }

}