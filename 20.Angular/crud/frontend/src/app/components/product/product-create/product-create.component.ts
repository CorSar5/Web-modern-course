import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  niceAttribute  = "any"

  constructor() { }

  ngOnInit(): void {
  }

  doSome(): void {
    console.log('Making something')
  }

}
