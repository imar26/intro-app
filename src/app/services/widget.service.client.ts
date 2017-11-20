import { Widget } from '../models/widget.model.client';
import { WIDGETS } from './widget.mock.client';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class WidgetService {

	widgets: Widget[] = WIDGETS;

	constructor(private http:Http) {

	}

	findAllWidgets() {
		return this.http.get('http://localhost:3100/api/widget')
			.map((response: Response) => {
				return response.json();
			});
	}

}