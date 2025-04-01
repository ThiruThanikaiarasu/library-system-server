# Creating the README.md file content

# Library Management API

This is a Node.js API service built with TypeScript for a simple library system. The API allows users to manage books, authors, and borrowed books using GraphQL. It includes functionality to add, update, delete, and list books and authors, track borrowed books by users, and fetch books by authors and authors by books.

## Links 

Github: https://github.com/ThiruThanikaiarasu/library-system-server
Docker Image: https://hub.docker.com/r/thiruthanikaiarasu/library-system

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [API Endpoints](#api-endpoints)
- [Setup](#setup)
- [Testing](#testing)
- [License](#license)

## Tech Stack

- **Node.js**: JavaScript runtime environment
- **TypeScript**: Superset of JavaScript for static typing
- **Express**: Web framework for Node.js
- **MongoDB**: NoSQL database for storing data

## API Endpoints



## Setup

### Prerequisites

- Node.js
- MongoDB

### Installation 

1. Clone the repository:
   ```bash
   git clone https://github.com/ThiruThanikaiarasu/library-system-server
   cd library-system-api
    ```

2. Add Environment vairable

    ```bash
    touch .env
    ```
    Must have Environmental variable: 
    ```bash 
    PORT=4000
    MONGODB_URL=mongodb+srv://<username>:<password>@<cluster>
    ```

3. Run the Server
    ```bash
    npm run dev
    npm run start
    ```

## Docker Installation 

1. Pull Docker Image
    ```bash
    docker pull thiruthanikaiarasu/library-system:latest
    ```

2. Run Docker image with env

    Make sure you have .env in the current working directory 

    ```bash 
    docker run --env-file .env -p 4000:4000 library-system:latest
    ```

## Accessing Apollo Server Sandbox 

1. Run Server 
    Run the server either using git clone or docker image. 

2. Open your browser and visit the URL
    ```bash 
    http://localhost:4000
    ```