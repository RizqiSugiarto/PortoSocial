import { connect } from "mongoose";

export class Database {
  private readonly URI: string;

  constructor(URI: string) {
    this.URI = URI;
  }

  async connect(): Promise<void> {
    try {
      await connect(this.URI);
      console.log("MongoDb Connected");
    } catch (error) {
      console.error("Error Connecting to mongoDb", error);
    }
  }
}
