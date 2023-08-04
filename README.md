# Quest-13

  ![Github license](https://img.shields.io/badge/license--blue.svg)
  ## Description
   The project is to build an API for a social network web application using Node.js, Express.js, and MongoDB. The API will allow users to share their thoughts, react to their friends' thoughts, and manage their friend lists.  
   ## Deployed Application URL
   https://github.com/Greivin13/Quest-18-NoSql
   ## Video Demonstartion
   https://drive.google.com/file/d/1GF0HfOK-CFzzJCvP6fqhZYavrDM8E8e8/view
  ## Table of Contents
  * [Features](#features)
  * [Languages & Dependencies](#languagesanddependencies)
  * [How to Use This Application](#HowtoUseThisApplication)
  * [Contributors](#contributors)
  * [Testing](#testing)
  * [Questions](#questions)
  ## Features

 ### User Management: 
 The API allows creating new users with unique usernames and email addresses. It also allows updating and deleting existing user profiles.

 ### Thought Sharing: 
 Users can share their thoughts by creating new thoughts. Each thought contains a thought text, a timestamp, and the username of the user who created it.

 ### Reactions: 
Users can react to thoughts by adding reactions. Reactions are stored as nested documents within the corresponding thought and include properties like reactionBody, username, and createdAt.

### Friend Management: 
Users can manage their friend lists by adding or removing friends. The friends are stored as an array of user IDs in the "friends" field of the User model.

### Validation: 
The API enforces validation rules for user input, such as required fields, unique usernames and email addresses, and maximum character limits for thought text and reactions.

### Date Formatting: 
The API uses the 'moment' library (or a similar JavaScript date library) to format timestamps in a human-readable format, making it easier for users to understand when thoughts and reactions were created.

###  Error Handling:
 The API includes error handling mechanisms to handle various types of errors, such as invalid requests, database errors, or server-side issues. It returns appropriate error responses with meaningful error messages to the client.

###  Virtual Properties:
 The API uses virtual properties in the Mongoose models to calculate and return additional data, such as the number of reactions a thought has or the number of friends a user has, without storing this data directly in the database.

### API Documentation: 
Although not explicitly mentioned, it is a good practice to include API documentation to help other developers understand how to use the API and its endpoints effectively.

  ## Languages & Dependencies
 - Express.js: A popular web framework for Node.js that simplifies building web applications and APIs.
 - Mongoose: An Object Data Modeling (ODM) library for MongoDB, used to define data models and interact with the database.
 - MongoDB: A NoSQL database used to store the application's data, specifically for its flexibility in handling unstructured data.
 - Moment.js (or a similar JavaScript date library): Used to format timestamps and work with dates in a user-friendly way. 
  ## How to Use This Application:
 - Install dependencies with npm install.
 - Run the server with node server.js.
 - Interact with the API using HTTP requests on http://localhost:3000.
  
  