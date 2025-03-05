const fs = require("fs");

fs.readFile("examplewrite.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log("File content:", data);
});

fs.readFile("example.txt", "utf8");
