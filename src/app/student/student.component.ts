import { Component, OnInit } from '@angular/core';
import { StudentService } from './student.service';
import { IStudent } from '../share/models/student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  students!: IStudent[];

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents() {
    this.studentService.getStudents().subscribe({
      next: students => this.students = students,
      error: err => console.log(err)
    })
  }

  addStudents() {
    this.studentService.addStudents();
  }
  
}
