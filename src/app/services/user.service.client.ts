import { User } from '../models/user.model.client';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class UserService {

	constructor(private http:Http) {

	}

	findUserByCrendentials(username, password) {
		return this.http.get("http://localhost:3100/api/user?username="+username+"&password="+password)
			.map((response: Response) => {
				return response.json();
			});
	}

	findUserById(userId) {
		return this.http.get("http://localhost:3100/api/user/"+userId)
			.map((response: Response) => {
				return response.json();
			});
	}

	updateUser(user) {
		// for(var i=0; i<this.users.length; i++) {
		// 	if(this.users[i]._id == user._id) {
		// 		this.users[i].firstName = user.firstName;
		// 		this.users[i].lastName = user.lastName;
		// 	}
		// 	return this.users[i];
		// }
	}
}