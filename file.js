const fs = require("fs");

// read file

// fs.readFile("./docs/blog.txt", (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(data.toString());
// });

// write file

fs.writeFile("./docs/blog.txt", "Hello humans", () => {
  console.log("file written");
});
