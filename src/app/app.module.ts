import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './views/user/login/login.component';
import { RegisterComponent } from './views/user/register/register.component';

import { routing } from './app.routing';
import { ProfileComponent } from './views/user/profile/profile.component';

import { UserService } from './services/user.service.client';
import { WidgetService } from './services/widget.service.client';
import { WebsiteService } from './services/website.service.client';
import { WebsiteListComponent } from './views/website/website-list/website-list.component';

import { HttpModule } from '@angular/http';
import { WidgetListComponent } from './views/widget/widget-list/widget-list.component';
import { WidgetHeadingComponent } from './views/widget/widget-heading/widget-heading.component';
import { OmdbTestComponent } from './omdb-test/omdb-test.component';
import { OmdbService } from './services/omdb.service.client';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    WebsiteListComponent,
    WidgetListComponent,
    WidgetHeadingComponent,
    OmdbTestComponent
  ],
  imports: [
    BrowserModule, routing, FormsModule, HttpModule
  ],
  providers: [UserService, WidgetService, WebsiteService, OmdbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
