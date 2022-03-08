/**
 * General type specifications used by multiple activatable entries.
 * @title Activatable
 */

import { Identifier } from "./_Identifier"
import { Prerequisite } from "./_Prerequisite"

/**
 * The activatable entry's identifier. An unique, increasing integer.
 * @integer
 * @minimum 0
 */
export type Id = number

/**
 * The name of the activatable entry.
 * @minLength 1
 */
export type Name = string

/**
 * The full name of the entry as stated in the sources. Only use when `name`
 * needs to be different from full name for text generation purposes.
 * @minLength 1
 */
export type NameInLibrary = string

/**
 * Number of available levels.
 * @integer
 * @minimum 2
 */
export type Levels = number

/**
 *
 */
export type Maximum = ""

/**
 *
 */
export type Options = ""

/**
 * The rule text.
 * @markdown
 * @minLength 1
 */
export type Rules = string

/**
 * The effect description.
 * @markdown
 * @minLength 1
 */
export type Effect = string

/**
 * The definition of how the combat special ability can be used in combat.
 */
export type CombatSpecialAbilityType =
  | { tag: "Passive" }
  | { tag: "BasicManeuver" }
  | { tag: "SpecialManeuver" }

/**
 * Registers new skill applications, which get enabled once this entry is
 * activated. It specifies an entry-unique identifier and the skill it belongs
 * to. A translation can be left out if its name equals the name of the origin
 * activatable entry.
 * @minItems 1
 */
export type SkillApplications = {
  /**
   * The application's identifier. An entry-unique, increasing integer.
   * @integer
   * @minimum 1
   */
  id: number

  /**
   * The skill(s) this application belongs to.
   */
  skill:
    | {
      tag: "Single"

      /**
       * The referenced skill's identifier.
       * @integer
       * @minimum 1
       */
      id: number
    }
    | {
      tag: "Multiple"

      /**
       * The skills this application belongs to.
       * @minItems 2
       */
      list: {
        /**
         * The referenced skill's identifier.
         * @integer
         * @minimum 1
         */
        id: number
      }[]

      /**
       * If an application applies to multiple skills, it may need to ensure the
       * respective skill is on a certain skill rating if the activatable entry
       * cannot ensure this prerequisite.
       * @integer
       * @minimum 1
       */
      required_skill_rating?: number
    }

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   * @minProperties 1
   */
  translations?: {
    /**
     * @patternProperties ^[a-z]{2}-[A-Z]{2}$
     */
    [localeId: string]: {
      /**
       * The name of the application if different from the activatable entry's
       * name.
       * @minLength 1
       */
      name: string
    }
  }
}[]

/**
 * Registers uses, which get enabled once this entry is activated. It specifies
 * an entry-unique identifier and the skill it belongs to. A translation can be
 * left out if its name equals the name of the origin activatable entry.
 * @minItems 1
 */
export type SkillUses = {
  /**
   * The use's identifier. An entry-unique, increasing integer.
   * @integer
   * @minimum 1
   */
  id: number

  /**
   * The skill(s) this use belongs to.
   */
  skill:
    | {
      tag: "Single"

      /**
       * The referenced skill's identifier.
       * @integer
       * @minimum 1
       */
      id: number
    }
    | {
      tag: "Multiple"

      /**
       * The skills this use belongs to.
       * @minItems 2
       */
      list: {
        /**
         * The referenced skill's identifier.
         * @integer
         * @minimum 1
         */
        id: number
      }[]
    }

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   * @minProperties 1
   */
  translations?: {
    /**
     * @patternProperties ^[a-z]{2}-[A-Z]{2}$
     */
    [localeId: string]: {
      /**
       * The name of the use if different from the activatable entry's name.
       * @minLength 1
       */
      name: string
    }
  }
}[]

/**
 * The penalty the special ability gives when used.
 */
export type Penalty = ""

/**
 * The AE Cost.
 */
export type ArcaneEnergyCost = ""

/**
 * The volume points the enchantment needs.
 */
export type Volume = ""

/**
 * The binding cost for an enchantment.
 */
export type BindingCost = ""

