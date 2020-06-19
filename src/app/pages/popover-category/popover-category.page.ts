import { Component, OnInit } from '@angular/core';
import {PopoverController} from '@ionic/angular';

@Component({
  selector: 'app-popover-category',
  templateUrl: './popover-category.page.html',
  styleUrls: ['./popover-category.page.scss'],
})
export class PopoverCategoryPage implements OnInit {

  constructor(public popover: PopoverController) { }

  doAction(action){
    console.log("doAction", action)
    this.close()
  }

  close(){
    this.popover.dismiss()
  }

  ngOnInit() {
  }

}
