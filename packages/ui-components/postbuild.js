import fs from "node:fs";

fs.readFile("./dist/client/index.js", "utf8", (err, data) => {
  if (err) throw err;

  const updated = `"use client";\n\n${data}`;

  fs.writeFile("./dist/client/index.js", updated, (err) => {
    if (err) throw err;
    console.log('"use client" directive added to client index file!');
  });
});
