import { Component, OnInit } from '@angular/core';
import { Website } from '../../../models/website.model.client';
import { WEBSITES } from '../../../services/website.mock';
import { ActivatedRoute } from '@angular/router';
import { WebsiteService } from '../../../services/website.service.client';

@Component({
  selector: 'app-website-list',
  templateUrl: './website-list.component.html',
  styleUrls: ['./website-list.component.css']
})
export class WebsiteListComponent implements OnInit {
	websites = [];
	userId: String;
	name: String;
	id: String;
  	constructor(private activatedRoute: ActivatedRoute, private websiteService: WebsiteService) { }

  	ngOnInit() {
			this.activatedRoute.params.subscribe(
				params => {
					this.userId = params['userId'];
					this.websiteService.findWebsitesByUserId(this.userId)
						.subscribe((websites) => {
							this.websites = websites;
						});
				}
			);
		}
		
		createWebsite(name) {
			let website = {
				'developerId': this.userId,
				'name': name
			};
			this.websiteService.createWebsite(this.userId, website)
				.subscribe((status) => {
					this.ngOnInit();
				})
		}

		removeWebsite(websiteId) {
			this.websiteService.removeWebsite(this.userId, websiteId)
				.subscribe((websites) => {
					this.ngOnInit();
				})
		}

		selectWebsite(websiteId) {
			this.websiteService.findWebsiteById(this.userId, websiteId)
				.subscribe((website) => {
					this.id = website._id;
					this.name = website.name;
				})
		}

		updateWebsite(name) {
			let website = {
				'_id': this.id,
				'developerId': this.userId,
				'name': name
			};

			this.websiteService.updateWebsite(this.userId, website)
				.subscribe((websites) => {
					this.ngOnInit();
				})
		}

}
