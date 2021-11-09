import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/store/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() productData : any;
  constructor() {
   }

  ngOnInit(): void {
  }

}
