import { loadAllJsonData } from "./jsonSourceLoader.js"

const sourcePathForData = "C:\\temp\\equipment\\";

console.log("Starting")

const loadedData = loadAllJsonData(sourcePathForData)

console.log("Done")