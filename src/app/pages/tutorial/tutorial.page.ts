import { Component, OnInit } from '@angular/core';
import User from '../../models/User';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.page.html',
  styleUrls: ['./tutorial.page.scss'],
})
export class TutorialPage implements OnInit {

  slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  constructor() { }

  ngOnInit() {
    User.tutorialSeen = true;
    User.save()
  }

}
