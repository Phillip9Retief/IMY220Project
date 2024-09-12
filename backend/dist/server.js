"use strict";

var express = require('express');
var path = require('path');
var app = express();

// Serve static files from the 'frontend/public' directory
app.use(express["static"](path.join(__dirname, '../frontend/public')));

// Handle all other routes by serving the index.html file
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../frontend/public', 'index.html'));
});

// Start the server
var PORT = process.env.PORT || 5000;
app.listen(PORT, function () {
  console.log("Server is running on port ".concat(PORT));
});