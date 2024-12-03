import { Injectable } from '@angular/core';
import { IStudent, Student } from '../share/models/student';
import { Subject, BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  students: IStudent[] = [{
    id: 1,
    name: 'Student 001'
    },
    {
      id: 2,
      name: 'Student 002'
    }
  ]

  private studentSource = new BehaviorSubject<IStudent[]>(this.students);
  student$ = this.studentSource.asObservable();
  constructor() { }

  getStudents() {
    return this.student$;
  }

  addStudents() {
    //this.studentSource.next(this.students);

    const lastStudent = this.students[this.students.length - 1];

    const studentId = lastStudent.id + 1;
    const studentName = 'Student' + `00${studentId}`;

    const newStudent = new Student(studentId, studentName);

    this.students.push(newStudent);

    this.studentSource.next(this.students);
  }
}
