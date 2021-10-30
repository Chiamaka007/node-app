const fs = require("fs");

// read file

// fs.readFile("./docs/blog.txt", (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(data.toString());
// });

// write file

// fs.writeFile("./docs/blog.txt", "Hello humans", () => {
//   console.log("file written");
// });

// fs.writeFile("./docs/blog2.txt", "Hello aliens", () => {
//   console.log(mkdir('assets', (err) => {
// if(err) {
//     console.log(err);"file written");
// });

// directories
if(!fs.existsSync('./assets')) {
    fs.mkdir("./assets", (err) => {
      if (err) {
        console.log(err);
      }
      console.log("created");
    });
} else {
    fs.rmdir("./assets", (err) => {
        if (err) {
            console.log(err)
        }
        console.log("deleted")
    })
}

