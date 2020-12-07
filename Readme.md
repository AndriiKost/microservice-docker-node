# Overview

This application has 2 node services running in docker containers under a docker network. 

API is using port 8000 inside a docker container, and port 9999 on the machine (public).

Service is running on port 8001 in the docker container and is not exposed to the machine (public).

API is communicating with Service through the docker network.

There are API 2 endpoints:

http://localhost:9999/api/cars - will return a full list of cars in JSON format

http://localhost:9999/api/cars/:id - will return a single car for the requested id

# How To Start
1. Navigate to the root directory of the project.
2. Execute `docker-compose up`
3. 2 node services in docker containers should start and listen on corresponding ports

## Dependencies
- docker
- docker-compose

# For local development (without Docker)
1. Replace the value of BASE_URL property in `api/.env` file to http://localhost:8001
2. Navigate to `api` folder and execute `npm install && npm start`
3. Navigate to `service` folder and execute `npm install && npm start`
4. Wait for servers to start listening on ports 8000(API) and 8001(Service)

## Dependencies
- node
- npm

# Tests
To execute unit tests simply run `npm run test` from the API directory.
