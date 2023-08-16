import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { Products } from 'src/app/modules/products';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editflower',
  templateUrl: './editflower.component.html',
  styleUrls: ['./editflower.component.css']
})
export class EditflowerComponent implements OnInit{

  editFlower : Products =new Products

  constructor(private service : ProductService ,private actroute: ActivatedRoute, private router: Router){}

  ngOnInit(): void {
    let UpdateID = this.actroute.snapshot.params['id'];

    this.service.getflowerDetails(UpdateID).subscribe(Products => {
       this.editFlower= Products ;
    })
  }
  updateProduct(){
    this.service.editFlower(this.editFlower).subscribe (Products =>{
      Products = this.editFlower;
      this.router.navigateByUrl("/products");
    })
  }
}
