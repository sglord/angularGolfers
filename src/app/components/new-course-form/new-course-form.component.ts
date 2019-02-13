import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { ActivatedRoute } from '@angular/router';
@Component({
	selector: 'app-new-course-form',
	templateUrl: './new-course-form.component.html',
	styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent implements OnInit {
	update = false;
	id = null;

	profileForm = this.fb.group({
		name: [''],
		street: [''],
		city: [''],
		state: [''],
		zip: [''],
		description: [''],
		par: [''],
		imgUrl: ['']
	});

	constructor(
		private fb: FormBuilder,
		private dataService: DataService,
		private activatedRoute: ActivatedRoute
	) {}
	ngOnInit() {
		if (this.activatedRoute.snapshot.queryParams.id) {
			this.update = true;
			this.id = this.activatedRoute.snapshot.queryParams.id;
		}

		if (this.update) {
			let course = this.dataService.courseData.filter(
				course => String(course.id) === this.id
			)[0];
			console.log(course);
			this.profileForm.get('name').setValue(course.name);
			this.profileForm.get('street').setValue(course.street);
			this.profileForm.get('city').setValue(course.city);
			this.profileForm.get('zip').setValue(course.zip);
			this.profileForm.get('par').setValue(course.par);
			this.profileForm.get('description').setValue(course.description);
			this.profileForm.get('imgUrl').setValue(course.imgUrl);
		}
	}
	submit() {
		console.log(this.profileForm, this.id);
	}
}
