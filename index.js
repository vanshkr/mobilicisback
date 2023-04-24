import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import fs from "fs";
import sampleModel from "./schema/sampleSchema.js";
import sampleRoutes from "./routes/sample.js";

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/", sampleRoutes);

const PORT = process.env.PORT || 5000;
const fileContents = fs.readFileSync("sample_data.json");
const data = JSON.parse(fileContents);

mongoose
  .connect(process.env.CONNECTION_URL)
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Example app listening on PORT ${PORT}`);
    })
  )
  .catch((err) => console.log(err));

const promises = data.map((doc) => {
  return sampleModel
    .findOne({ id: doc.id })
    .then((result) => {
      if (!result) {
        return sampleModel
          .create(doc)
          .then((result) =>
            console.log(`Inserted document with ID ${result.id}`)
          )
          .catch((err) =>
            console.log(`Failed to insert document with ID ${doc.id}: ${err}`)
          );
      } else {
        console.log(`Document with ID ${doc.id} already exists`);
        return Promise.resolve();
      }
    })
    .catch((err) =>
      console.log(`Error checking for existing document: ${err}`)
    );
});

Promise.all(promises)
  .then(() => {
    console.log("All documents inserted or skipped");
  })
  .catch((err) => console.log(`Error inserting or skipping documents: ${err}`));
