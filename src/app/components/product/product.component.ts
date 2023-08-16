import { Component,OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { Products } from 'src/app/modules/products';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
  search: string = "";
  flowerList : Products [] = [];
  FloweSearchList: Products [] = [];

  constructor(private service:ProductService){}
  ngOnInit(): void {
    this.service.getAllProducts().subscribe (result =>{
      this.flowerList = result;
    })
  }
  flowerSearch() {
    alert(this.search);
    this.service.searchFlowerByName(this.search).subscribe(results => {
      this.FloweSearchList = results;
    })
  }
}

