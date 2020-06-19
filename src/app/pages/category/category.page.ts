import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { PopoverCategoryPage } from '../popover-category/popover-category.page';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {
  title: string = '';
  selectedCat: string = '';
  constructor(
    private activatedRoute: ActivatedRoute,
    public popoverController: PopoverController) { }

  segmentChanged(e){
    console.log(e)
  }

  async presentPopover(ev: any) {
    console.log("apri popover")
    const popover = await this.popoverController.create({
      component: PopoverCategoryPage,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true
    });
    return await popover.present();
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      console.log('Params: ', params);
      if(params.childs == []){
        //this.showMap = true;
        //this.showMessageBox = true;
        //this.showSegment = true;
      }
      this.selectedCat = params.id
      this.title = params.name? params.name: 'Cosa ti serve oggi?'
    });
  }

}
