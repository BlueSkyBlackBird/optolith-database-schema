import { GenericEquipment } from "../dtos/GenericEquipment";

export function convertToOptoliithJson(data: Map<string, GenericEquipment[]>) {
    const result = new Map<string, string[]>();

    for (const [group, items] of data) {
        const mapping = transformFunctions[group];
        const mappedData = items.map(mapping)
        result.set(group, mappedData);
    }

    return result;
}

const transformFunctions = {
    "Alchimica": transformToAlchemicum,
    "Ausrüstung der Geweihtenschaft": transformToEquipmentOfBlessedOnes,
    "Behältnisse": transformToContainer,
    "Beleuchtung": transformToIlluminationLightSource,
    "Bücher": transformToBook,
    "Diebeswerkzeug": transformToThievesTool,
    "Edelsteine und Feingestein": transformToGemOrPreciousStones,
    "Fernkampfwaffen": transformToRangedweapon,
    "Fortbewegungsmittel": transformToVehicle,
    "Genussmittel und Luxus": transformToLuxuryGoods,
    "Gifte": transformToPoison,
    "Handwerkszeug": transformToToolOfTheTrade,
    "Heilkräuter": transformToElixir,
    "Kleidung": transformToClothes,
    "Liebesspielzeug": transformToSexToys,
    "Magische Artefakte": transformToMagicalArtifacts,
    "Munition": transformToAmmunition,
    "Musikinstrumente": transformToMusicalInstruments,
    "Nahkampfwaffen": transformToMeleeweapon,
    "Orientierungshilfen": transformToOrienteeringAid,
    "Reisebedarf und Werkzeuge": transformToTravelGearOrTool,
    "Rüstungen": transformToArmmor,
    "Schmuck": transformToJewelry,
    "Schreibwaren": transformToStationery,
    "Seile und Ketten": transformToRopeOrChain,
    "Tierbedarf": transformToAnimalCare,
    "Tiere": transformToAnimal,
    "Verbandzeug und Heilmittel": transformToBandageOrRemedy,
    "Waffenzubehör": transformToWeaponAccessory,
    "Zeremonialgegenstände": transformToCeremonialItem,
}

function transformToMeleeweapon(item: GenericEquipment) {}
function transformToRangedweapon(item: GenericEquipment) { }
function transformToAmmunition (item: GenericEquipment) {}
function transformToAlchemicum(item: GenericEquipment) { }
function transformToAnimal(item: GenericEquipment) { }
function transformToAnimalCare(item: GenericEquipment) { }
function transformToArmmor(item: GenericEquipment) { }
function transformToBandageOrRemedy(item: GenericEquipment) { }
function transformToBook(item: GenericEquipment) { }
function transformToCeremonialItem(item: GenericEquipment) { }
function transformToClothes(item: GenericEquipment) { }
function transformToContainer (item: GenericEquipment) {}
function transformToElixir(item: GenericEquipment) { }
function transformToEquipmentOfBlessedOnes (item: GenericEquipment) {}
function transformToGemOrPreciousStones(item: GenericEquipment) { }

function transformToIlluminationLightSource(item: GenericEquipment) { 
    // Has two type of items! Group must be split
}

function transformToJewelry(item: GenericEquipment) { }
function transformToSexToys(item: GenericEquipment) { }
function transformToLuxuryGoods(item: GenericEquipment) { }
function transformToMagicalArtifacts(item: GenericEquipment) { }
function transformToMusicalInstruments(item: GenericEquipment) { }
function transformToOrienteeringAid(item: GenericEquipment) { }
function transformToPoison(item: GenericEquipment) { }
function transformToRopeOrChain(item: GenericEquipment) { }
function transformToStationery(item: GenericEquipment) { }
function transformToThievesTool(item: GenericEquipment) { }
function transformToToolOfTheTrade(item: GenericEquipment) { }
function transformToTravelGearOrTool(item: GenericEquipment) { }
function transformToVehicle(item: GenericEquipment) { }
function transformToWeaponAccessory(item: GenericEquipment) { }

