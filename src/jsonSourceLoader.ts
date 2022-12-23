
import * as fs from "fs";
import { GenericEquipment } from "./dtos/GenericEquipment";
import path from "path";

export function loadAllJsonData(sourcePath: string) {

    const groupedEquipment = new Map<string, GenericEquipment[]>();

    const filesInDir = fs.readdirSync(sourcePath, { withFileTypes: true });
     
    for (const fileName of filesInDir) {
        const fullPath = sourcePath + fileName.name;
        const nameWithoutExtension = path.basename(fileName.name).split(".")[0] ?? "";
        const groupName = nameWithoutExtension.split("-")[1]!;
        const fileContent = JSON.parse(fs.readFileSync(fullPath, "utf-8"));
        groupedEquipment.set(groupName, fileContent as GenericEquipment[]);
    }
    return groupedEquipment;
}