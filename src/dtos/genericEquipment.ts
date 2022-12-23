export type GenericEquipment = {
    OptolithId: string
    InternalId: string
    Name: string
    Price: string
    Weight: string
    Special: Special
    OptolithGroupName: string
    OptolithGroup: string
    Versions : Version[]
}

export type Special = {
    OptolithCombatTechnique: string;
    DamageDiceNumber : string;
    DamageDiceSides : string;
    DamageFlat : string;
    DamageThreshold : number[];
    DamageAttributeThreshold : AttributeReference;
    Atack : string;
    Parade : string;
    Reach : string;
    Length : string;
    IsParryingWeapon : boolean | null;
    IsTwoHandedWeapon : boolean | null;
    IsImprovisedWeapon : boolean | null;
    StructurePoints : number[];
    CloseRange : string;
    MediumRange : string;
    FarRange : string;
    ReloadTime : number[];
    Ammunition : string;
    Protection : string;
    Encumbrance : string;
    HasAdditionalPenalties : boolean | null;
    ArmorType : string;
    FoundryCombatTechnique : string;
}

export type AttributeReference = {
    FoundryAttributeKey : string;
    OptolithAttributeKey : string;
    Threshold : number;
}

export type Version = {
    Sources : Source[];
    Advantage : string;
    Disadvantage : string;
    Note : string;
    Rules : string;
}

export type Source = {
    FoundryId : string;
    OptolithId : string;
    FirstPage : string;
}