import { Component, OnInit } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }
  title = "Product List";
  productFilter = "";
  products : Product[] = [
    {id: 1, name:"Iphone 8+", price:1800, categoryId: 1, description:"test iphone 8+", imgUrl:"https://images.unsplash.com/photo-1514473776127-61e2dc1dded3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80"},
    {id: 2, name:"Xiaomi Mi A2", price:600, categoryId: 1, description:"test xiaomi mi a2", imgUrl:"https://images.unsplash.com/photo-1598327106026-d9521da673d1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=282&q=80"},
    {id: 3, name:"HP Notebook", price:2100, categoryId: 2, description:"test hp notebook", imgUrl:"https://images.unsplash.com/photo-1565375706404-082d37dd1f5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80"},
    {id: 4, name:"Iphone 8+", price:1800, categoryId: 1, description:"test iphone 8+", imgUrl:"https://images.unsplash.com/photo-1514473776127-61e2dc1dded3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80"}
    
  ]
  ngOnInit(): void {
  }

  addToCart(product){
    alert(product.name + " added to card");
  }
}