/**
 * The magic property's identifier. `DependingOnProperty` can only be used if
 * the special ability has an option to select a property.
 */
export type Property =
  | { tag: "DependingOnProperty" }
  | {
    tag: "Fixed"

    /**
     * The property's identifier.
     * @integer
     * @minimum 1
     */
    id: number
  }

/**
 * The blessed aspect's identifier.
 * @integer
 * @minimum 1
 */
export type Aspect = number

/**
 * A reference to an advanced special ability.
 */
export type AdvancedSpecialAbility =
  | {
    tag: "General"

    /**
     * The advanced special ability's numeric identifier.
     * @integer
     * @minimum 1
     */
    id: number
  }
  | {
    tag: "RestrictOptions"

    /**
     * The advanced special ability's numeric identifier.
     * @integer
     * @minimum 1
     */
    id: number

    /**
     * Specify the select option(s) that only are allowed for the referenced
     * advanced special ability; others are disallowed.
     * @minItems 1
     */
    option: Identifier.Group.AdvancedSpecialAbilityRestrictedOption[]
  }
  | {
    tag: "OneOf"

    /**
     * The possible advanced special abilities.
     */
    options: {
      /**
       * The advanced special ability's numeric identifier.
       * @integer
       * @minimum 1
       */
      id: number
    }

    /**
     * Do have to choose on when buying the special ability? Otherwise the
     * decision can be made later.
     */
    is_selection_required_on_purchase: boolean

    /**
     * Specify the select option(s) that only are allowed for the referenced
     * advanced special ability; others are disallowed.
     * @minItems 1
     */
    option: Identifier.Group.AdvancedSpecialAbilityRestrictedOption[]

    display_option?: Prerequisite.Single.DisplayOption.T
  }
  | {
    tag: "DeriveFromExternalOption"

    /**
     * The possible advanced special abilities.
     */
    external_entry: AdvancedSpecialAbilityDerivedExternalEntryId

    /**
     * @minItems
     */
    mappings: {
      /**
       * The select option's identifier.
       */
      from_option: AdvancedSpecialAbilityDerivedExternalEntryOptionId

      /**
       * The advanced special ability's identifier.
       */
      to_advanced: {
        /**
         * The advanced special ability's numeric identifier.
         * @integer
         * @minimum 1
         */
        id: number
      }
    }[]

    display_option?: Prerequisite.Single.DisplayOption.T

    /**
     * Do have to choose on when buying the special ability? Otherwise the
     * decision can be made later.
     */
    is_selection_required_on_purchase: boolean

    /**
     * Specify the select option(s) that only are allowed for the referenced
     * advanced special ability; others are disallowed.
     * @minItems 1
     */
    option: Identifier.Group.AdvancedSpecialAbilityRestrictedOption[]
  }

export type AdvancedSpecialAbilityDerivedExternalEntryId = Identifier.Tagged<"MagicalTradition">

export type AdvancedSpecialAbilityDerivedExternalEntryOptionId = Identifier.Tagged<"Patron">

/**
 * The Advanced Special Abilities for the respective Style Special Ability.
 * Sometimes, only a specific select option or a set of select options of an
 * entry is allowed, which can be modelled by the option property. It can also
 * be that you can choose from a set of special abilities, but then you can't
 * specify an option.
 */
export type AdvancedSpecialAbilities = [
  AdvancedSpecialAbility,
  AdvancedSpecialAbility,
  AdvancedSpecialAbility,
]

export type ApplicableCombatTechniques =
  | { tag: "None" }
  | { tag: "DependingOnCombatStyle" }
  | {
    tag: "All"

    /**
     * @minItems 1
     */
    restrictions?: ApplicableAllCombatTechniquesRestriction[]
  }
  | {
    tag: "AllClose"

    /**
     * @minItems 1
     */
    restrictions?: ApplicableCloseCombatTechniquesRestriction[]
  }
  | {
    tag: "AllRanged"

    /**
     * @minItems 1
     */
    restrictions?: ApplicableRangedCombatTechniquesRestriction[]
  }
  | {
    tag: "Specific"

    /**
     * @minItems 1
     */
    list: {
      id: Identifier.Group.CombatTechnique

      /**
       * @minItems 1
       */
      restrictions?: ApplicableSpecificCombatTechniquesRestriction[]
    }[]
  }

