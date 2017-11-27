import { Injectable } from "@angular/core";
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class WebsiteService {
    constructor(private http: Http) {
    }

    findWebsitesByUserId(userId) {
        return this.http.get('http://localhost:3100/api/user/'+userId+'/website')
            .map((response: Response) => {
				return response.json();
			});
    }

    findWebsiteById(userId, websiteId) {
        return this.http.get('http://localhost:3100/api/user/'+userId+'/website/'+websiteId)
            .map((response: Response) => {
				return response.json();
			});
    }

    createWebsite(userId, website) {
        return this.http.post('http://localhost:3100/api/user/'+userId+'/website', website)
            .map((response: Response) => {
                return response.json();
            });
    }

    updateWebsite(userId, website) {
        return this.http.put('http://localhost:3100/api/user/'+userId+'/website', website)
            .map((response: Response) => {
                return response.json();
            });
    }

    removeWebsite(userId, websiteId) {
        return this.http.delete('http://localhost:3100/api/user/'+userId+'/website/'+websiteId)
            .map((response: Response) => {
                return response.json();
            });
    }
}