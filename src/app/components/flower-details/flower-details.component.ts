import { Component,OnInit } from '@angular/core';
import { Products } from 'src/app/modules/products';
import { ProductService } from 'src/app/product.service';
import { ActivatedRoute, Router, Route } from '@angular/router';

@Component({
  selector: 'app-flower-details',
  templateUrl: './flower-details.component.html',
  styleUrls: ['./flower-details.component.css']
})
export class FlowerDetailsComponent implements OnInit{

  detailedFlower: Products = new Products ();
  editFlower : Products =new Products

  constructor(private service : ProductService, private route: Router, private activateRouter: ActivatedRoute){}

  ngOnInit(): void {
    
     const stringFlowerId = this.activateRouter.snapshot.paramMap.get('id');
     let FlowerId = Number(stringFlowerId);
     this.service.getflowerDetails(FlowerId).subscribe(Products =>{
      this.detailedFlower = Products;
     })
     let UpdateID = this.activateRouter.snapshot.params['id'];

     this.service.getflowerDetails(UpdateID).subscribe(Products => {
        this.editFlower= Products ;
     })
   }
   updateProduct(){
     this.service.editFlower(this.editFlower).subscribe (Products =>{
       Products = this.editFlower;
       this.route.navigateByUrl("/");
     })
     const ProductId = this.activateRouter.snapshot.params['id'];
    console.log(ProductId);

    this.service.deleteFlowerById(ProductId).subscribe(result => {
      this.route.navigateByUrl("/");
    })
  }

}
