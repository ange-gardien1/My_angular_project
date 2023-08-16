import { Component,OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { Products } from 'src/app/modules/products';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-deleteflower',
  templateUrl: './deleteflower.component.html',
  styleUrls: ['./deleteflower.component.css']
})
export class DeleteflowerComponent implements OnInit{


  constructor(private services : ProductService, private actroute : ActivatedRoute, private router : Router){

  }
  ngOnInit(): void {
    const ProductId = this.actroute.snapshot.params['id'];
    console.log(ProductId);

    this.services.deleteFlowerById(ProductId).subscribe(result => {
      this.router.navigateByUrl("/products");
    })
  }

}
