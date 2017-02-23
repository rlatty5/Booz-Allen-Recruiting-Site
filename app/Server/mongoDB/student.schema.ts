/**
 * Created by romarionewmanlatty on 2/23/17.
 */
import DataAccess = require('./DataAccess');


var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

class StudentSchema {

  static saveToMongoDB(studentName, studentEmail, studentPhone, studentCollege, studentMajor, studentGPA){
    var studentSchema = mongooseConnection.model("Student", StudentSchema.schema);

    var newStudent = new studentSchema({
      name:studentName,
      email:studentEmail,
      phone:studentPhone,
      college:studentCollege,
      major:studentMajor,
      gpa:studentGPA

    });

    newStudent.save(function (err) {
      if (err){
        console.log ('Error on save!')
      } else{
        console.log ('Saved Successfully!')
      }});
  }

  static get schema () {
    var studentSchema =  mongoose.Schema({
      name : {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true
      },
      phone: {
        type: String,
        required: true
      },
      college: {
        type: String,
        required: true
      },
      major: {
        type: String,
        required: true
      },
      gpa: {
        type: String,
        required: true
      }
    });

    return studentSchema;
  }





}


