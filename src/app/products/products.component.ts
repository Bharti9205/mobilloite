import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Input } from '@angular/core';
import { MyObject } from '../laptop';
import { DataLoadService } from '../data-load.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

   //passing data from parent to child component.
   @Input() dataFilter: MyObject = {};

   allLaptops: any[] = [];
   updatedLaptops: any[] = [];
   laptopsToShow: any[] =[];
  

  constructor(private dataLoad: DataLoadService) { }

  ngOnInit(): void {
    //calling the service to load all the data in product.json
    this.dataLoad.getAllProducts().subscribe((data: any) => {
      this.allLaptops = data;
      this.updatedLaptops = data;
      this.laptopsToShow = this.updatedLaptops.slice(0, 3);
    });
  }


  filterUpdate(filterData: MyObject) {
    //filtering all data based on checked details in parent component
    this.updatedLaptops = this.allLaptops.filter((x) => {
      console.log("1")
      return filterData["updatedRAM"].includes(x.RAM) 
            || filterData["updatedSDD"].includes(x.SDD)
            || filterData["updatedHDD"].includes(x.HDD)
            || filterData["updatedOS"].includes(x.OS)
            || filterData["updatedSS"].includes(x.ScreenSize);
    });
    console.log(this.updatedLaptops);
    // if no data is there to match the filter
    if(this.updatedLaptops.length===0){
      alert("No data found!!");
    }
    this.laptopsToShow = this.updatedLaptops.slice(0, 3);
  }



  showMore() {
    if(this.updatedLaptops.length===0 || this.laptopsToShow.length===this.updatedLaptops.length){
      alert("No data found!!")
    }
    const currentLength = this.laptopsToShow.length;
    const nextProducts = this.updatedLaptops.slice(currentLength, currentLength + 3);
    console.log(nextProducts.length);
    this.laptopsToShow = this.laptopsToShow.concat(nextProducts);
  }

}
