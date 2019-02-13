import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
	selector: 'app-single-course',
	templateUrl: './single-course.component.html',
	styleUrls: ['./single-course.component.css']
})
export class SingleCourseComponent implements OnInit {
	course = {};

	constructor(
		private dataService: DataService,
		private activatedRoute: ActivatedRoute,
		private router: Router
	) {}

	ngOnInit() {
		this.course = this.dataService.courseData.filter(
			course => String(course.id) === this.activatedRoute.snapshot.params.id
		)[0];
	}
	updateCourse(id) {
		this.router.navigateByUrl(`/courses/add?id=${id}`);
	}
}