export type ApplicableAllCombatTechniquesRestriction =
  | { tag: "Improvised" }
  | { tag: "PointedBlade" }
  | { tag: "Mount" }
  | {
    tag: "Race"

    /**
     * The race's numeric identifier.
     * @integer
     * @minimum 1
     */
    id: number
  }
  | {
    tag: "ExcludeCombatTechniques"

    /**
     * The combat techniques this combat special ability is **not** applicable
     * to.
     * @minItems 1
     * @uniqueItems
     */
    list: Identifier.Group.CombatTechnique[]
  }

export type ApplicableCloseCombatTechniquesRestriction =
  | { tag: "Improvised" }
  | { tag: "PointedBlade" }
  | { tag: "Mount" }
  | { tag: "HasParry" }
  | { tag: "OneHanded" }
  | { tag: "ParryingWeapon" }
  | {
    tag: "Race"

    /**
     * The race's numeric identifier.
     * @integer
     * @minimum 1
     */
    id: number
  }
  | {
    tag: "ExcludeCombatTechniques"

    /**
     * The combat techniques this combat special ability is **not** applicable
     * to.
     * @minItems 1
     * @uniqueItems
     */
    list: {
      /**
       * The close combat technique's numeric identifier.
       * @integer
       * @minimum 1
       */
      id: number
    }[]
  }

export type ApplicableRangedCombatTechniquesRestriction =
  | { tag: "Improvised" }
  | { tag: "PointedBlade" }
  | { tag: "Mount" }
  | {
    tag: "Race"

    /**
     * The race's numeric identifier.
     * @integer
     * @minimum 1
     */
    id: number
  }
  | {
    tag: "ExcludeCombatTechniques"

    /**
     * The combat techniques this combat special ability is **not** applicable
     * to.
     * @minItems 1
     * @uniqueItems
     */
    list: {
      /**
       * The ranged combat technique's numeric identifier.
       * @integer
       * @minimum 1
       */
      id: number
    }[]
  }

export type ApplicableSpecificCombatTechniquesRestriction =
  | { tag: "Improvised" }
  | { tag: "PointedBlade" }
  | { tag: "Mount" }
  | {
    tag: "Race"

    /**
     * The race's numeric identifier.
     * @integer
     * @minimum 1
     */
    id: number
  }
  | {
    tag: "Level"

    /**
     * The combat special ability is only applicable on a certain level.
     * @integer
     * @minimum 1
     */
    level: number
  }
  | {
    tag: "Weapons"

    /**
     * The specific weapons this combat special ability is only applicable to.
     * @minItems 1
     * @uniqueItems
     */
    list: {
      /**
       * The weapon's numeric identifier.
       * @integer
       * @minimum 1
       */
      id: number
    }[]
  }

export type AdventurePointsValue =
  | {
    tag: "Fixed"

    /**
     * A fixed adventure points value. If the entry has levels, this is the cost
     * for each level as well.
     */
    value: AdventurePointsSingleValue
  }
  | {
    tag: "ByLevel"

    /**
     * An entry with levels may have different costs for each level. The length
     * of the list must match the amount of levels the special ability has.
     * @minItems 2
     */
    values: AdventurePointsSingleValue[]
  }
  | {
    tag: "ByImprovementCost"

    /**
     * An entry with a selection of skills may have different costs for
     * different improvement costs of the selected skill.
     *
     * If the select options will not have entries with improvement cost A
     * (combat techniques only), you may leave out A.
     */
    values: {
      A?: AdventurePointsSingleValue
      B: AdventurePointsSingleValue
      C: AdventurePointsSingleValue
      D: AdventurePointsSingleValue
    }
  }
  | {
    /**
     * Used if AP value is defined by the selected option(s) or special rules.
     */
    tag: "Indefinite"
  }

/**
 * A single adventure points value.
 * @integer
 * @minimum 0
 */
export type AdventurePointsSingleValue = number
