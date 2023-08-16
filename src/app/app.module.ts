import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationPageComponent } from './navigation-page/navigation-page.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProductComponent } from './components/product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { FlowerDetailsComponent } from './components/flower-details/flower-details.component';
import { DeleteflowerComponent } from './components/deleteflower/deleteflower.component';
import { EditflowerComponent } from './components/editflower/editflower.component';
import { FormsModule } from '@angular/forms';
import { AddflowerComponent } from './components/addflower/addflower.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationPageComponent,
    HomeComponent,
    AboutComponent,
    ProductComponent,
    FlowerDetailsComponent,
    DeleteflowerComponent,
    EditflowerComponent,
    AddflowerComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
