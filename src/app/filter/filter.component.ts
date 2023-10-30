import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Input } from '@angular/core';
import { MyObject } from '../laptop';
import { DataLoadService } from '../data-load.service';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  //passing data from parent to child component.
  @Input() dataFilter: MyObject = {};
  allLaptops: any[] = [];
  updatedLaptops: any[] = [];
  p = 1;
  count = 3;
  length = 0;

  constructor(private dataLoad: DataLoadService) { }

  ngOnInit(): void {
    //calling the service to load all the data in product.json
    this.dataLoad.getAllProducts().subscribe((data: any) => {
      this.allLaptops = data;
      this.updatedLaptops = data;
      this.length = this.updatedLaptops.length;
    });

  }

  filterUpdate() {
    //filtering all data based on checked details in parent component
    this.updatedLaptops = this.allLaptops.filter((x) => {
      return   this.dataFilter["updatedRAM"].includes(x.RAM) 
            || this.dataFilter["updatedSDD"].includes(x.SDD)
            || this.dataFilter["updatedHDD"].includes(x.HDD)
            || this.dataFilter["updatedOS"].includes(x.OS)
            || this.dataFilter["updatedSS"].includes(x.ScreenSize);
    });
    this.length = this.updatedLaptops.length;
  }

}
