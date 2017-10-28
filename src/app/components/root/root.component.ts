import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DirlistingService } from '../../services/dirlisting.service';


@Component({
	selector: 'app-dirroot',
	templateUrl: './root.component.html',
	styleUrls: ['./root.component.css']
})
export class RootComponent implements OnInit {

	public directories:string[] = [];
	public files:object = {};
	public allfiles:string[] = [];
	public currfile:object = {};
	public routerpath:string;

	constructor(private dirListingService: DirlistingService, router: Router) {
		this.routerpath = router.url.slice(1);
	}

	ngOnInit() {
		
		this.dirListingService.getDirListing().subscribe( (direc) => {
			direc.forEach(dr => this.directories.push(dr));
		});
		this.dirListingService.getFiles().subscribe( (fil) => {
			this.files = fil;
			/* fil.forEach(fl => this.files.push(fl)); */
		});

		this.dirListingService.getAllFiles().subscribe( (fil) => {		
			fil.forEach(fl => {
				fl['opened'] = (fl.dirName == this.routerpath) ? true : false;
				this.allfiles.push(fl);
			});
		});
		
	}

	getDirectories() {
		return this.directories;
	}


	openFile(ro, i) {
		const currdirfiles = this.allfiles.filter( adir => (adir['dirName'] == ro))[0]['files'];
		console.log(currdirfiles);
		const clickedfile = currdirfiles.filter( afil => (afil['id'] == i) )[0];
		Object.keys(clickedfile).forEach( obj => {
			this.currfile[obj] = clickedfile[obj];
		});
		console.log(Object.keys(this.currfile));
		
		
		let group = document.getElementById('router-'+ro+'-files');
		let clicked = document.getElementById(ro+'-file-'+i);
		if (!clicked.classList.contains('open')){
			for (let i=0; i<group.children.length; i++) {
				group.children[i].classList.remove('open');
			}
			clicked.classList.add('open');
		}
	}



}
