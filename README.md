# Animal Directory CRUD Application

This is a simple CRUD (Create, Read, Update, Delete) application built with Node.js and Express.js for managing an animal directory. It provides endpoints for retrieving, adding, updating, and deleting animals from the directory.

## Features

- Retrieve all animals
- Add a new animal
- Update an existing animal
- Delete an animal

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Hannan2004/nodejs-crud-application.git
   ```

2. Navigate to the project directory:

   ```bash
   cd animal-directory
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the server:

   ```bash
   npm start
   ```

   The server will start running on `http://localhost:3000`.

## Usage

- **GET all animals**: Send a GET request to `http://localhost:3000/animals`.
- **POST a new animal**: Send a POST request to `http://localhost:3000/animals`.
- **PUT (update) an existing animal**: Send a PUT request to `http://localhost:3000/animals/:id`.
- **DELETE an animal**: Send a DELETE request to `http://localhost:3000/animals/:id`.

Make sure to include appropriate JSON data in the request body for POST and PUT requests.

## Contributing

Contributions are welcome! If you have any suggestions, improvements, or feature requests, please open an issue or create a pull request.

## License

This project is licensed under the [ISC License](LICENSE).


You can copy this content and paste it into your README.md file in your GitHub repository. Feel free to customize it further according to your project's needs.
