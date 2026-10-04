# Student Management REST API

## Web Dev III - Assignment 2

This is a simple Student Management REST API made using Node.js and Express.js.

The project uses an array for storing student data, so no database is required.

## Features

- Create a student
- View all students
- View a student by ID
- Update a student
- Delete a student
- Custom logger middleware
- Modular routing
- Basic validation and error handling

## Project Structure

```text
student-management-api/
├── controllers/
│   └── studentController.js
│
├── data/
│   └── students.js
│
├── middleware/
│   └── logger.js
│
├── routes/
│   └── studentRoutes.js
│
├── app.js
├── package.json
└── README.md
```

## How to Run

Open the project folder in VS Code terminal.

```bash
npm install
npm start
```

The server will run on:

```text
http://localhost:3000
```

For development with nodemon:

```bash
npm run dev
```

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | /students | Get all students |
| GET | /students/:id | Get student by ID |
| POST | /students | Add a student |
| PUT | /students/:id | Update a student |
| DELETE | /students/:id | Delete a student |

## POST /students

Use JSON in Postman:

```json
{
  "name": "Kiyan Singh",
  "age": 20,
  "course": "BCA"
}
```

## PUT /students/1

```json
{
  "name": "Rahul Sharma Updated",
  "age": 20,
  "course": "BCA"
}
```

## Status Codes Used

- 200 - Success
- 201 - Created
- 400 - Bad Request
- 404 - Not Found

## Note

Because this assignment does not use a database, any changes made through POST, PUT or DELETE will only remain while the server is running. Restarting the server loads the original student array again.
