import { TestBed, ComponentFixture } from '@angular/core/testing';
import { CardComponent } from './card/card.component';
import { FavouriteItem } from './data-retriever.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';

import { ItemType, DataRetrieverService } from './data-retriever.service';
import { FavouriteItemsComponent } from './favourite-items.component';

describe('FavouriteItemsComponent', () => {

  let fixture: ComponentFixture<FavouriteItemsComponent>;
  let component: FavouriteItemsComponent;
  let service: DataRetrieverService;
  let object: any = { "list": {"entries": [{"entry": {"target": {"file": {"name": "Partner Newsletter Jan2018.docx"}}}} ] }};
  let json : JSON = <JSON>this.object;

  beforeEach(async() => {
    TestBed.configureTestingModule({
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
      providers: [
        DataRetrieverService
      ]
    });
    fixture = TestBed.createComponent(FavouriteItemsComponent);
    service = fixture.debugElement.injector.get(DataRetrieverService);
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

  it('should have "Your favourite files and folders" as title', async() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('mat-card-title').innerHTML).toBe('Your favourite files and folders');
  });

  it('should render individual cards for given FavouriteItem instances', async() => {
    var firstItem = new FavouriteItem("A Newsletter January.docx", ItemType.File);
    var secondItem = 	new FavouriteItem("Another Newsletter February.docx", ItemType.File);
    var entriesToRender: FavouriteItem[] = [];
    entriesToRender.push(firstItem);
    entriesToRender.push(secondItem);
    fixture.componentInstance.favouriteItems = entriesToRender;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    console.log(compiled.querySelector('my-card'));
    // expect(compiled.querySelector('mat-card')).toContain("files");
  });

});
