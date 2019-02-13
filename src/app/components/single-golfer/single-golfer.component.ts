import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
	selector: 'app-single-golfer',
	templateUrl: './single-golfer.component.html',
	styleUrls: ['./single-golfer.component.css']
})
export class SingleGolferComponent implements OnInit {
	golfer = {};
	constructor(
		private dataService: DataService,
		private activatedRoute: ActivatedRoute,
		private router: Router
	) {}

	ngOnInit() {
		this.golfer = this.dataService.golferData.filter(
			golfer => String(golfer.id) === this.activatedRoute.snapshot.params.id
		)[0];
	}

	updateGolfer(id) {
		this.router.navigateByUrl(`/golfers/add?id=${id}`);
	}
}
