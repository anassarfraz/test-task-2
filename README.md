# test-task-2
# MyProducts API

This is a Node.js application that fetches data from the fakestoreapi and serves it via the `/api/myproducts` endpoint.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/anassarfraz/test-task-2.git
2. Navigate to the project directory.
3. Install dependencies:
   ```bash
   npm install
## Start application
1. Start the application:
   ```bash
   npm start
The server will start running at http://localhost:3000/ .

2. Make a GET request to the API endpoint:
    ```bash
   GET http://localhost:3000/api/myproducts

This will return a list of products with additional fields added, such as wordCount and modified price in USD.

## Running Tests
You can run the unit tests using the following command:

      npm run test or npx jest

The tests are written using the Jest framework and can be found in the tests directory.

## API Documentation
   Refer to the Postman collection in the docs folder for example API calls and documentation.
   
