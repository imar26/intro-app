import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './views/user/login/login.component';
import { RegisterComponent } from './views/user/register/register.component';
import { ProfileComponent } from './views/user/profile/profile.component';
import { WebsiteListComponent } from './views/website/website-list/website-list.component';

const appRoutes: Routes = [
	{ path : 'login', component: LoginComponent },	
	{ path : 'register', component: RegisterComponent },	
	{ path : 'profile/:userId', component: ProfileComponent },	
	{ path : 'profile/:userId/websites', component: WebsiteListComponent }	
];

export const routing = RouterModule.forRoot(appRoutes);