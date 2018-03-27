import { Component } from '@angular/core';

enum ItemType {
  File = "file",
  Directory = "directory",
}

@Component({
  selector: 'my-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent {

	private favouriteItemTitle: string;
	private itemType: ItemType;

	constructor(){
		this.favouriteItemTitle = "Name of the favourite resource";
	 	this.itemType = ItemType.File;
  }

}
