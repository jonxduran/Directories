import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DirlistingService {

	constructor(public http: Http) { 
		/* console.log('dirlistingservice connected'); */
	}

	getDirListing() {
		return this.http.get("./../../assets/dir_listing.json").map(res => res.json());
	}

	getFiles() {
		return this.http.get("./../../assets/file.json").map(res => res.json());
	}

	getAllFiles() {
		return this.http.get("./../../assets/allfiles.json").map(res => res.json());
	}

}
