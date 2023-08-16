import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProductComponent } from './components/product/product.component';
import { FlowerDetailsComponent } from './components/flower-details/flower-details.component';
import { DeleteflowerComponent } from './components/deleteflower/deleteflower.component';
import { EditflowerComponent } from './components/editflower/editflower.component';
import { AddflowerComponent } from './components/addflower/addflower.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"home",component:HomeComponent},
  {path:"about",component:AboutComponent},
  {path:"products",component:ProductComponent},
  {path:"viewproduct/:id",component:FlowerDetailsComponent},
  {path:"back",component: ProductComponent},
  {path:"delete/:id",component:DeleteflowerComponent},
  {path:"Edit/:id",component:EditflowerComponent},
  {path:"addNewFlower",component:AddflowerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
