/**
 * Created by romarionewmanlatty on 2/22/17.
 */
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import {StudentSchema} from '../../Server/mongoDB/student.schema'
import { Student } from '../model/student';

@Injectable()
export class BackendService {

  studentList:Student[] = [];

  /*
  search(term: string): Observable<Hero[]> {
    return this.http
      .get(`app/heroes/?name=${term}`)
      .map((r: Response) => r.json().data as Hero[])
      .catch((error: any) => {
        console.error('An friendly error occurred', error);
        return Observable.throw(error.message || error);
      });
  }

  */

  addStudent(student:Student){
    this.studentList.push(student);
    StudentSchema.saveToMongoDB(student.name, student.email, student.phone,
      student.college, student.major, student.gpa)
    console.log('There are currently ' + this.studentList.length + " students registered");


  }

  getStudents():Promise<Student[]>{
    console.log('Still ' + this.studentList.length + " students registered");
    return Promise.resolve(this.studentList);
  }

}
