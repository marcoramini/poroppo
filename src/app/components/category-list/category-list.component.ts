import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../models/category';
import { Subscription } from 'rxjs';
import { timeout } from 'rxjs/operators';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
})
export class CategoryListComponent implements OnInit, OnDestroy {
  @Input() cat: string;
  @Input() mode: string;
  @Output() catChanged = new EventEmitter<any>()
  @Output() endSubs = new EventEmitter<Category>()
  categoryList: Category[];
  categorySubscription: Subscription;
  categoryStack: Category[];
  currentCategory: Category;
  rootCategory: Category = new Category()
  constructor(private catService: CategoryService) {
    this.categoryList = []
    this.currentCategory = null;
    this.categoryStack = [];
    this.rootCategory.id = 'root'
    this.rootCategory.name = 'Categorie'
   }

   getSubCategories(e,cat){
    console.log(e,cat)
     if(cat.childs.length === 0){
       this.endSubs.emit(cat)
     }else{
      this.categoryStack.push(new Category(this.currentCategory || null));
      console.log(this.categoryStack)
      this.currentCategory = new Category(cat);
      this.loadCategories(cat.id);
      this.catChanged.emit(this.currentCategory)
     }

   }
  hasDetails(cat){
    if(cat.childs.length > 0){
      return true
    }else{
      return false
    }
  }
  loadCategories(catId){
    console.log("carico, catId")
    let categoryId = (catId === 'root')? null: catId;
    this.categorySubscription = this.catService.getCategories(categoryId).subscribe(data=>{
      if(catId === null){
        //console.log('root')
        this.rootCategory.childs = data.map(cid => cid.id)
        this.categoryList = [this.rootCategory];
        //this.currentCategory = this.rootCategory;
      }else{
        this.categoryList = data;
      }
      console.log(this.categoryList);
      //console.log(data)
      //console.log("cat changed")
    })
  }
  goBack(){
    if(this.categoryStack.length > 0){
      let nextCat = new Category(this.categoryStack.pop())
      console.log(nextCat, this.categoryStack);
      this.loadCategories(nextCat.id);
      this.currentCategory = nextCat;
      this.catChanged.emit(this.currentCategory)
    }
  }

  ngOnInit() {
    this.loadCategories(null)
  }
  ngOnDestroy() {
    this.categorySubscription.unsubscribe()
  }
}
