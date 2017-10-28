import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RootComponent } from './components/root/root.component';

import { DirlistingService } from './services/dirlisting.service';

const appRoutes: Routes = [
	/* TODO: make these dynamic from service */
	{ path: '', component: RootComponent },
	{ path: 'photos', component: RootComponent },
	{ path: 'videos', component: RootComponent },
	{ path: 'vacations', component: RootComponent },
	{ path: 'expenses', component: RootComponent },
	{ path: 'projects', component: RootComponent }
];


@NgModule({
	declarations: [
		AppComponent,
		RootComponent
	],
	imports: [
		BrowserModule,
		RouterModule.forRoot(appRoutes),
		HttpModule
	],
	providers: [DirlistingService],
	bootstrap: [AppComponent]
})
export class AppModule { }
