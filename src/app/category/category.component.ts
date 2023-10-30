import { Component, OnInit, ViewChild } from '@angular/core';
import { MyObject } from '../laptop';
import { HttpClient } from '@angular/common/http';
import { FilterComponent } from '../filter/filter.component';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  @ViewChild(FilterComponent) child: FilterComponent | undefined;
  p = 1;
  count = 5;
  RAM = ["4GB", "8GB", "16GB", "32GB"];
  SDD = ["128GB", "256GB", "512GB"];
  HDD = ["256GB", "500GB", "1TB", "2TB"];
  SS = ["12 inches", "14 inches", "16 inches"];
  OS = ["Windows", "Mac", "Linux"];


  filterData: MyObject = {
    "updatedRAM": [],
    "updatedSDD": [],
    "updatedHDD": [],
    "updatedSS": [],
    "updatedOS": []

  }


  constructor() { }

  ngOnInit(): void {

  }

  onFilterChange(event: Event, value: string) {

    const a = (<HTMLInputElement>event.target).name;
    if ((<HTMLInputElement>event.target).checked) {
      //adding the checked data on click
      if (value) {
        this.filterData[a].push(value);
      }
    } else {
      //removing data on un-click event
      this.filterData[a] = this.filterData[a].filter(val => val !== value)
    }
  }

  findSelectedItems() {
    //communicating with child's filter function
    this.child?.filterUpdate();
  }

}
