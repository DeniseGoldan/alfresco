import { Component, OnInit } from '@angular/core';
import { DataRetrieverService } from './data-retriever.service';

@Component({
	selector: 'favourite-items',
	templateUrl: './favourite-items.component.html',
	styleUrls: ['./favourite-items.component.css']
})
export class FavouriteItemsComponent implements OnInit {

	private jsonEntriesBlocks: any;

	constructor(private dataRetrieverService: DataRetrieverService) { }

	ngOnInit(): void {
		this.dataRetrieverService
		.getEntriesBlocksArray()
		.then(result => {
			this.jsonEntriesBlocks = result;
			console.log(this.jsonEntriesBlocks);
		})
		.catch(error => console.log(JSON.stringify(error)));
	}

}
