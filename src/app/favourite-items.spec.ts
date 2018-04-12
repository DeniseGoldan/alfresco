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

  beforeEach(async() => {
    TestBed.configureTestingModule({
      declarations: [
        FavouriteItemsComponent,
        CardComponent
      ],
      imports: [
        BrowserModule,
        MatCardModule,
        HttpClientModule
      ],
      providers: [
        DataRetrieverService
      ]
    });
    fixture = TestBed.createComponent(FavouriteItemsComponent);
  });

  it('should have "Your favourite files and folders" as title', async() => {
    const nativeElement = fixture.debugElement.nativeElement;
    expect(nativeElement.querySelector('mat-card-title').innerHTML).toBe('Your favourite files and folders');
  });

  it('should display two individual cards for the two given FavouriteItem instances', async() => {
    var firstItem = new FavouriteItem("A Newsletter January.docx", ItemType.File);
    var secondItem = 	new FavouriteItem("Another Newsletter February.docx", ItemType.File);

    var entriesToRender: FavouriteItem[] = [];

    entriesToRender.push(firstItem);
    entriesToRender.push(secondItem);

    fixture.componentInstance.favouriteItems = entriesToRender;
    fixture.detectChanges();
  
    const nativeElement = fixture.debugElement.nativeElement;
    expect(nativeElement.getElementsByTagName('my-card').length).toBe(2);
  });

});
