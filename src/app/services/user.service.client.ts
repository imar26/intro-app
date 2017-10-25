import { User } from '../models/user.model.client';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
	users: User[] = [
		new User('123', 'alice', 'alice'),
		new User('234', 'bob', 'bob'),
		new User('345', 'charlie', 'charlie')
	];

	findUserByCrendentials(username, password) {
		for(var i=0; i<this.users.length; i++) {
			if(this.users[i].username == username && this.users[i].password == password) {
				return this.users[i];
			}
		}
	}

	findUserById(userId) {
		for(var i=0; i<this.users.length; i++) {
			if(this.users[i]._id == userId) {
				return this.users[i];
			}
		}
	}

	updateUser(user) {
		for(var i=0; i<this.users.length; i++) {
			if(this.users[i]._id == user._id) {
				this.users[i].firstName = user.firstName;
				this.users[i].lastName = user.lastName;
			}
			return this.users[i];
		}
	}
}