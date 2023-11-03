import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductsComponent } from '../products/products.component';
import { MyObject } from '../laptop';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  @ViewChild(ProductsComponent) child: ProductsComponent | undefined;


  constructor() { }

  ngOnInit(): void {

  }

   onFilterChange(filterData: MyObject) {
    // calling the function in second child
   this.child?.filterUpdate(filterData);
  };

 

}
