/**
 * Created by romarionewmanlatty on 2/23/17.
 */

//import * as Mongoose from 'mongoose';
import Constants = require("./../Constants/mongoDB.constants");

class DataAccess {
  static mongooseInstance: any;
  static mongooseConnection: Mongoose.Connection;

  constructor () {

    DataAccess.connect();
  }

  static connect (): Mongoose.Connection {
    if (this.mongooseInstance) return this.mongooseInstance;

    try {
      this.mongooseConnection = Mongoose.connection;
    }
    catch (err) {
      console.log(err);
    }

    /*
     this.mongooseConnection.once("open", () => {
     console.log("Connected to mongodb.");
     });

     this.mongooseInstance = Mongoose.connect(Constants.DB_CONNECTION_STRING);
     return this.mongooseInstance;

     */
  }



}




DataAccess.connect();
export = DataAccess;
