import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { ReactiveFormsModule } from '@angular/forms';
import { DataService } from './services/data.service';
import { CourseListComponent } from './components/course-list/course-list.component';
import { SingleCourseComponent } from './components/single-course/single-course.component';
import { GolferListComponent } from './components/golfer-list/golfer-list.component';
import { SingleGolferComponent } from './components/single-golfer/single-golfer.component';
import { NewGolferFormComponent } from './components/new-golfer-form/new-golfer-form.component';
import { NewCourseFormComponent } from './components/new-course-form/new-course-form.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { HttpClientModule } from '@angular/common/http';
@NgModule({
	declarations: [
		AppComponent,
		CourseListComponent,
		SingleCourseComponent,
		GolferListComponent,
		SingleGolferComponent,
		NewGolferFormComponent,
		NewCourseFormComponent,
		NavbarComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MatButtonModule,
		MatMenuModule,
		MatCardModule,
		MatInputModule,
		MatFormFieldModule,
		ReactiveFormsModule,
		HttpClientModule
	],
	providers: [DataService],
	bootstrap: [AppComponent]
})
export class AppModule {}
