import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatagoryCatalogComponent } from './catagory-catalog.component';

describe('CatagoryCatalogComponent', () => {
  let component: CatagoryCatalogComponent;
  let fixture: ComponentFixture<CatagoryCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatagoryCatalogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatagoryCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
