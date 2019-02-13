import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { ActivatedRoute } from '@angular/router';
@Component({
	selector: 'app-new-golfer-form',
	templateUrl: './new-golfer-form.component.html',
	styleUrls: ['./new-golfer-form.component.css']
})
export class NewGolferFormComponent implements OnInit {
	update = false;
	id = null;

	profileForm = this.fb.group({
		name: [''],
		email: [''],
		phone: [''],
		handicap: [''],
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
			let golfer = this.dataService.golferData.filter(
				golfer => String(golfer.id) === this.id
			)[0];
			console.log(golfer);
			this.profileForm.get('name').setValue(golfer.name);
			this.profileForm.get('email').setValue(golfer.email);
			this.profileForm.get('phone').setValue(golfer.phone);
			this.profileForm.get('handicap').setValue(golfer.handicap);
			this.profileForm.get('imgUrl').setValue(golfer.imgUrl);
		}
	}
	submit() {
		if (this.update) {
			this.dataService
				.putRoute('golfers', this.id, this.profileForm.getRawValue())
				.subscribe();
		} else {
			this.dataService
				.postRoute('golfers', this.profileForm.getRawValue())
				.subscribe();
		}
	}
}
