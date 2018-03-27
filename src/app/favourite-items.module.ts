import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';

import { FavouriteItemsComponent } from './favourite-items.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    FavouriteItemsComponent,
		CardComponent
  ],
  imports: [
    BrowserModule,
		BrowserAnimationsModule,
		MatCheckboxModule,
		MatCardModule
  ],
  providers: [],
  bootstrap: [FavouriteItemsComponent]
})
export class FavouriteItemsModule { }
