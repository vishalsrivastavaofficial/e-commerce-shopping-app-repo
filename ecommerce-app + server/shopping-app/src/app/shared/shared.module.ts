import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { TextInputComponent } from './components/forms/text-input/text-input.component';
import { ButtonInputComponent } from './components/forms/button-input/button-input.component';
import { CartComponent } from './components/cart/cart.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    TextInputComponent,
    ButtonInputComponent,
    CartComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    RouterModule,
    TextInputComponent,
    ButtonInputComponent,
    CartComponent,
  ],
})
export class SharedModule {}
