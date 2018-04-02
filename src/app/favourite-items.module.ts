import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';

import { FavouriteItemsComponent } from './favourite-items.component';
import { CardComponent } from './card/card.component';

import { DataRetrieverService } from './data-retriever.service';

@NgModule({
	declarations: [
		FavouriteItemsComponent,
		CardComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		MatCardModule,
		HttpClientModule
	],
	providers: [ DataRetrieverService ],
	bootstrap: [ FavouriteItemsComponent ]
})
export class FavouriteItemsModule { }
