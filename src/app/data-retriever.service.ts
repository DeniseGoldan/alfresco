import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataRetrieverService {

	constructor(private http: HttpClient) {}

	dummy(): Promise<any> {
		return this.http.get('https://s3.eu-west-2.amazonaws.com/alfresco-adf-app-test/favorites.json', {observe: 'response'})
		// return this.http.get('http://172.30.146.173:8080/api/qds/v1/suites/applications-summary', {observe: 'response'})
		.toPromise()
		.then(response => {
			return response;
			// return "AAAAAAAAAAAAAAAA";
		})
		.catch(error => {
			return error;
			// return "BBBBBBBBBBBBBBB";
		})
	}

}
