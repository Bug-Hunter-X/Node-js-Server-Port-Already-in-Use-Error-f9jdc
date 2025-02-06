# Node.js Server Port Already in Use

This repository demonstrates a common error in Node.js development: attempting to start a server on a port that is already in use. The `bug.js` file contains the problematic code, while `bugSolution.js` provides a robust solution.

## Problem

The `bug.js` file creates a simple HTTP server using the `http` module.  If you attempt to run this script when port 8080 is already occupied (e.g., by another instance of the server or a different application), the script will throw an error and exit.

## Solution

The `bugSolution.js` file addresses this issue by implementing a more robust approach using `server.on('error', ...)` to gracefully handle port conflicts.  This solution allows the server to attempt to listen on the specified port and handles the error case without crashing the process.