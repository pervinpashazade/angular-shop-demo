import { Component, OnInit } from '@angular/core';
import { Category } from './category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor() { }
  title = "Categories";
  categories:Category[] = [
    {id: 1, name:"Fashion"},
    {id: 2, name:"Electronics"},
    {id: 3, name:"Food & Drinks"},
    {id: 4, name:"Automotive"},
  ]
  ngOnInit(): void {
  }

}
