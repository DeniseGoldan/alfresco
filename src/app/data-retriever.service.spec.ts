import { TestBed, ComponentFixture } from '@angular/core/testing';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { HttpClient } from '@angular/common/http';
import { ItemType, FavouriteItem, DataRetrieverService } from './data-retriever.service';

describe('DataRetrieverService', () => {

  let service: DataRetrieverService;
  let object: any = { "list": {"entries": [{"entry": {"target": {"file": {"name": "Partner Newsletter Jan2018.docx"}}}} ] }};
  let json: JSON = <JSON>object;
  let expectedFavouriteItem = new FavouriteItem("Partner Newsletter Jan2018.docx", ItemType.File);

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      providers: [ DataRetrieverService ]
    });
    service = TestBed.get(DataRetrieverService);
  });

  it('should extract a favourite item instance for each entry', async() => {
    spyOn(service, "getResponseBody").and.returnValue(Promise.resolve(json));
    service.getFavouriteItemsArray()
    .then( results => { expect(results[0]).toEqual(expectedFavouriteItem); });
    expect(service.getResponseBody).toHaveBeenCalled();

  });

});
