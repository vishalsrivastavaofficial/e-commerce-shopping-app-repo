import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { RegisterPageComponent } from './register-page/register-page.component';

const routes: Routes = [
  {
    path: 'register',
    component: RegisterPageComponent,
  },
  {
    path: '',
    redirectTo: 'register',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, SharedModule],
})
export class RegisterRoutingModule {}
