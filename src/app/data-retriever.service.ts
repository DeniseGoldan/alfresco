import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export enum ItemType {
	File = "file",
	Folder = "folder"
}

export class FavouriteItem {
	private name: string;
	private type: string;

	constructor(name: string, type: string) {
		this.name = name;
		this.type = type;
	}
}

@Injectable()
export class DataRetrieverService {

	private endpointUrl: string = "https://s3.eu-west-2.amazonaws.com/alfresco-adf-app-test/favorites.json";

	constructor(private http: HttpClient) {}

	public getFavouriteItemsArray(): Promise<FavouriteItem[]> {
		return this.getResponseBody()
		.then(responseBody => {
			var extractedEntries: FavouriteItem[] = [];
			var currentItem: FavouriteItem;

			responseBody.list.entries.forEach(function (element) {
				if (element.entry.target.file) {
					currentItem = new FavouriteItem(element.entry.target.file.name, ItemType.File);
				} else if (element.entry.target.folder) {
					currentItem = new FavouriteItem(element.entry.target.folder.name, ItemType.Folder);
				}
				extractedEntries.push(currentItem);
			});

			return extractedEntries;
		})
		.catch(error => { return error;	})
	}

	public getResponseBody(): Promise<any> {
		return this.http.get(this.endpointUrl, {observe: "response"})
		.toPromise()
		.then(response => { return response.body; })
		.catch(error => {	return error;	})
	}

}
