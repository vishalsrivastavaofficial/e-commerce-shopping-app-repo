import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GetCategoriesAction } from 'src/app/store/actions/category.action';
import AppState from 'src/app/store/models/app-state.model';
import { Category } from 'src/app/store/models/category.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  categories$: Observable<Category[]> | undefined;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.categories$ = this.store.select((store) => store.category.categories);
    this.store.dispatch(new GetCategoriesAction());
  }
}
