import { Component, OnInit } from '@angular/core';
import { DataRetrieverService } from './data-retriever.service';

@Component({
	selector: 'favourite-items',
	templateUrl: './favourite-items.component.html',
	styleUrls: ['./favourite-items.component.css']
})
export class FavouriteItemsComponent implements OnInit {

	constructor(private dataRetrieverService: DataRetrieverService) { }

	ngOnInit(): void {
		this.dataRetrieverService
		.dummy()
		.then(result => console.log(JSON.stringify(result)))
		.catch(error => console.log(JSON.stringify(error)));
	}

}
