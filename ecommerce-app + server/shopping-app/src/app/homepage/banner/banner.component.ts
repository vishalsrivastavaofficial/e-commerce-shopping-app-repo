import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {
  mySlideImages: any = [];
  myCarouselImages: any = [];
  mySlideOptions: any = {};
  myCarouselOptions: any = {};

  data = [
    {
      bannerImageUrl: '/static/images/offers/offer1.jpg',
      bannerImageAlt: 'Independence Day Deal - 25% off on shampoo',
      isActive: true,
      order: 1,
      id: '5b6c38156cb7d770b7010ccc',
    },
    {
      bannerImageUrl: '/static/images/offers/offer2.jpg',
      bannerImageAlt: 'Independence Day Deal - Rs120 off on surf',
      isActive: true,
      order: 2,
      id: '5b6c38336cb7d770b7010ccd',
    },
    {
      bannerImageUrl: '/static/images/offers/offer3.jpg',
      bannerImageAlt: 'Independence Day Deal - Rs99 off on domex',
      isActive: true,
      order: 3,
      id: '5b6c38456cb7d770b7010cce',
    },
    {
      bannerImageUrl: '/static/images/offers/offer4.jpg',
      bannerImageAlt: 'Independence Day Deal - Rs99 off on bodywash',
      isActive: true,
      order: 4,
      id: '5b6c38576cb7d770b7010ccf',
    },
    {
      bannerImageUrl: '/static/images/offers/offer5.jpg',
      bannerImageAlt: 'Independence Day Deal - Rs70 off on tea',
      isActive: true,
      order: 5,
      id: '5b6c386b6cb7d770b7010cd0',
    },
  ];

  constructor() {}

  ngOnInit(): void {
    this.mySlideImages = this.data.map(
      (i) => `http://localhost:5001${i.bannerImageUrl}`
    );
    this.myCarouselImages = this.data.map(
      (i) => `https://picsum.photos/640/480?image=${i}`
    );
    this.mySlideOptions = { items: 1, dots: true, nav: false };
    this.myCarouselOptions = { items: 3, dots: true, nav: true };
  }
}
