const userName = "mlanca-c";
console.log(userName);

const button = document.querySelector("button")!;

button.addEventListener("click", () => {
  console.log("Clicked!");
});

// Compiler Settings

// compile in watch mode
// tsc app.ts --watch or tsc app.ts -w
// this will compile the file and watch for changes

// compiling the entire project
// tsc --init; tsc
// this will create a tsconfig.json file
// this file will contain all the settings for the project
// tsc will compile the entire project

// include and exclude in tsconfig.json
// exclude: ["node_modules"]
// include: ["app.ts", "analytics.ts"]

// setting compilation target

// typescript core libs
