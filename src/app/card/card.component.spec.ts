import { TestBed, ComponentFixture } from '@angular/core/testing';
import { CardComponent } from './card.component';
import { FavouriteItem } from '../data-retriever.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';

import { ItemType } from '../data-retriever.service';


import { By } from "@angular/platform-browser";

describe('CardComponent', () => {

  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardComponent],
    	imports: [
    		BrowserModule,
    		BrowserAnimationsModule,
    		MatCardModule,
    		HttpClientModule
    	]
    });
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
  });

  it('should update @Input with given FavouriteItem instance', () => {
    var item = 	new FavouriteItem("MyFolder.pdf", "folder");
    component.favouriteItem = item;
    fixture.detectChanges();
    expect(component.favouriteItem).toBe(item);
  });

  it('should display a file icon when item type is file', () => {
    var item = 	new FavouriteItem("MyFile.pdf", ItemType.File);
    component.favouriteItem = item;
    fixture.detectChanges();
    let element = fixture.nativeElement;
    expect(element.querySelector('img').src).toContain("/assets/images/file_icon.png");
  });

  it('should display a folder icon when item type is folder', () => {
    var item = 	new FavouriteItem("MyFolder.pdf", ItemType.Folder);
    component.favouriteItem = item;
    fixture.detectChanges();
    let element = fixture.nativeElement;
    expect(element.querySelector('img').src).toContain("/assets/images/folder_icon.png");
  });


});
