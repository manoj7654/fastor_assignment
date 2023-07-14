# fastor_assignment
This API manages employees and enquiries, with public and private functionality. Users register and login as employees, accessing public enquiries submitted by customers. Employees can claim and handle assigned enquiries privately. Effective communication, streamlined enquiry management, and privacy are ensured.

# Table of Contents
 * [Project Overview](#project-overview) 

 * [Setup](#setup)

 * [API Endpoints](#api-endpoint)

 * [Authentication](#authentication)

 * [Error Handling](#erro-handling)

 * [Dependencies](#dependencies)
 
 * [Deployment](#deployed-link)

### Project Overview
The project consists of several files and directories organized as follows:

   `config/: `

 * Contains the configuration files for the database 
connection.

 * db.js: Configuration file for connecting to the MongoDB database using Mongoose.

 * controllers/: Contains the controller functions for handling API requests and responses.

 * employee.controller.js: Controller functions for user registration and login.

 * enquiry.controller.js: Controller functions for creating, retrieving, and claiming enquiries.

  `middleware/:`

   * Contains the middleware functions used in the API.

 * authenticate.js: Middleware function for authenticating user requests using JSON Web Tokens (JWT).

  `models/:`

  * Contains the Mongoose models for database schema definitions.

 * employeeModal.js: Mongoose model for the user (employee) 
 schema.

 * enquiryModal.js: Mongoose model for the enquiry schema.

  `routes/:`

   * Contains the route files for defining API endpoints.

 * employeeRouter.js: Router for user-related endpoints.

 * enquiryRouter.js: Router for enquiry-related endpoints.

   `Main file :`

  * index.js: The main entry point of the application.

 ### Setup
 * To set up the project on your local machine, please follow the instructions below:

 * Clone the repository from GitHub:


        git clone <repository-url>


 * Navigate to the project directory:

        cd <project-directory>

* Install the dependencies:

      npm install

* Create a .env file in the root directory and configure the following environment variables:

                mongoUrl=<your-mongodb-connection-url>
                key=<your-secret-key>
                port=<port-number>

 * Start the server:

       npm start

The server will start running at the specified port.

#### API Endpoints

  `User Endpoints`

  1. Register

 * mehtod: POST
 * 
 * Endpoint : /user/register: Register a new user (employee).

 * Request Body:

            email: User's email address.
            password: User's password.
 * Response:

        200 OK: User registered successfully.
        400 Bad Request: Missing or invalid request body.
        401 Unauthorized: User already exists.
        500 Internal Server Error: Error while creating the account.

    
  2. Login

  * method : POST
  * 
  * Endpoint : /user/login: Authenticate user credentials and generate a JWT token.

 * Request Body:

        email: User's email address.
        password: User's password.

 * Response:

        200 OK: Login successful.
        400 Bad Request: Missing or invalid request body.
        401 Unauthorized: Incorrect email or password.
        500 Internal Server Error: Error while logging in.

 `Enquiry Endpoints`

1. Create a new enquiry.

* method : POST
  
* Endpoint : /enquiry/addEnquiry

 * Request Body:
            name: Name of the person making the enquiry.
            email: Email address of the person making the enquiry.
            courseInterest: Course of interest for the enquiry.
 * Response:

        201 Created: Enquiry created successfully.
        500 Internal Server Error: Error while creating the enquiry.

2. Get all unclaimed enquiries.
   
* method : GET
  
* Endpoint : /enquiry/getAllEnquiry:

* Authorization : token
  
* Response:
        200 OK: List of unclaimed enquiries.
        500 Internal Server Error: Error while getting the enquiries.

3. Claim an enquiry by an employee.

* method : PATCH

* Endpoint : /enquiry/:id/claim
  
* Authorization : token
  
* Request Parameters:

  id: ID of the enquiry to be claimed.

 * Request Body:

    employeeId: ID of the employee claiming the enquiry.
* Response:

        200 OK: Enquiry claimed successfully.
        404 Not Found: Enquiry not found.
        500 Internal Server Error: Error while claiming the enquiry.

4. Get All Enquiry claimed by an employee

* method : GET
  
* Endpoint : /enquiry/claimEnquiry
  
* Authorization : token
   
* Response:

        200 OK: List of enquiries claimed by the employee.
        500 Internal Server Error: Error while getting the claimed enquiries.
### Authentication

Authentication in this API is based on JSON Web Tokens (JWT). When a user successfully logs in, a JWT token is generated and returned in the response. This token should be included in the Authorization header of subsequent requests to access protected endpoints. The token is validated using the provided secret key (key environment variable).

To authenticate a request, include the JWT token in the request headers as follows:


      Authorization: <token>

If a request is made without a valid token, the API will respond with 401 Unauthorized status and an appropriate error message.

 ### Error Handling
The API handles errors using appropriate HTTP status codes and error messages. The following error responses are returned:

 * 400 Bad Request: The request is missing required parameters or contains invalid data.

 * 401 Unauthorized: The request requires authentication, or the provided credentials are invalid.

* 404 Not Found: The requested resource was not found.

 * 500 Internal Server Error: An unexpected error occurred on the server.

The error responses are accompanied by JSON objects containing an error message or additional details.

#### Dependencies
The project uses the following dependencies:

* bcrypt: For password hashing and comparison.
* dotenv: For loading environment variables from a .env file.
* express: A web application framework for Node.js.
* jsonwebtoken: For generating and verifying JSON Web Tokens (JWT).
* mongoose: An Object Data Modeling (ODM) library for MongoDB.

These dependencies are automatically installed when setting up the project.

### Deployed link
  [Link](https://careful-pear-chick.cyclic.app/)
