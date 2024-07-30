const fs = require("fs");
const promises = require("fs/promises");

function callbackFunc() {
  console.log("==================Callback function========================");
  fs.writeFile(
    "./file.txt",
    "Hello, I am Anurag Singh writing into this file",
    (err) =>
      err
        ? console.log("callback - ", err)
        : console.log("callback - Written Successfully")
  );

  fs.appendFile("./file.txt", ", appending in file", (err) =>
    err
      ? console.log("callback - ", err)
      : console.log("callback - Appended Successfully")
  );

  fs.readFile("./file.txt", "utf-8", (err, result) => {
    err ? console.log("callback - ", err) : console.log("callback - ", result);
  });
}
const promiseFunc = async () => {
  console.log(
    "==================Async Promise function========================"
  );
  try {
    promises.writeFile(
      "./file.txt",
      "Hello, I am Anurag singh writing into this file"
    );
    console.log("promise - written to file");
  } catch (err) {
    console.error("promise - ", err);
  }
  try {
    promises.appendFile("./file.txt", ", appending in file");
    console.log("promise - append to file");
  } catch (err) {
    console.error("promise - ", err);
  }
  try {
    const result = await promises.readFile("./file.txt", "utf-8");
    console.log("promise - ", result);
  } catch (err) {
    console.error("promise - ", err);
  }
};

callbackFunc();
promiseFunc();
