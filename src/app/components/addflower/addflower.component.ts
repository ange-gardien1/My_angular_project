import { Component,OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { Products } from 'src/app/modules/products';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addflower',
  templateUrl: './addflower.component.html',
  styleUrls: ['./addflower.component.css']
})
export class AddflowerComponent implements OnInit{

  newFlower : Products = new Products;

  constructor(private service: ProductService, private activeroute: Router){ }
  
ngOnInit(): void {
  

}
addNewFlower(){
  this.service.addFlower(this.newFlower).subscribe(Products =>{
    this.activeroute.navigateByUrl('/products')
  })
}
}
