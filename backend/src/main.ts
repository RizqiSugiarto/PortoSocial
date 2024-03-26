import { Database } from "./app/database";
import { web } from "./app/web";
import dotenv from "dotenv";

dotenv.config();

const mongoURI: string = process.env.MONGO_URL!;
const db = new Database(mongoURI);

db.connect()
  .then(() => {
    web.listen(process.env.PORT_APP, () => {
      console.log(`Listening on port ${process.env.PORT_APP}`);
    });
  })
  .catch((error) => {
    console.error("Error:", error);
  });
