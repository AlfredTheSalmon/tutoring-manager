import { NgModule } from "@angular/core";
import { HeaderComponent } from './header/header.component';
import { DirectNavigationComponent } from './direct-navigation/direct-navigation.component';
import { FunctionsComponent } from './functions/functions.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    HeaderComponent,
    DirectNavigationComponent,
    FunctionsComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    DirectNavigationComponent,
    FunctionsComponent,
    FooterComponent
  ]
})
export class SharedModule { }