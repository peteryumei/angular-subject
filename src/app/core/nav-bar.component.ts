import { Component } from '@angular/core';
import { IStudent } from '../share/models/student';
import { StudentService } from '../student/student.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  students: IStudent[] = [];

constructor(private studentService: StudentService){

}
  ngOnInit(): void {
    this.getStudents();
  }

getStudents(){
  this.studentService.getStudents().subscribe({
    next: students => this.students = students,
    error: err => console.log(err)
  })
}

}
