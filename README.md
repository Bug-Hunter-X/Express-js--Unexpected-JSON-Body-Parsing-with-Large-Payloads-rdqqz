# Express.js Unexpected JSON Body Parsing Bug

This repository demonstrates a subtle bug in Express.js request body parsing when dealing with large JSON payloads.  Node.js has a default buffer limit that can unexpectedly truncate large requests, leading to incomplete or incorrect data processing.  The bug is not always easily reproducible with small test cases, making it a tricky issue to diagnose.

## Bug Description

The `bug.js` file contains an Express.js server with a POST endpoint designed to receive JSON data.  If the incoming JSON payload exceeds the default Node.js buffer limit, the server will not process the entire request body correctly, resulting in potential data loss or errors.

## Solution

The `bugSolution.js` file provides a solution using the `body-parser` middleware to increase the request body size limit.  This ensures that large JSON payloads are parsed completely and processed without truncation.