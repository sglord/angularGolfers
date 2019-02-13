import { Component } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'angularCrud';

	constructor(private dataService: DataService) {
		this.dataService.getRoute('golfers');
		this.dataService.getRoute('courses')
	}
}
