import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ApiServiceService } from '../api-service.service';
@Component({
  selector: 'app-product-home-page',
  templateUrl: './product-home-page.component.html',
  styleUrls: ['./product-home-page.component.css']
})
export class ProductHomePageComponent implements OnInit {
  productList:any;
  constructor(private router: Router, private service: ApiServiceService) {
    this.getProductList();
   }

  ngOnInit(): void {
  }
 
  getProductList() {
    this.service.getContentJSON().subscribe(data => {
      this.productList = data;
      console.log(JSON.stringify(this.productList));
      //alert(JSON.stringify(this.productList));
    }, 
     err => {
    
      console.log('error: ', err);
    });
  }
  doLogout(){
    this.router.navigateByUrl('login');
  }
}
