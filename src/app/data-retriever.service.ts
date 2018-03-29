import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataRetrieverService {

	private endpointUrl: string = "https://s3.eu-west-2.amazonaws.com/alfresco-adf-app-test/favorites.json";

	constructor(private http: HttpClient) {}

	public getEntriesArray(): Promise<any> {
		return this.getResponseBody()
		.then(responseBody => {return responseBody.list.entries})
		.catch(error => {
			return error;
		})
	}

	private getResponseBody(): Promise<any> {
		return this.http.get(this.endpointUrl, {observe: "response"})
		.toPromise()
		.then(response => {
			return response.body;
		})
		.catch(error => {
			return error;
		})
	}

}
