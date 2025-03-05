const fs = require("fs");

const data = "Hello, Node.js!, This is added Content.";
fs.writeFile("examplewrite.txt", data, (err) => {
  if (err) {
    console.error("Error writing file:", err);
    return;
  }
  console.log(
    "File written successfully!" + "The data writed into file-> " + data
  );
});
