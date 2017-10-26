import { Component, OnInit } from '@angular/core';
import { Website } from '../../../models/website.model.client';
import { WEBSITES } from '../../../services/website.mock';

@Component({
  selector: 'app-website-list',
  templateUrl: './website-list.component.html',
  styleUrls: ['./website-list.component.css']
})
export class WebsiteListComponent implements OnInit {
	websites: Website[] = WEBSITES;
  	constructor() { }

  	ngOnInit() {
  	}

}
