import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
	selector: 'app-golfer-list',
	templateUrl: './golfer-list.component.html',
	styleUrls: ['./golfer-list.component.css']
})
export class GolferListComponent implements OnInit {
	golfers = this.dataService.golferData;
	constructor(private dataService: DataService) {}

	ngOnInit() {}
}
