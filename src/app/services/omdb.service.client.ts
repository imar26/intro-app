import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import 'rxjs/Rx';

@Injectable()
export class OmdbService {
    constructor(private http: Http) {

    }
    searchMovie(title) {
        return this.http.get('http://www.omdbapi.com/?s='+title+'&apikey=f030e768')
            .map((response: Response) => {
                return response.json();
            })
    }
}