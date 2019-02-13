import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
	selector: 'app-course-list',
	templateUrl: './course-list.component.html',
	styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
	courses = this.dataService.courseData;
	constructor(private dataService: DataService) {}

	ngOnInit() {}
}
