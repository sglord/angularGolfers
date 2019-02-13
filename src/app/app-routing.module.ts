import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GolferListComponent } from './components/golfer-list/golfer-list.component';
import { NewGolferFormComponent } from './components/new-golfer-form/new-golfer-form.component';
import { SingleCourseComponent } from './components/single-course/single-course.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { NewCourseFormComponent } from './components/new-course-form/new-course-form.component';
import { SingleGolferComponent } from './components/single-golfer/single-golfer.component';

const routes: Routes = [
	{ path: 'golfers', component: GolferListComponent },
	{ path: 'golfers/add', component: NewGolferFormComponent },
	{ path: 'golfers/:id', component: SingleGolferComponent },
	{ path: 'courses', component: CourseListComponent },
	{ path: 'courses/add', component: NewCourseFormComponent },
	{ path: 'courses/:id', component: SingleCourseComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
