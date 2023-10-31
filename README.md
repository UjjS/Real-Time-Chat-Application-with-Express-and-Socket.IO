# Real-Time Chat Application with Express, Socket.IO, and MongoDB

This repository contains the source code for a real-time chat application built with Node.js, Express, Socket.IO, and MongoDB. The application allows users to send and receive messages in real-time and stores messages in a MongoDB database.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Code Explanation](#code-explanation)
- [HTML Template](#html-template)
- [Authors](#authors)
- [Contributing](#contributing)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed on your machine.
- MongoDB database accessible or a MongoDB Atlas account (update the `dburl` variable in `server.js` with your MongoDB connection string).
- Git installed for version control (optional but recommended).

## Installation

To install the project and its dependencies, follow these steps:

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/yourusername/real-time-chat-app.git

2. Change your current directory to the project folder:

   ```bash
   cd real-time-chat-app
3. Install the project dependencies listed in `package.json` using npm:
   ```bash
   npm install

This will install the following dependencies:

 - `body-parser`: Middleware for parsing request bodies.
 - `bootstrap`: CSS framework for styling.
 - `express`: Web application framework for Node.js.
 - `mongoose`: ODM (Object Data Modeling) library for MongoDB.
 - `socket.io`: Library for real-time communication.



 



## Usage/Examples ##
To run the chat application locally, follow these steps:

1. Ensure you have MongoDB running or your MongoDB Atlas credentials correctly configured in `server.js`.

2. Start the server:
   ```bash
   npm start
   
The server will start, and you can access the application in your web browser at http://localhost:3000.


## Demo ##
This is a working demo for the same 

 ![Your GIF](https://drive.google.com/uc?export=view&id=1jW40EdmFbtFnqz5oDjSTT3mdrGeCJ69l)




## API Reference

 Retrieves all stored messages from MongoDB.

```http
  GET /messages:
```

#### Get item

 Adds a new message to the database and broadcasts it.
```http
  POST /messages:
```




## Contributions

We welcome contributions from the community. To contribute to this project, follow these steps:

   1. Fork the repository.
   
   2. Create a new branch for your feature or bug fix.
   
   3. Make your changes and test them thoroughly.
   
   4. Submit a pull request.

Feel free to customize this README to match your specific project details and provide links, badges, and any additional information that's relevant to your project.

## Authors

- [@UjjwalShikhar](https://www.github.com/UjjS)

