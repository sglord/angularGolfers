import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, catchError, take } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class DataService {
	constructor(private http: HttpClient) {}
	courseData = [];
	golferData = [];

	getRoute(type) {
		return this.http.get(`http//localhost:3000/api/${type}`).pipe(
			tap((data: any[]) => {
				if (type === 'golfers') {
					this.golferData = data;
				}
				if (type === 'courses') {
					this.courseData = data;
				}
			}),
			take(1)
		);
	}
	putRoute(type, id, body) {
		return this.http
			.put(`http//localhost:3000/api/${type}/id/${id}`, body)
			.pipe(
				tap(() => {
					if (type === 'golfers') {
						this.golferData = this.golferData.map(golfer => {
							return golfer.id === id ? body : golfer;
						});
					}
					if (type === 'courses') {
						this.courseData = this.courseData.map(course => {
							return course.id === id ? body : course;
						});
					}
				}),
				catchError(err => {
					console.error(err);
					return of();
				}),
				take(1)
			);
	}
	postRoute(type, body) {
		return this.http.post(`http//localhost:3000/api/${type}`, body).pipe(
			tap((data: any[]) => {
				if (type === 'golfers') {
					this.golferData.push(data[0]);
				}
				if (type === 'courses') {
					this.golferData.push(data[0]);
				}
			}),
			catchError(err => {
				console.error(err);
				return of();
			}),
			take(1)
		);
	}
}
