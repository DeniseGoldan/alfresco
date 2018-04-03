import { Component, OnInit } from '@angular/core';
import { FavouriteItem, DataRetrieverService } from './data-retriever.service';

@Component({
	selector: 'favourite-items',
	templateUrl: './favourite-items.component.html',
	styleUrls: ['./favourite-items.component.css']
})
export class FavouriteItemsComponent implements OnInit {

	favouriteItems: FavouriteItem[] = [];

	constructor(private dataRetrieverService: DataRetrieverService) { }

	ngOnInit(): void {
		this.dataRetrieverService
		.getFavouriteItemsArray()
		.then(result => {
			this.favouriteItems = result;
		})
		.catch(error => console.log(JSON.stringify(error)));
	}

}
