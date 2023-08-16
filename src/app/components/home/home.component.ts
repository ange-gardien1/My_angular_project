import { Component,OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { Products } from 'src/app/modules/products';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  Flowerlist: Products[] =[];
  MostSoldProducts: Products[] = [];

  constructor(private service : ProductService) {}

  ngOnInit(): void {
    this.service.getAllProducts().subscribe (result =>{
      this.Flowerlist = result;

      this.MostSoldProducts = this.Flowerlist.filter( flower => flower.price > 3);
    })
  }

}
