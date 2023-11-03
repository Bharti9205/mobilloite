import { Component, OnInit, SimpleChanges, EventEmitter, Output } from '@angular/core';
import { MyObject } from '../laptop';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  @Output() applyFilter = new EventEmitter<any>();

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
    //communicating with parent
    this.applyFilter.emit(this.filterData);
  }

}
