import { Component, Input } from '@angular/core';
import { FavouriteItem } from '../data-retriever.service';

@Component({
	selector: 'my-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.css']
})

export class CardComponent {

	@Input() favouriteItem: FavouriteItem;

}
