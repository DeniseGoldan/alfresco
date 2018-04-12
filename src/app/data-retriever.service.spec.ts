import { TestBed, ComponentFixture } from '@angular/core/testing';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { ItemType, DataRetrieverService } from './data-retriever.service';
import { HttpClient } from '@angular/common/http';


describe('DataRetrieverService', () => {

  let service: DataRetrieverService;
  let object: any = { "list": {"entries": [{"entry": {"target": {"file": {"name": "Partner Newsletter Jan2018.docx"}}}} ] }};
  let json : JSON = <JSON>this.object;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      providers: [ DataRetrieverService ]
    });
    service = TestBed.get(DataRetrieverService);
  });

  it('should return some data from the endpoint', async() => {
    spyOn(service, "getResponseBody").and.callFake(function () {
       var dummyPromise = Promise.resolve(this.json);
       console.log("calling getResponseBody");
       console.log(dummyPromise);
       return dummyPromise;
     });

    service.getResponseBody()
    .then(
      results => {
        console.log("calling getResponseBody");
        console.log(results);
      }
    );
  });

  // it('should initialize a FavouriteItem instance', async() => {
  //   spyOn(service, "getResponseBody").and.callFake(function () {
  //     var vari = Promise.resolve(this.json);
  //     console.log(this);
  //     return vari;
  //   });
  //   service.getFavouriteItemsArray().then(
  //     results=> {
  //       var expectedItem = 	new FavouriteItem("Partner Newsletter Jan2018.docx", "file");
  //       // expect(results).toContain(expectedItem);
  //       console.log(results);
  //     }
  //   );
  //   expect(service.getResponseBody).toHaveBeenCalled();
  //   // console.log(service.getResponseBody);
  //   // expect(service.getFavouriteItemsArray).toHaveBeenCalled();
  //   // var expectedItem = 	new FavouriteItem("Partner Newsletter Jan2018.docx", "file");
  //   // expect(favouriteItems).toBeTruthy();
  //   // expect(favouriteItems).toContain(expectedItem);
  //   // async.done();
  // });

  // it('should initialize a FavouriteItem instance', async() => {
  //   spyOn(service, "getFavouriteItemsArray").and.stub();
  //   spyOn(service, "getFavouriteItemsArray").and.callFake(function () {
  //     var item = 	new FavouriteItem("Partner Newsletter Jan2018.docx", ItemType.File);
  //     var extractedEntries: FavouriteItem[] = [];
  //     extractedEntries.push(item);
  //     return extractedEntries;
  //     // var vari = Promise.resolve(this.json);
  //     // console.log(this);
  //     // return vari;
  //   });
  //   fixture = TestBed.createComponent(FavouriteItemsComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  //   expect(service.getFavouriteItemsArray).toHaveBeenCalled();
  //   var item = 	new FavouriteItem("Partner Newsletter Jan2018.docx", ItemType.File);
  //   // var favs = component.favouriteItems;
  //   // fixture.detectChanges();
  //   expect(component.favouriteItems).toContain(item);
  // });


});
