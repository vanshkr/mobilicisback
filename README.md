### Prerequisites

- Node.js installed on your machine
- MongoDB instance (either locally or remotely)
- Sample data in JSON format (in this case, the file is named `sample_data.json`)

### Installation

1. Clone the repository to your local machine using `git clone`.
2. Navigate to the directory in your terminal and run `npm install`.
3. Rename the `.env.example` file to `.env` and update the `CONNECTION_URL` variable to point to your MongoDB instance.
4. Ensure that your sample data is in JSON format and named `sample_data.json`.
5. Run the command `npm start` to start the server and insert the sample data into the database.

### Dependencies

- express
- mongoose
- body-parser
- cors
- dotenv
- fs

### Credits

This application was created by Vansh Kumar.

## Index.js

This is a backend code for a web application that connects to a MongoDB database using Mongoose ORM and an Express server. The schema used for the MongoDB documents is defined in the sampleSchema.js file.

The application starts by importing the required modules, including express, mongoose, body-parser, cors, and dotenv, which are used for server configuration, parsing HTTP requests, enabling cross-origin resource sharing, and managing environment variables.

Afterward, the application sets up the necessary middleware, including body-parser for parsing JSON and urlencoded data and cors for allowing cross-origin requests. The sampleRoutes.js file is then imported, which contains the route handlers for the various endpoints that the application will respond to.

Next, the application connects to the MongoDB database using the CONNECTION_URL variable from the environment variables loaded by dotenv. If the connection is successful, the application listens on the specified PORT number. Before starting the server, the application reads in a JSON file containing sample data that will be used to populate the database.

The application then checks if each document in the sample data already exists in the database. If not, it creates a new document with the sample data. Finally, the application logs a message indicating that all documents have been inserted or skipped.

## sampleRoutes.js

The sampleRoutes.js file defines five route handlers that correspond to the following endpoints:

- /low_income - Returns a list of users who own a BMW or Mercedes and have an income less than $5.
- /expensive_phones - Returns a list of male users who own phones with a price greater than or equal to $10000.
- /quote_requirements - Returns a list of users whose last name starts with 'M', whose email contains their last name, and whose quote has a length greater than 15 characters.
- /luxury_cars - Returns a list of users who own a BMW, Mercedes, or Audi and whose email does not contain any digits.
- /top_cities - Returns a list of the top 10 cities by user count and average income.

## sampleSchema.js

This code defines a Mongoose schema for a collection called "sampleModel" and exports it as a default module.

Mongoose is a Node.js library that provides a way to interact with MongoDB databases by defining schemas and models. A schema defines the structure of the data stored in a collection, while a model provides an interface for querying and manipulating the data.

Here, the `mongoose` and `Schema` modules are imported. Then, a new schema is defined with fields for `id`, `first_name`, `last_name`, `email`, `gender`, `income`, `city`, `car`, `quote`, and `phone_price`. The types of these fields are specified using the `Number` and `String` constructors.

After defining the schema, a Mongoose model is created using `mongoose.model()`. The first argument is the name of the model, which should be the singular form of the collection name. The second argument is the schema object. Finally, the model is exported as a default module using `export default`.

This code can be used to define and export a Mongoose model for a MongoDB collection called "sampleModel", with the specified schema fields and types. Once this module is imported into another file, it can be used to interact with the "sampleModel" collection in the MongoDB database.

## sampleController.js

The above code is a module that exports five asynchronous functions that perform different database queries on a MongoDB database using Mongoose. The module imports a Mongoose schema called `sampleSchema` and uses it to interact with the database.

Here is an explanation of each function:

1. `getBMWOrMercedesOwnersWithLowIncome`: This function queries the database to find users who own a BMW or Mercedes car and have an income of less than $5. It uses the `find` method of Mongoose to filter the data and returns the result as a JSON object. If an error occurs, it sends a response with a 404 status code and an error message.

2. `getMaleUsersWithExpensivePhones`: This function queries the database to find male users who own phones that cost more than or equal to $10,000. It uses the `find` method of Mongoose to filter the data and returns the result as a JSON object. If an error occurs, it sends a response with a 404 status code and an error message.

3. `getUsersWithLastNameAndQuoteRequirements`: This function queries the database to find users whose last name starts with the letter "M" and have a quote with more than 15 characters, and whose email contains their last name. It uses the `find` method of Mongoose with multiple filters and returns the result as a JSON object. If an error occurs, it sends a response with a 404 status code and an error message.

4. `getLuxuryCarOwnersWithNoDigitsInEmail`: This function queries the database to find users who own a BMW, Mercedes or Audi and have an email address without any digits. It uses the `find` method of Mongoose with multiple filters and returns the result as a JSON object. If an error occurs, it sends a response with a 404 status code and an error message.

5. `getTopCitiesByUserCountAndIncome`: This function uses MongoDB's aggregation pipeline to group users by their city and calculate the count and average income for each city. It sorts the result in descending order of the count and returns the top 10 cities as a JSON object. If an error occurs, it sends a response with a 404 status code and an error message.
