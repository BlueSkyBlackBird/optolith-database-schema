import * as fs from "fs";

export function writeFiles(data: Map<string, string[]>, outputPath:string) {
    fs.mkdirSync(outputPath, {});
    for (const [group, items] of Object.entries(data)) {
        const content = JSON.parse(items);
        const filePath = outputPath + group + ".json";
        fs.writeFileSync(filePath, content);
    }
}