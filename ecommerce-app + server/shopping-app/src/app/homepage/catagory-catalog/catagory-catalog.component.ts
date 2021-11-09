import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-catagory-catalog',
  templateUrl: './catagory-catalog.component.html',
  styleUrls: ['./catagory-catalog.component.scss'],
})
export class CatagoryCatalogComponent implements OnInit {
  @Input() category: any;
  constructor() {}

  ngOnInit(): void {}
}
