# Activatable

General type specifications used by multiple activatable entries.

## Definitions

### <a name="Id"></a> `Id`

The activatable entry's identifier. An unique, increasing integer.

- **Type:** Integer
- **Minimum:** `0`

---

### <a name="Name"></a> `Name`

The name of the activatable entry.

- **Type:** String
- **Minimum Length:** `1`

---

### <a name="NameInLibrary"></a> `NameInLibrary`

The full name of the entry as stated in the sources. Only use when `name`
needs to be different from full name for text generation purposes.

- **Type:** String
- **Minimum Length:** `1`

---

### <a name="Levels"></a> `Levels`

Number of available levels.

- **Type:** Integer
- **Minimum:** `2`

---

### <a name="Maximum"></a> `Maximum`

The number stating how often you can buy the entry. The **default** depends on
the entry type:

- **Advantage:** `1` in all cases (as specified in the **Core Rules**)
- **Disadvantage:** `1` in all cases (as specified in the **Core Rules**)
- **Special Abilities:** `1` if no options can be selected, otherwise the
  number of possible options

The maximum is only set if it differs from the defaults specified above.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="SelectOptions"></a> `SelectOptions`

Definitions for possible options for the activatable entry. They can either
be derived from entry categories or be defined explicitly. Both can happen as
well, but if there is an explicitly defined select option and a derived
select option has the same identifier (which may only happen if skill or
combat technique identifiers are used for explicit select options), the
explicit definition overwrites the derived option.

Note that this is only a full definition of options for simple logic that can
be made explicit using the more detailed configuration for both derived
categories and explicit options. There are quite a few entries whose option
logic cannot be fully represented here, so that it needs to be implemented
manually.

- **Type:** Object
- **Minimum Properties:** `1`

Key | Description | Details
:-- | :-- | :--
`derived?` | An entry category with optional further configuration. All available entries from the specified categories will be included as separate select options. You can also specify a set of groups that should only be included. Groups not mentioned will be excluded then. | <a href="#SelectOptions/derived">See details</a>
`explicit?` | A list of explicit select options. If the identifier has a specific type, its entry is the base of this select option, where values defined here override values from the base. Define the `src` property if the options are not derived from the rules text of the advantage/disadvantage/special ability but instead are listed in a separate block and/or on a separate page. | <a href="#SelectOptions/explicit">See details</a>

#### <a name="SelectOptions/derived"></a> `derived?`

An entry category with optional further configuration. All available
entries from the specified categories will be included as separate select
options. You can also specify a set of groups that should only be
included. Groups not mentioned will be excluded then.

- **Type:** <a href="./_ActivatableSelectOptionCategory.md#SelectOptionCategory">SelectOptionCategory</a>

#### <a name="SelectOptions/explicit"></a> `explicit?`

A list of explicit select options. If the identifier has a specific type,
its entry is the base of this select option, where values defined here
override values from the base. Define the `src` property if the options
are not derived from the rules text of the advantage/disadvantage/special
ability but instead are listed in a separate block and/or on a separate
page.

- **Type:** List
- **Items:** <a href="#SelectOptions/explicit[]">SelectOptions/explicit[]</a>
- **Minimum Items:** `1`

---

### <a name="SelectOptions/explicit[]"></a> `SelectOptions/explicit[]`

- **Type:** <a href="#ExplicitSelectOption">ExplicitSelectOption</a>

---

### <a name="ExplicitSelectOption"></a> `ExplicitSelectOption`

- **Type:** Union
- **Cases:** <a href="#ExplicitSelectOption'General">ExplicitSelectOption'General</a> | <a href="#ExplicitSelectOption'Skill">ExplicitSelectOption'Skill</a> | <a href="#ExplicitSelectOption'CombatTechnique">ExplicitSelectOption'CombatTechnique</a>

---

### <a name="ExplicitSelectOption'General"></a> `ExplicitSelectOption'General`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ExplicitSelectOption'General/tag">See details</a>
`general` |  | <a href="#ExplicitSelectOption'General/general">See details</a>

#### <a name="ExplicitSelectOption'General/tag"></a> `tag`

- **Constant:** `"General"`

#### <a name="ExplicitSelectOption'General/general"></a> `general`

- **Type:** <a href="#ExplicitGeneralSelectOption">ExplicitGeneralSelectOption</a>

---

### <a name="ExplicitSelectOption'Skill"></a> `ExplicitSelectOption'Skill`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ExplicitSelectOption'Skill/tag">See details</a>
`skill` |  | <a href="#ExplicitSelectOption'Skill/skill">See details</a>

#### <a name="ExplicitSelectOption'Skill/tag"></a> `tag`

- **Constant:** `"Skill"`

#### <a name="ExplicitSelectOption'Skill/skill"></a> `skill`

- **Type:** <a href="#ExplicitSkillSelectOption">ExplicitSkillSelectOption</a>

---

### <a name="ExplicitSelectOption'CombatTechnique"></a> `ExplicitSelectOption'CombatTechnique`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ExplicitSelectOption'CombatTechnique/tag">See details</a>
`combat_technique` |  | <a href="#ExplicitSelectOption'CombatTechnique/combat_technique">See details</a>

#### <a name="ExplicitSelectOption'CombatTechnique/tag"></a> `tag`

- **Constant:** `"CombatTechnique"`

#### <a name="ExplicitSelectOption'CombatTechnique/combat_technique"></a> `combat_technique`

- **Type:** <a href="#ExplicitCombatTechniqueSelectOption">ExplicitCombatTechniqueSelectOption</a>

---

### <a name="ExplicitGeneralSelectOption"></a> `ExplicitGeneralSelectOption`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The option's identifier. An unique, increasing integer. | <a href="#ExplicitGeneralSelectOption/id">See details</a>
`profession_only?` | Sometimes, professions use specific text selections that are not contained in described lists. This ensures you can use them for professions only. They are not going to be displayed as options to the user. | <a href="#ExplicitGeneralSelectOption/profession_only">See details</a>
`skill_applications?` | Registers new applications, which get enabled once this entry is activated with its respective select option. It specifies an entry-unique identifier and the skill it belongs to. A translation can be left out if its name equals the name of the origin select option. | <a href="#ExplicitGeneralSelectOption/skill_applications">See details</a>
`skill_uses?` | Registers uses, which get enabled once this entry is activated with its respective select option. It specifies an entry-unique identifier and the skill it belongs to. A translation can be left out if its name equals the name of the origin select option. | <a href="#ExplicitGeneralSelectOption/skill_uses">See details</a>
`prerequisites?` |  | <a href="#ExplicitGeneralSelectOption/prerequisites">See details</a>
`ap_value?` | Specific AP cost for the select option. | <a href="#ExplicitGeneralSelectOption/ap_value">See details</a>
`src?` |  | <a href="#ExplicitGeneralSelectOption/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#ExplicitGeneralSelectOption/translations">See details</a>

#### <a name="ExplicitGeneralSelectOption/id"></a> `id`

The option's identifier. An unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="ExplicitGeneralSelectOption/profession_only"></a> `profession_only?`

Sometimes, professions use specific text selections that are not
contained in described lists. This ensures you can use them for
professions only. They are not going to be displayed as options to the
user.

- **Constant:** `true`

#### <a name="ExplicitGeneralSelectOption/skill_applications"></a> `skill_applications?`

Registers new applications, which get enabled once this entry is
activated with its respective select option. It specifies an entry-unique
identifier and the skill it belongs to. A translation can be left out if
its name equals the name of the origin select option.

- **Type:** <a href="#SkillApplications">SkillApplications</a>

#### <a name="ExplicitGeneralSelectOption/skill_uses"></a> `skill_uses?`

Registers uses, which get enabled once this entry is activated with its
respective select option. It specifies an entry-unique identifier and the
skill it belongs to. A translation can be left out if its name equals the
name of the origin select option.

- **Type:** <a href="#SkillUses">SkillUses</a>

#### <a name="ExplicitGeneralSelectOption/prerequisites"></a> `prerequisites?`

- **Type:** <a href="./_Prerequisite.md#GeneralPrerequisites">GeneralPrerequisites</a>

#### <a name="ExplicitGeneralSelectOption/ap_value"></a> `ap_value?`

Specific AP cost for the select option.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="ExplicitGeneralSelectOption/src"></a> `src?`

- **Type:** <a href="./source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="ExplicitGeneralSelectOption/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#ExplicitGeneralSelectOption/translations[key]">ExplicitGeneralSelectOption/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="ExplicitGeneralSelectOption/translations[key]"></a> `ExplicitGeneralSelectOption/translations[key]`

- **Type:** <a href="#ExplicitGeneralSelectOptionTranslation">ExplicitGeneralSelectOptionTranslation</a>

---

### <a name="ExplicitGeneralSelectOptionTranslation"></a> `ExplicitGeneralSelectOptionTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The name of the select option. | <a href="#ExplicitGeneralSelectOptionTranslation/name">See details</a>
`name_in_profession?` | The name of the select option when displayed in a generated profession text. | <a href="#ExplicitGeneralSelectOptionTranslation/name_in_profession">See details</a>
`description?` | The description of the select option. Useful for Bad Habits, Trade Secrets and other entries where a description is available. | <a href="#ExplicitGeneralSelectOptionTranslation/description">See details</a>
`errata?` |  | <a href="#ExplicitGeneralSelectOptionTranslation/errata">See details</a>

#### <a name="ExplicitGeneralSelectOptionTranslation/name"></a> `name`

The name of the select option.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="ExplicitGeneralSelectOptionTranslation/name_in_profession"></a> `name_in_profession?`

The name of the select option when displayed in a generated
profession text.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="ExplicitGeneralSelectOptionTranslation/description"></a> `description?`

The description of the select option. Useful for Bad Habits, Trade
Secrets and other entries where a description is available.

- **Type:** Markdown-formatted text
- **Minimum Length:** `1`

#### <a name="ExplicitGeneralSelectOptionTranslation/errata"></a> `errata?`

- **Type:** <a href="./source/_Erratum.md#Errata">Errata</a>

---

### <a name="ExplicitSkillSelectOption"></a> `ExplicitSkillSelectOption`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The skill's identifier. An unique, increasing integer. | <a href="#ExplicitSkillSelectOption/id">See details</a>
`skill_applications?` | Registers new applications, which get enabled once this entry is activated with its respective select option. It specifies an entry-unique identifier and the skill it belongs to. A translation can be left out if its name equals the name of the origin select option. | <a href="#ExplicitSkillSelectOption/skill_applications">See details</a>
`skill_uses?` | Registers uses, which get enabled once this entry is activated with its respective select option. It specifies an entry-unique identifier and the skill it belongs to. A translation can be left out if its name equals the name of the origin select option. | <a href="#ExplicitSkillSelectOption/skill_uses">See details</a>
`prerequisites?` |  | <a href="#ExplicitSkillSelectOption/prerequisites">See details</a>
`ap_value?` | Specific AP cost for the select option. | <a href="#ExplicitSkillSelectOption/ap_value">See details</a>
`src?` |  | <a href="#ExplicitSkillSelectOption/src">See details</a>
`translations?` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#ExplicitSkillSelectOption/translations">See details</a>

#### <a name="ExplicitSkillSelectOption/id"></a> `id`

The skill's identifier. An unique, increasing integer.

- **Type:** <a href="./_Identifier.md#SkillIdentifier">SkillIdentifier</a>

#### <a name="ExplicitSkillSelectOption/skill_applications"></a> `skill_applications?`

Registers new applications, which get enabled once this entry is
activated with its respective select option. It specifies an entry-unique
identifier and the skill it belongs to. A translation can be left out if
its name equals the name of the origin select option.

- **Type:** List
- **Items:** <a href="#ExplicitSkillSelectOption/skill_applications[]">ExplicitSkillSelectOption/skill_applications[]</a>
- **Minimum Items:** `1`

#### <a name="ExplicitSkillSelectOption/skill_uses"></a> `skill_uses?`

Registers uses, which get enabled once this entry is activated with its
respective select option. It specifies an entry-unique identifier and the
skill it belongs to. A translation can be left out if its name equals the
name of the origin select option.

- **Type:** List
- **Items:** <a href="#ExplicitSkillSelectOption/skill_uses[]">ExplicitSkillSelectOption/skill_uses[]</a>
- **Minimum Items:** `1`

#### <a name="ExplicitSkillSelectOption/prerequisites"></a> `prerequisites?`

- **Type:** <a href="./_Prerequisite.md#GeneralPrerequisites">GeneralPrerequisites</a>

#### <a name="ExplicitSkillSelectOption/ap_value"></a> `ap_value?`

Specific AP cost for the select option.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="ExplicitSkillSelectOption/src"></a> `src?`

- **Type:** <a href="./source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="ExplicitSkillSelectOption/translations"></a> `translations?`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#ExplicitSkillSelectOption/translations[key]">ExplicitSkillSelectOption/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="ExplicitSkillSelectOption/skill_applications[]"></a> `ExplicitSkillSelectOption/skill_applications[]`

- **Type:** <a href="./_ActivatableSelectOptionCategory.md#SkillApplicationOrUse">SkillApplicationOrUse</a>

---

### <a name="ExplicitSkillSelectOption/skill_uses[]"></a> `ExplicitSkillSelectOption/skill_uses[]`

- **Type:** <a href="./_ActivatableSelectOptionCategory.md#SkillApplicationOrUse">SkillApplicationOrUse</a>

---

### <a name="ExplicitSkillSelectOption/translations[key]"></a> `ExplicitSkillSelectOption/translations[key]`

- **Type:** <a href="#ExplicitSkillSelectOptionTranslation">ExplicitSkillSelectOptionTranslation</a>

---

### <a name="ExplicitSkillSelectOptionTranslation"></a> `ExplicitSkillSelectOptionTranslation`

- **Type:** Object
- **Minimum Properties:** `1`

Key | Description | Details
:-- | :-- | :--
`errata?` |  | <a href="#ExplicitSkillSelectOptionTranslation/errata">See details</a>

#### <a name="ExplicitSkillSelectOptionTranslation/errata"></a> `errata?`

- **Type:** <a href="./source/_Erratum.md#Errata">Errata</a>

---

### <a name="ExplicitCombatTechniqueSelectOption"></a> `ExplicitCombatTechniqueSelectOption`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The combat technique's identifier. | <a href="#ExplicitCombatTechniqueSelectOption/id">See details</a>
`prerequisites?` |  | <a href="#ExplicitCombatTechniqueSelectOption/prerequisites">See details</a>
`ap_value?` | Specific AP cost for the select option. | <a href="#ExplicitCombatTechniqueSelectOption/ap_value">See details</a>
`src?` |  | <a href="#ExplicitCombatTechniqueSelectOption/src">See details</a>
`translations?` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#ExplicitCombatTechniqueSelectOption/translations">See details</a>

#### <a name="ExplicitCombatTechniqueSelectOption/id"></a> `id`

The combat technique's identifier.

- **Type:** <a href="./_IdentifierGroup.md#CombatTechniqueIdentifier">CombatTechniqueIdentifier</a>

#### <a name="ExplicitCombatTechniqueSelectOption/prerequisites"></a> `prerequisites?`

- **Type:** <a href="./_Prerequisite.md#GeneralPrerequisites">GeneralPrerequisites</a>

#### <a name="ExplicitCombatTechniqueSelectOption/ap_value"></a> `ap_value?`

Specific AP cost for the select option.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="ExplicitCombatTechniqueSelectOption/src"></a> `src?`

- **Type:** <a href="./source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="ExplicitCombatTechniqueSelectOption/translations"></a> `translations?`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#ExplicitCombatTechniqueSelectOption/translations[key]">ExplicitCombatTechniqueSelectOption/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="ExplicitCombatTechniqueSelectOption/translations[key]"></a> `ExplicitCombatTechniqueSelectOption/translations[key]`

- **Type:** <a href="#ExplicitCombatTechniqueSelectOptionTranslation">ExplicitCombatTechniqueSelectOptionTranslation</a>

---

### <a name="ExplicitCombatTechniqueSelectOptionTranslation"></a> `ExplicitCombatTechniqueSelectOptionTranslation`

- **Type:** Object
- **Minimum Properties:** `1`

Key | Description | Details
:-- | :-- | :--
`errata?` |  | <a href="#ExplicitCombatTechniqueSelectOptionTranslation/errata">See details</a>

#### <a name="ExplicitCombatTechniqueSelectOptionTranslation/errata"></a> `errata?`

- **Type:** <a href="./source/_Erratum.md#Errata">Errata</a>

---

### <a name="Rules"></a> `Rules`

The rule text.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyMarkdown">NonEmptyMarkdown</a>

---

### <a name="Effect"></a> `Effect`

The effect description.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyMarkdown">NonEmptyMarkdown</a>

---

### <a name="CombatSpecialAbilityUsageType"></a> `CombatSpecialAbilityUsageType`

The definition of how the combat special ability can be used in combat.

- **Possible values:** `"Passive"`, `"BasicManeuver"`, `"SpecialManeuver"`

---

### <a name="CombatSpecialAbilityType"></a> `CombatSpecialAbilityType`

The definition of if the combat special ability can be used when armed or
when unarmed.

- **Possible values:** `"Armed"`, `"Unarmed"`

---

### <a name="SkillApplications"></a> `SkillApplications`

Registers new skill applications, which get enabled once this entry is
activated. It specifies an entry-unique identifier and the skill it belongs
to. A translation can be left out if its name equals the name of the origin
activatable entry.

- **Type:** List
- **Items:** <a href="#SkillApplications[]">SkillApplications[]</a>
- **Minimum Items:** `1`

---

### <a name="SkillApplications[]"></a> `SkillApplications[]`

- **Type:** <a href="#SkillApplication">SkillApplication</a>

---

### <a name="SkillApplication"></a> `SkillApplication`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The application's identifier. An entry-unique, increasing integer. | <a href="#SkillApplication/id">See details</a>
`skill` | The skill(s) this application belongs to. | <a href="#SkillApplication/skill">See details</a>
`translations?` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#SkillApplication/translations">See details</a>

#### <a name="SkillApplication/id"></a> `id`

The application's identifier. An entry-unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="SkillApplication/skill"></a> `skill`

The skill(s) this application belongs to.

- **Type:** <a href="#SkillApplicationAssociatedSkill">SkillApplicationAssociatedSkill</a>

#### <a name="SkillApplication/translations"></a> `translations?`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#SkillApplication/translations[key]">SkillApplication/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="SkillApplication/translations[key]"></a> `SkillApplication/translations[key]`

- **Type:** <a href="#SkillApplicationTranslation">SkillApplicationTranslation</a>

---

### <a name="SkillApplicationAssociatedSkill"></a> `SkillApplicationAssociatedSkill`

- **Type:** Union
- **Cases:** <a href="#SkillApplicationAssociatedSkill'Single">SkillApplicationAssociatedSkill'Single</a> | <a href="#SkillApplicationAssociatedSkill'Multiple">SkillApplicationAssociatedSkill'Multiple</a>

---

### <a name="SkillApplicationAssociatedSkill'Single"></a> `SkillApplicationAssociatedSkill'Single`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#SkillApplicationAssociatedSkill'Single/tag">See details</a>
`single` |  | <a href="#SkillApplicationAssociatedSkill'Single/single">See details</a>

#### <a name="SkillApplicationAssociatedSkill'Single/tag"></a> `tag`

- **Constant:** `"Single"`

#### <a name="SkillApplicationAssociatedSkill'Single/single"></a> `single`

- **Type:** <a href="./_SimpleReferences.md#SkillReference">SkillReference</a>

---

### <a name="SkillApplicationAssociatedSkill'Multiple"></a> `SkillApplicationAssociatedSkill'Multiple`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#SkillApplicationAssociatedSkill'Multiple/tag">See details</a>
`multiple` |  | <a href="#SkillApplicationAssociatedSkill'Multiple/multiple">See details</a>

#### <a name="SkillApplicationAssociatedSkill'Multiple/tag"></a> `tag`

- **Constant:** `"Multiple"`

#### <a name="SkillApplicationAssociatedSkill'Multiple/multiple"></a> `multiple`

- **Type:** <a href="#SkillApplicationAssociatedSkills">SkillApplicationAssociatedSkills</a>

---

### <a name="SkillApplicationAssociatedSkills"></a> `SkillApplicationAssociatedSkills`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`list` | The skills this application belongs to. | <a href="#SkillApplicationAssociatedSkills/list">See details</a>
`required_skill_rating?` | If an application applies to multiple skills, it may need to ensure the respective skill is on a certain skill rating if the activatable entry cannot ensure this prerequisite. | <a href="#SkillApplicationAssociatedSkills/required_skill_rating">See details</a>

#### <a name="SkillApplicationAssociatedSkills/list"></a> `list`

The skills this application belongs to.

- **Type:** List
- **Items:** <a href="#SkillApplicationAssociatedSkills/list[]">SkillApplicationAssociatedSkills/list[]</a>
- **Minimum Items:** `2`

#### <a name="SkillApplicationAssociatedSkills/required_skill_rating"></a> `required_skill_rating?`

If an application applies to multiple skills, it may need to ensure the
respective skill is on a certain skill rating if the activatable entry
cannot ensure this prerequisite.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="SkillApplicationAssociatedSkills/list[]"></a> `SkillApplicationAssociatedSkills/list[]`

- **Type:** <a href="./_SimpleReferences.md#SkillReference">SkillReference</a>

---

### <a name="SkillApplicationTranslation"></a> `SkillApplicationTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The name of the application if different from the activatable entry's name. | <a href="#SkillApplicationTranslation/name">See details</a>

#### <a name="SkillApplicationTranslation/name"></a> `name`

The name of the application if different from the activatable entry's name.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

---

### <a name="SkillUses"></a> `SkillUses`

Registers uses, which get enabled once this entry is activated. It specifies
an entry-unique identifier and the skill it belongs to. A translation can be
left out if its name equals the name of the origin activatable entry.

- **Type:** List
- **Items:** <a href="#SkillUses[]">SkillUses[]</a>
- **Minimum Items:** `1`

---

### <a name="SkillUses[]"></a> `SkillUses[]`

- **Type:** <a href="#SkillUse">SkillUse</a>

---

### <a name="SkillUse"></a> `SkillUse`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The use's identifier. An entry-unique, increasing integer. | <a href="#SkillUse/id">See details</a>
`skill` | The skill(s) this use belongs to. | <a href="#SkillUse/skill">See details</a>
`translations?` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#SkillUse/translations">See details</a>

#### <a name="SkillUse/id"></a> `id`

The use's identifier. An entry-unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="SkillUse/skill"></a> `skill`

The skill(s) this use belongs to.

- **Type:** <a href="#SkillUseAssociatedSkill">SkillUseAssociatedSkill</a>

#### <a name="SkillUse/translations"></a> `translations?`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#SkillUse/translations[key]">SkillUse/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="SkillUse/translations[key]"></a> `SkillUse/translations[key]`

- **Type:** <a href="#SkillUseTranslation">SkillUseTranslation</a>

---

### <a name="SkillUseAssociatedSkill"></a> `SkillUseAssociatedSkill`

- **Type:** Union
- **Cases:** <a href="#SkillUseAssociatedSkill'Single">SkillUseAssociatedSkill'Single</a> | <a href="#SkillUseAssociatedSkill'Multiple">SkillUseAssociatedSkill'Multiple</a>

---

### <a name="SkillUseAssociatedSkill'Single"></a> `SkillUseAssociatedSkill'Single`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#SkillUseAssociatedSkill'Single/tag">See details</a>
`single` |  | <a href="#SkillUseAssociatedSkill'Single/single">See details</a>

#### <a name="SkillUseAssociatedSkill'Single/tag"></a> `tag`

- **Constant:** `"Single"`

#### <a name="SkillUseAssociatedSkill'Single/single"></a> `single`

- **Type:** <a href="./_SimpleReferences.md#SkillReference">SkillReference</a>

---

### <a name="SkillUseAssociatedSkill'Multiple"></a> `SkillUseAssociatedSkill'Multiple`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#SkillUseAssociatedSkill'Multiple/tag">See details</a>
`multiple` |  | <a href="#SkillUseAssociatedSkill'Multiple/multiple">See details</a>

#### <a name="SkillUseAssociatedSkill'Multiple/tag"></a> `tag`

- **Constant:** `"Multiple"`

#### <a name="SkillUseAssociatedSkill'Multiple/multiple"></a> `multiple`

- **Type:** <a href="#SkillUseAssociatedSkills">SkillUseAssociatedSkills</a>

---

### <a name="SkillUseAssociatedSkills"></a> `SkillUseAssociatedSkills`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`list` | The skills this use belongs to. | <a href="#SkillUseAssociatedSkills/list">See details</a>

#### <a name="SkillUseAssociatedSkills/list"></a> `list`

The skills this use belongs to.

- **Type:** List
- **Items:** <a href="#SkillUseAssociatedSkills/list[]">SkillUseAssociatedSkills/list[]</a>
- **Minimum Items:** `2`

---

### <a name="SkillUseAssociatedSkills/list[]"></a> `SkillUseAssociatedSkills/list[]`

- **Type:** <a href="./_SimpleReferences.md#SkillReference">SkillReference</a>

---

### <a name="SkillUseTranslation"></a> `SkillUseTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The name of the use if different from the activatable entry's name. | <a href="#SkillUseTranslation/name">See details</a>

#### <a name="SkillUseTranslation/name"></a> `name`

The name of the use if different from the activatable entry's name.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

---

### <a name="Penalty"></a> `Penalty`

The penalty the special ability gives when used.

- **Type:** Union
- **Cases:** <a href="#Penalty'Single">Penalty'Single</a> | <a href="#Penalty'ByHandedness">Penalty'ByHandedness</a> | <a href="#Penalty'ByActivation">Penalty'ByActivation</a> | <a href="#Penalty'Selection">Penalty'Selection</a> | <a href="#Penalty'ByLevel">Penalty'ByLevel</a> | <a href="#Penalty'ByAttack">Penalty'ByAttack</a> | <a href="#Penalty'DependsOnHitZone">Penalty'DependsOnHitZone</a>

---

### <a name="Penalty'Single"></a> `Penalty'Single`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Penalty'Single/tag">See details</a>
`single` |  | <a href="#Penalty'Single/single">See details</a>

#### <a name="Penalty'Single/tag"></a> `tag`

- **Constant:** `"Single"`

#### <a name="Penalty'Single/single"></a> `single`

- **Type:** <a href="#SinglePenalty">SinglePenalty</a>

---

### <a name="Penalty'ByHandedness"></a> `Penalty'ByHandedness`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Penalty'ByHandedness/tag">See details</a>
`by_handedness` |  | <a href="#Penalty'ByHandedness/by_handedness">See details</a>

#### <a name="Penalty'ByHandedness/tag"></a> `tag`

- **Constant:** `"ByHandedness"`

#### <a name="Penalty'ByHandedness/by_handedness"></a> `by_handedness`

- **Type:** <a href="#PenaltyByHandedness">PenaltyByHandedness</a>

---

### <a name="Penalty'ByActivation"></a> `Penalty'ByActivation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Penalty'ByActivation/tag">See details</a>
`by_activation` |  | <a href="#Penalty'ByActivation/by_activation">See details</a>

#### <a name="Penalty'ByActivation/tag"></a> `tag`

- **Constant:** `"ByActivation"`

#### <a name="Penalty'ByActivation/by_activation"></a> `by_activation`

- **Type:** <a href="#PenaltyByActivation">PenaltyByActivation</a>

---

### <a name="Penalty'Selection"></a> `Penalty'Selection`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Penalty'Selection/tag">See details</a>
`selection` |  | <a href="#Penalty'Selection/selection">See details</a>

#### <a name="Penalty'Selection/tag"></a> `tag`

- **Constant:** `"Selection"`

#### <a name="Penalty'Selection/selection"></a> `selection`

- **Type:** <a href="#PenaltySelection">PenaltySelection</a>

---

### <a name="Penalty'ByLevel"></a> `Penalty'ByLevel`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Penalty'ByLevel/tag">See details</a>
`by_level` |  | <a href="#Penalty'ByLevel/by_level">See details</a>

#### <a name="Penalty'ByLevel/tag"></a> `tag`

- **Constant:** `"ByLevel"`

#### <a name="Penalty'ByLevel/by_level"></a> `by_level`

- **Type:** <a href="#PenaltyByLevel">PenaltyByLevel</a>

---

### <a name="Penalty'ByAttack"></a> `Penalty'ByAttack`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Penalty'ByAttack/tag">See details</a>
`by_attack` |  | <a href="#Penalty'ByAttack/by_attack">See details</a>

#### <a name="Penalty'ByAttack/tag"></a> `tag`

- **Constant:** `"ByAttack"`

#### <a name="Penalty'ByAttack/by_attack"></a> `by_attack`

- **Type:** <a href="#PenaltyByAttack">PenaltyByAttack</a>

---

### <a name="Penalty'DependsOnHitZone"></a> `Penalty'DependsOnHitZone`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Penalty'DependsOnHitZone/tag">See details</a>
`depends_on_hit_zone` |  | <a href="#Penalty'DependsOnHitZone/depends_on_hit_zone">See details</a>

#### <a name="Penalty'DependsOnHitZone/tag"></a> `tag`

- **Constant:** `"DependsOnHitZone"`

#### <a name="Penalty'DependsOnHitZone/depends_on_hit_zone"></a> `depends_on_hit_zone`

- **Type:** <a href="#Penalty'DependsOnHitZone/depends_on_hit_zone">Object</a>

---

### <a name="Penalty'DependsOnHitZone/depends_on_hit_zone"></a> `Penalty'DependsOnHitZone/depends_on_hit_zone`

- **Type:** Empty Object

---

### <a name="SinglePenalty"></a> `SinglePenalty`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`value` | The penalty value. | <a href="#SinglePenalty/value">See details</a>
`applies_to_parry?` | Set to `true` if the penalty applies to the parry instead of the attack. | <a href="#SinglePenalty/applies_to_parry">See details</a>

#### <a name="SinglePenalty/value"></a> `value`

The penalty value.

- **Type:** Integer

#### <a name="SinglePenalty/applies_to_parry"></a> `applies_to_parry?`

Set to `true` if the penalty applies to the parry instead of the attack.

- **Constant:** `true`

---

### <a name="PenaltyByHandedness"></a> `PenaltyByHandedness`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`one_handed` | The penalty value for one-handed weapons. | <a href="#PenaltyByHandedness/one_handed">See details</a>
`two_handed` | The penalty value for two-handed weapons. | <a href="#PenaltyByHandedness/two_handed">See details</a>
`applies_to_parry?` | Set to `true` if the penalty applies to the parry instead of the attack. | <a href="#PenaltyByHandedness/applies_to_parry">See details</a>

#### <a name="PenaltyByHandedness/one_handed"></a> `one_handed`

The penalty value for one-handed weapons.

- **Type:** Integer

#### <a name="PenaltyByHandedness/two_handed"></a> `two_handed`

The penalty value for two-handed weapons.

- **Type:** Integer

#### <a name="PenaltyByHandedness/applies_to_parry"></a> `applies_to_parry?`

Set to `true` if the penalty applies to the parry instead of the attack.

- **Constant:** `true`

---

### <a name="PenaltyByActivation"></a> `PenaltyByActivation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`active` | The penalty value if the entry has been bought by the character. | <a href="#PenaltyByActivation/active">See details</a>
`inactive` | The penalty value if the entry has not been bought by the character. | <a href="#PenaltyByActivation/inactive">See details</a>
`applies_to_parry?` | Set to `true` if the penalty applies to the parry instead of the attack. | <a href="#PenaltyByActivation/applies_to_parry">See details</a>

#### <a name="PenaltyByActivation/active"></a> `active`

The penalty value if the entry has been bought by the character.

- **Type:** Integer

#### <a name="PenaltyByActivation/inactive"></a> `inactive`

The penalty value if the entry has not been bought by the character.

- **Type:** Integer

#### <a name="PenaltyByActivation/applies_to_parry"></a> `applies_to_parry?`

Set to `true` if the penalty applies to the parry instead of the attack.

- **Constant:** `true`

---

### <a name="PenaltySelection"></a> `PenaltySelection`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`options` |  | <a href="#PenaltySelection/options">See details</a>

#### <a name="PenaltySelection/options"></a> `options`

- **Type:** <a href="#PenaltySelectionOptions">PenaltySelectionOptions</a>

---

### <a name="PenaltySelectionOptions"></a> `PenaltySelectionOptions`

- **Type:** Union
- **Cases:** <a href="#PenaltySelectionOptions'Specific">PenaltySelectionOptions'Specific</a> | <a href="#PenaltySelectionOptions'Range">PenaltySelectionOptions'Range</a>

---

### <a name="PenaltySelectionOptions'Specific"></a> `PenaltySelectionOptions'Specific`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#PenaltySelectionOptions'Specific/tag">See details</a>
`specific` |  | <a href="#PenaltySelectionOptions'Specific/specific">See details</a>

#### <a name="PenaltySelectionOptions'Specific/tag"></a> `tag`

- **Constant:** `"Specific"`

#### <a name="PenaltySelectionOptions'Specific/specific"></a> `specific`

- **Type:** <a href="#SpecificPenaltySelectionOptions">SpecificPenaltySelectionOptions</a>

---

### <a name="PenaltySelectionOptions'Range"></a> `PenaltySelectionOptions'Range`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#PenaltySelectionOptions'Range/tag">See details</a>
`range` |  | <a href="#PenaltySelectionOptions'Range/range">See details</a>

#### <a name="PenaltySelectionOptions'Range/tag"></a> `tag`

- **Constant:** `"Range"`

#### <a name="PenaltySelectionOptions'Range/range"></a> `range`

- **Type:** <a href="#PenaltySelectionOptionsRange">PenaltySelectionOptionsRange</a>

---

### <a name="SpecificPenaltySelectionOptions"></a> `SpecificPenaltySelectionOptions`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`list` | The list of specific penalty options. | <a href="#SpecificPenaltySelectionOptions/list">See details</a>

#### <a name="SpecificPenaltySelectionOptions/list"></a> `list`

The list of specific penalty options.

- **Type:** List
- **Items:** <a href="#SpecificPenaltySelectionOptions/list[]">SpecificPenaltySelectionOptions/list[]</a>
- **Minimum Items:** `2`
- **Unique Items:** Yes

---

### <a name="SpecificPenaltySelectionOptions/list[]"></a> `SpecificPenaltySelectionOptions/list[]`

- **Type:** <a href="#SpecificPenaltySelectionOption">SpecificPenaltySelectionOption</a>

---

### <a name="SpecificPenaltySelectionOption"></a> `SpecificPenaltySelectionOption`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`value` | The penalty value. | <a href="#SpecificPenaltySelectionOption/value">See details</a>

#### <a name="SpecificPenaltySelectionOption/value"></a> `value`

The penalty value.

- **Type:** Integer

---

### <a name="PenaltySelectionOptionsRange"></a> `PenaltySelectionOptionsRange`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`minimum` | The minimum penalty value. | <a href="#PenaltySelectionOptionsRange/minimum">See details</a>
`maximum` | The maximum penalty value. | <a href="#PenaltySelectionOptionsRange/maximum">See details</a>

#### <a name="PenaltySelectionOptionsRange/minimum"></a> `minimum`

The minimum penalty value.

- **Type:** Integer

#### <a name="PenaltySelectionOptionsRange/maximum"></a> `maximum`

The maximum penalty value.

- **Type:** Integer

---

### <a name="PenaltyByLevel"></a> `PenaltyByLevel`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`levels` | A continuous range of penalties for each level. The first element is the penalty for the first level, the second element is the penalty for the second level, and so on. | <a href="#PenaltyByLevel/levels">See details</a>
`external?` | The combat-related special ability of which the level defines the penalty instead. | <a href="#PenaltyByLevel/external">See details</a>

#### <a name="PenaltyByLevel/levels"></a> `levels`

A continuous range of penalties for each level. The first element is the
penalty for the first level, the second element is the penalty for the
second level, and so on.

- **Type:** List
- **Items:** <a href="#PenaltyByLevel/levels[]">PenaltyByLevel/levels[]</a>
- **Minimum Items:** `2`

#### <a name="PenaltyByLevel/external"></a> `external?`

The combat-related special ability of which the level defines the penalty
instead.

- **Type:** <a href="#PenaltyByExternalLevel">PenaltyByExternalLevel</a>

---

### <a name="PenaltyByLevel/levels[]"></a> `PenaltyByLevel/levels[]`

- **Type:** <a href="#PenaltyByLevelLevel">PenaltyByLevelLevel</a>

---

### <a name="PenaltyByLevelLevel"></a> `PenaltyByLevelLevel`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`value` | The penalty value for this level. | <a href="#PenaltyByLevelLevel/value">See details</a>

#### <a name="PenaltyByLevelLevel/value"></a> `value`

The penalty value for this level.

- **Type:** Integer

---

### <a name="PenaltyByExternalLevel"></a> `PenaltyByExternalLevel`

The combat-related special ability of which the level defines the penalty
instead.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The identifier of the combat-related special ability of which the level defines the penalty instead. | <a href="#PenaltyByExternalLevel/id">See details</a>

#### <a name="PenaltyByExternalLevel/id"></a> `id`

The identifier of the combat-related special ability of which the level
defines the penalty instead.

- **Type:** <a href="./_IdentifierGroup.md#CombatRelatedSpecialAbilityIdentifier">CombatRelatedSpecialAbilityIdentifier</a>

---

### <a name="PenaltyByAttack"></a> `PenaltyByAttack`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`list` | A list of penalties for subsequent attacks. The first element is the penalty for the first attack, the second element is the penalty for the second attack, and so on. The order of the first element may be changed using `initial_order`, so that e.g. if set to `2`, the first element is the penalty for the second attack, the second element is the penalty for the third attack, and so on. | <a href="#PenaltyByAttack/list">See details</a>
`initial_order?` | The order of the first element in the `list` of penalties. | <a href="#PenaltyByAttack/initial_order">See details</a>
`attack_replacement?` | Set if a predefined different word should be used instead of the word `attack` for display purposes. | <a href="#PenaltyByAttack/attack_replacement">See details</a>

#### <a name="PenaltyByAttack/list"></a> `list`

A list of penalties for subsequent attacks. The first element is the
penalty for the first attack, the second element is the penalty for the
second attack, and so on. The order of the first element may be changed
using `initial_order`, so that e.g. if set to `2`, the first element is
the penalty for the second attack, the second element is the penalty for
the third attack, and so on.

- **Type:** List
- **Items:** <a href="#PenaltyByAttack/list[]">PenaltyByAttack/list[]</a>
- **Minimum Items:** `1`

#### <a name="PenaltyByAttack/initial_order"></a> `initial_order?`

The order of the first element in the `list` of penalties.

- **Type:** Number

#### <a name="PenaltyByAttack/attack_replacement"></a> `attack_replacement?`

Set if a predefined different word should be used instead of the word
`attack` for display purposes.

- **Type:** <a href="#PenaltyByAttackReplacement">PenaltyByAttackReplacement</a>

---

### <a name="PenaltyByAttack/list[]"></a> `PenaltyByAttack/list[]`

- **Type:** <a href="#PenaltyByAttackOrderItem">PenaltyByAttackOrderItem</a>

---

### <a name="PenaltyByAttackOrderItem"></a> `PenaltyByAttackOrderItem`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`value` | The penalty value for this order. | <a href="#PenaltyByAttackOrderItem/value">See details</a>

#### <a name="PenaltyByAttackOrderItem/value"></a> `value`

The penalty value for this order.

- **Type:** Integer

---

### <a name="PenaltyByAttackReplacement"></a> `PenaltyByAttackReplacement`

Set if a predefined different word should be used instead of the word
`attack` for display purposes.

- **Possible values:** `"Throw"`

---

### <a name="EnchantmentCost"></a> `EnchantmentCost`

- **Type:** Union
- **Cases:** <a href="#EnchantmentCost'ArcaneEnergyCost">EnchantmentCost'ArcaneEnergyCost</a> | <a href="#EnchantmentCost'BindingCost">EnchantmentCost'BindingCost</a>

---

### <a name="EnchantmentCost'ArcaneEnergyCost"></a> `EnchantmentCost'ArcaneEnergyCost`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#EnchantmentCost'ArcaneEnergyCost/tag">See details</a>
`arcane_energy_cost` |  | <a href="#EnchantmentCost'ArcaneEnergyCost/arcane_energy_cost">See details</a>

#### <a name="EnchantmentCost'ArcaneEnergyCost/tag"></a> `tag`

- **Constant:** `"ArcaneEnergyCost"`

#### <a name="EnchantmentCost'ArcaneEnergyCost/arcane_energy_cost"></a> `arcane_energy_cost`

- **Type:** <a href="#ArcaneEnergyCost">ArcaneEnergyCost</a>

---

### <a name="EnchantmentCost'BindingCost"></a> `EnchantmentCost'BindingCost`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#EnchantmentCost'BindingCost/tag">See details</a>
`binding_cost` |  | <a href="#EnchantmentCost'BindingCost/binding_cost">See details</a>

#### <a name="EnchantmentCost'BindingCost/tag"></a> `tag`

- **Constant:** `"BindingCost"`

#### <a name="EnchantmentCost'BindingCost/binding_cost"></a> `binding_cost`

- **Type:** <a href="#BindingCost">BindingCost</a>

---

### <a name="ArcaneEnergyCost"></a> `ArcaneEnergyCost`

The AE Cost.

- **Type:** Union
- **Cases:** <a href="#ArcaneEnergyCost'Fixed">ArcaneEnergyCost'Fixed</a> | <a href="#ArcaneEnergyCost'PerCountable">ArcaneEnergyCost'PerCountable</a> | <a href="#ArcaneEnergyCost'ActivationAndHalfInterval">ArcaneEnergyCost'ActivationAndHalfInterval</a> | <a href="#ArcaneEnergyCost'Indefinite">ArcaneEnergyCost'Indefinite</a> | <a href="#ArcaneEnergyCost'Disjunction">ArcaneEnergyCost'Disjunction</a> | <a href="#ArcaneEnergyCost'None">ArcaneEnergyCost'None</a> | <a href="#ArcaneEnergyCost'Variable">ArcaneEnergyCost'Variable</a>

---

### <a name="ArcaneEnergyCost'Fixed"></a> `ArcaneEnergyCost'Fixed`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ArcaneEnergyCost'Fixed/tag">See details</a>
`fixed` |  | <a href="#ArcaneEnergyCost'Fixed/fixed">See details</a>

#### <a name="ArcaneEnergyCost'Fixed/tag"></a> `tag`

- **Constant:** `"Fixed"`

#### <a name="ArcaneEnergyCost'Fixed/fixed"></a> `fixed`

- **Type:** <a href="#FixedArcaneEnergyCost">FixedArcaneEnergyCost</a>

---

### <a name="ArcaneEnergyCost'PerCountable"></a> `ArcaneEnergyCost'PerCountable`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ArcaneEnergyCost'PerCountable/tag">See details</a>
`per_countable` |  | <a href="#ArcaneEnergyCost'PerCountable/per_countable">See details</a>

#### <a name="ArcaneEnergyCost'PerCountable/tag"></a> `tag`

- **Constant:** `"PerCountable"`

#### <a name="ArcaneEnergyCost'PerCountable/per_countable"></a> `per_countable`

- **Type:** <a href="#ArcaneEnergyCostPerCountable">ArcaneEnergyCostPerCountable</a>

---

### <a name="ArcaneEnergyCost'ActivationAndHalfInterval"></a> `ArcaneEnergyCost'ActivationAndHalfInterval`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ArcaneEnergyCost'ActivationAndHalfInterval/tag">See details</a>
`activation_and_half_interval` |  | <a href="#ArcaneEnergyCost'ActivationAndHalfInterval/activation_and_half_interval">See details</a>

#### <a name="ArcaneEnergyCost'ActivationAndHalfInterval/tag"></a> `tag`

- **Constant:** `"ActivationAndHalfInterval"`

#### <a name="ArcaneEnergyCost'ActivationAndHalfInterval/activation_and_half_interval"></a> `activation_and_half_interval`

- **Type:** <a href="#ActivationAndHalfIntervalArcaneEnergyCost">ActivationAndHalfIntervalArcaneEnergyCost</a>

---

### <a name="ArcaneEnergyCost'Indefinite"></a> `ArcaneEnergyCost'Indefinite`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ArcaneEnergyCost'Indefinite/tag">See details</a>
`indefinite` |  | <a href="#ArcaneEnergyCost'Indefinite/indefinite">See details</a>

#### <a name="ArcaneEnergyCost'Indefinite/tag"></a> `tag`

- **Constant:** `"Indefinite"`

#### <a name="ArcaneEnergyCost'Indefinite/indefinite"></a> `indefinite`

- **Type:** <a href="#IndefiniteArcaneEnergyCost">IndefiniteArcaneEnergyCost</a>

---

### <a name="ArcaneEnergyCost'Disjunction"></a> `ArcaneEnergyCost'Disjunction`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ArcaneEnergyCost'Disjunction/tag">See details</a>
`disjunction` |  | <a href="#ArcaneEnergyCost'Disjunction/disjunction">See details</a>

#### <a name="ArcaneEnergyCost'Disjunction/tag"></a> `tag`

- **Constant:** `"Disjunction"`

#### <a name="ArcaneEnergyCost'Disjunction/disjunction"></a> `disjunction`

- **Type:** <a href="#ArcaneEnergyCostDisjunction">ArcaneEnergyCostDisjunction</a>

---

### <a name="ArcaneEnergyCost'None"></a> `ArcaneEnergyCost'None`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ArcaneEnergyCost'None/tag">See details</a>
`none` |  | <a href="#ArcaneEnergyCost'None/none">See details</a>

#### <a name="ArcaneEnergyCost'None/tag"></a> `tag`

- **Constant:** `"None"`

#### <a name="ArcaneEnergyCost'None/none"></a> `none`

- **Type:** <a href="#NoArcaneEnergyCost">NoArcaneEnergyCost</a>

---

### <a name="ArcaneEnergyCost'Variable"></a> `ArcaneEnergyCost'Variable`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ArcaneEnergyCost'Variable/tag">See details</a>
`variable` |  | <a href="#ArcaneEnergyCost'Variable/variable">See details</a>

#### <a name="ArcaneEnergyCost'Variable/tag"></a> `tag`

- **Constant:** `"Variable"`

#### <a name="ArcaneEnergyCost'Variable/variable"></a> `variable`

- **Type:** <a href="#ArcaneEnergyCost'Variable/variable">Object</a>

---

### <a name="ArcaneEnergyCost'Variable/variable"></a> `ArcaneEnergyCost'Variable/variable`

- **Type:** Empty Object

---

### <a name="FixedArcaneEnergyCost"></a> `FixedArcaneEnergyCost`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`value` | The AE cost value. | <a href="#FixedArcaneEnergyCost/value">See details</a>
`is_permanent?` | Set to `true` if the AE costs are permanent. | <a href="#FixedArcaneEnergyCost/is_permanent">See details</a>
`interval?` | Specified if the AE cost `value` has to be paid for each time interval. | <a href="#FixedArcaneEnergyCost/interval">See details</a>
`per_level?` | The AE cost are per level of the enchantment. It may either be displayed in a compressed way (e.g. `1 AE per level`) or in a verbose way (e.g. `1 AE for level I; 2 AE for level II`). | <a href="#FixedArcaneEnergyCost/per_level">See details</a>
`translations?` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#FixedArcaneEnergyCost/translations">See details</a>

#### <a name="FixedArcaneEnergyCost/value"></a> `value`

The AE cost value.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="FixedArcaneEnergyCost/is_permanent"></a> `is_permanent?`

Set to `true` if the AE costs are permanent.

- **Constant:** `true`

#### <a name="FixedArcaneEnergyCost/interval"></a> `interval?`

Specified if the AE cost `value` has to be paid for each time interval.

- **Type:** <a href="./_ActivatableSkillDuration.md#DurationUnitValue">DurationUnitValue</a>

#### <a name="FixedArcaneEnergyCost/per_level"></a> `per_level?`

The AE cost are per level of the enchantment. It may either be displayed
in a compressed way (e.g. `1 AE per level`) or in a verbose way (e.g. `1
AE for level I; 2 AE for level II`).

- **Type:** <a href="#FixedArcaneEnergyCostPerLevel">FixedArcaneEnergyCostPerLevel</a>

#### <a name="FixedArcaneEnergyCost/translations"></a> `translations?`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#FixedArcaneEnergyCost/translations[key]">FixedArcaneEnergyCost/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="FixedArcaneEnergyCost/translations[key]"></a> `FixedArcaneEnergyCost/translations[key]`

- **Type:** <a href="#FixedArcaneEnergyCostTranslation">FixedArcaneEnergyCostTranslation</a>

---

### <a name="FixedArcaneEnergyCostPerLevel"></a> `FixedArcaneEnergyCostPerLevel`

The AE cost are per level of the enchantment. It may either be displayed
in a compressed way (e.g. `1 AE per level`) or in a verbose way (e.g. `1
AE for level I; 2 AE for level II`).

- **Possible values:** `"Compressed"`, `"Verbose"`

---

### <a name="FixedArcaneEnergyCostTranslation"></a> `FixedArcaneEnergyCostTranslation`

- **Type:** Object
- **Minimum Properties:** `1`

Key | Description | Details
:-- | :-- | :--
`note?` | A note, appended to the generated option string in parenthesis. | <a href="#FixedArcaneEnergyCostTranslation/note">See details</a>

#### <a name="FixedArcaneEnergyCostTranslation/note"></a> `note?`

A note, appended to the generated option string in parenthesis.

- **Type:** <a href="./_ResponsiveText.md#ResponsiveTextOptional">ResponsiveTextOptional</a>

---

### <a name="ArcaneEnergyCostPerCountable"></a> `ArcaneEnergyCostPerCountable`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`value` | The AE cost value that has to be per a specific countable entity. | <a href="#ArcaneEnergyCostPerCountable/value">See details</a>
`base_value?` | If defined, in addition to the cost per entity you have to pay a flat amount, regardless of the entity count. | <a href="#ArcaneEnergyCostPerCountable/base_value">See details</a>
`translations?` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#ArcaneEnergyCostPerCountable/translations">See details</a>

#### <a name="ArcaneEnergyCostPerCountable/value"></a> `value`

The AE cost value that has to be per a specific countable entity.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="ArcaneEnergyCostPerCountable/base_value"></a> `base_value?`

If defined, in addition to the cost per entity you have to pay a flat
amount, regardless of the entity count.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="ArcaneEnergyCostPerCountable/translations"></a> `translations?`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#ArcaneEnergyCostPerCountable/translations[key]">ArcaneEnergyCostPerCountable/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="ArcaneEnergyCostPerCountable/translations[key]"></a> `ArcaneEnergyCostPerCountable/translations[key]`

- **Type:** <a href="#ArcaneEnergyCostPerCountableTranslation">ArcaneEnergyCostPerCountableTranslation</a>

---

### <a name="ArcaneEnergyCostPerCountableTranslation"></a> `ArcaneEnergyCostPerCountableTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`per` | The cost have to be per a specific countable entity, e.g. `8 AE per person`. | <a href="#ArcaneEnergyCostPerCountableTranslation/per">See details</a>
`note?` | A note, appended to the generated string in parenthesis. | <a href="#ArcaneEnergyCostPerCountableTranslation/note">See details</a>

#### <a name="ArcaneEnergyCostPerCountableTranslation/per"></a> `per`

The cost have to be per a specific countable entity, e.g. `8 AE per
person`.

- **Type:** <a href="./_ResponsiveText.md#ResponsiveText">ResponsiveText</a>

#### <a name="ArcaneEnergyCostPerCountableTranslation/note"></a> `note?`

A note, appended to the generated string in parenthesis.

- **Type:** <a href="./_ResponsiveText.md#ResponsiveTextOptional">ResponsiveTextOptional</a>

---

### <a name="ActivationAndHalfIntervalArcaneEnergyCost"></a> `ActivationAndHalfIntervalArcaneEnergyCost`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`value` | The AE cost value that has to be payed for activation. Half of this value has to be payed each interval. | <a href="#ActivationAndHalfIntervalArcaneEnergyCost/value">See details</a>
`interval` | The time interval for which the AE cost `value` has to be paid. | <a href="#ActivationAndHalfIntervalArcaneEnergyCost/interval">See details</a>

#### <a name="ActivationAndHalfIntervalArcaneEnergyCost/value"></a> `value`

The AE cost value that has to be payed for activation. Half of this value
has to be payed each interval.

- **Type:** Integer
- **Minimum:** `2`
- **Multiple of:** `2`

#### <a name="ActivationAndHalfIntervalArcaneEnergyCost/interval"></a> `interval`

The time interval for which the AE cost `value` has to be paid.

- **Type:** <a href="./_ActivatableSkillDuration.md#DurationUnitValue">DurationUnitValue</a>

---

### <a name="IndefiniteArcaneEnergyCost"></a> `IndefiniteArcaneEnergyCost`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`modifier` | The indefinite AE cost may be modified by a certain value. | <a href="#IndefiniteArcaneEnergyCost/modifier">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#IndefiniteArcaneEnergyCost/translations">See details</a>

#### <a name="IndefiniteArcaneEnergyCost/modifier"></a> `modifier`

The indefinite AE cost may be modified by a certain value.

- **Type:** <a href="#IndefiniteArcaneEnergyCostModifier">IndefiniteArcaneEnergyCostModifier</a>

#### <a name="IndefiniteArcaneEnergyCost/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#IndefiniteArcaneEnergyCost/translations[key]">IndefiniteArcaneEnergyCost/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="IndefiniteArcaneEnergyCost/translations[key]"></a> `IndefiniteArcaneEnergyCost/translations[key]`

- **Type:** <a href="#IndefiniteArcaneEnergyCostTranslation">IndefiniteArcaneEnergyCostTranslation</a>

---

### <a name="IndefiniteArcaneEnergyCostArithmetic"></a> `IndefiniteArcaneEnergyCostArithmetic`

Defines how the the `value` is set off against the check result.

- **Possible values:** `"Add"`, `"Subtract"`

---

### <a name="IndefiniteArcaneEnergyCostModifier"></a> `IndefiniteArcaneEnergyCostModifier`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`arithmetic` | The arithmetic how to apply the `value` to the `base`. | <a href="#IndefiniteArcaneEnergyCostModifier/arithmetic">See details</a>
`value` | The value that is applied to the `base` using the defined `arithmetic`. | <a href="#IndefiniteArcaneEnergyCostModifier/value">See details</a>

#### <a name="IndefiniteArcaneEnergyCostModifier/arithmetic"></a> `arithmetic`

The arithmetic how to apply the `value` to the `base`.

- **Type:** <a href="#IndefiniteArcaneEnergyCostArithmetic">IndefiniteArcaneEnergyCostArithmetic</a>

#### <a name="IndefiniteArcaneEnergyCostModifier/value"></a> `value`

The value that is applied to the `base` using the defined `arithmetic`.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="IndefiniteArcaneEnergyCostTranslation"></a> `IndefiniteArcaneEnergyCostTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`description` | A description of where the cost come from. | <a href="#IndefiniteArcaneEnergyCostTranslation/description">See details</a>

#### <a name="IndefiniteArcaneEnergyCostTranslation/description"></a> `description`

A description of where the cost come from.

- **Type:** <a href="./_ResponsiveText.md#ResponsiveText">ResponsiveText</a>

---

### <a name="ArcaneEnergyCostDisjunction"></a> `ArcaneEnergyCostDisjunction`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`interval?` | Specified if the selected AE cost option has to be paid for each time interval. | <a href="#ArcaneEnergyCostDisjunction/interval">See details</a>
`options` | The possible AE cost values. | <a href="#ArcaneEnergyCostDisjunction/options">See details</a>

#### <a name="ArcaneEnergyCostDisjunction/interval"></a> `interval?`

Specified if the selected AE cost option has to be paid for each time
interval.

- **Type:** <a href="#ArcaneEnergyCostDisjunctionInterval">ArcaneEnergyCostDisjunctionInterval</a>

#### <a name="ArcaneEnergyCostDisjunction/options"></a> `options`

The possible AE cost values.

- **Type:** List
- **Items:** <a href="#ArcaneEnergyCostDisjunction/options[]">ArcaneEnergyCostDisjunction/options[]</a>

---

### <a name="ArcaneEnergyCostDisjunction/options[]"></a> `ArcaneEnergyCostDisjunction/options[]`

- **Type:** <a href="#ArcaneEnergyCostDisjunctionOption">ArcaneEnergyCostDisjunctionOption</a>

---

### <a name="ArcaneEnergyCostDisjunctionInterval"></a> `ArcaneEnergyCostDisjunctionInterval`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`value` | The interval itself. | <a href="#ArcaneEnergyCostDisjunctionInterval/value">See details</a>
`activation_value` | The AE cost value for activation. | <a href="#ArcaneEnergyCostDisjunctionInterval/activation_value">See details</a>
`after_activation` | Set to `true` if the action where the enchantment is casted does **not** as a part of the first interval that has to be payed, so that the first interval payment needs to be done after the activation. | <a href="#ArcaneEnergyCostDisjunctionInterval/after_activation">See details</a>

#### <a name="ArcaneEnergyCostDisjunctionInterval/value"></a> `value`

The interval itself.

- **Type:** <a href="./_ActivatableSkillDuration.md#DurationUnitValue">DurationUnitValue</a>

#### <a name="ArcaneEnergyCostDisjunctionInterval/activation_value"></a> `activation_value`

The AE cost value for activation.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="ArcaneEnergyCostDisjunctionInterval/after_activation"></a> `after_activation`

Set to `true` if the action where the enchantment is casted does
**not** as a part of the first interval that has to be payed, so that
the first interval payment needs to be done after the activation.

This works different than other sustained spells, since for them the
end of the cast usually already counts as part of the first interval.

- **Type:** Boolean

---

### <a name="ArcaneEnergyCostDisjunctionOption"></a> `ArcaneEnergyCostDisjunctionOption`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`value` | A possible AE cost value. | <a href="#ArcaneEnergyCostDisjunctionOption/value">See details</a>
`translations?` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#ArcaneEnergyCostDisjunctionOption/translations">See details</a>

#### <a name="ArcaneEnergyCostDisjunctionOption/value"></a> `value`

A possible AE cost value.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="ArcaneEnergyCostDisjunctionOption/translations"></a> `translations?`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#ArcaneEnergyCostDisjunctionOption/translations[key]">ArcaneEnergyCostDisjunctionOption/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="ArcaneEnergyCostDisjunctionOption/translations[key]"></a> `ArcaneEnergyCostDisjunctionOption/translations[key]`

- **Type:** <a href="#ArcaneEnergyCostDisjunctionOptionTranslation">ArcaneEnergyCostDisjunctionOptionTranslation</a>

---

### <a name="ArcaneEnergyCostDisjunctionOptionTranslation"></a> `ArcaneEnergyCostDisjunctionOptionTranslation`

- **Type:** Object
- **Minimum Properties:** `1`

Key | Description | Details
:-- | :-- | :--
`note?` | A note, appended to the generated option string in parenthesis. | <a href="#ArcaneEnergyCostDisjunctionOptionTranslation/note">See details</a>

#### <a name="ArcaneEnergyCostDisjunctionOptionTranslation/note"></a> `note?`

A note, appended to the generated option string in parenthesis.

- **Type:** <a href="./_ResponsiveText.md#ResponsiveTextOptional">ResponsiveTextOptional</a>

---

### <a name="NoArcaneEnergyCost"></a> `NoArcaneEnergyCost`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`translations?` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#NoArcaneEnergyCost/translations">See details</a>

#### <a name="NoArcaneEnergyCost/translations"></a> `translations?`

All translations for the entry, identified by IETF language tag
(BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#NoArcaneEnergyCost/translations[key]">NoArcaneEnergyCost/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="NoArcaneEnergyCost/translations[key]"></a> `NoArcaneEnergyCost/translations[key]`

- **Type:** <a href="#NoArcaneEnergyCostTranslation">NoArcaneEnergyCostTranslation</a>

---

### <a name="NoArcaneEnergyCostTranslation"></a> `NoArcaneEnergyCostTranslation`

- **Type:** Object
- **Minimum Properties:** `1`

Key | Description | Details
:-- | :-- | :--
`note?` | A note, appended to the generated string in parenthesis. | <a href="#NoArcaneEnergyCostTranslation/note">See details</a>

#### <a name="NoArcaneEnergyCostTranslation/note"></a> `note?`

A note, appended to the generated string in parenthesis.

- **Type:** <a href="./_ResponsiveText.md#ResponsiveTextOptional">ResponsiveTextOptional</a>

---

### <a name="Volume"></a> `Volume`

The volume points the enchantment needs.

- **Type:** Union
- **Cases:** <a href="#Volume'Fixed">Volume'Fixed</a> | <a href="#Volume'PerLevel">Volume'PerLevel</a> | <a href="#Volume'ByLevel">Volume'ByLevel</a> | <a href="#Volume'Map">Volume'Map</a>

---

### <a name="Volume'Fixed"></a> `Volume'Fixed`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Volume'Fixed/tag">See details</a>
`fixed` |  | <a href="#Volume'Fixed/fixed">See details</a>

#### <a name="Volume'Fixed/tag"></a> `tag`

- **Constant:** `"Fixed"`

#### <a name="Volume'Fixed/fixed"></a> `fixed`

- **Type:** <a href="#FixedVolume">FixedVolume</a>

---

### <a name="Volume'PerLevel"></a> `Volume'PerLevel`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Volume'PerLevel/tag">See details</a>
`per_level` |  | <a href="#Volume'PerLevel/per_level">See details</a>

#### <a name="Volume'PerLevel/tag"></a> `tag`

- **Constant:** `"PerLevel"`

#### <a name="Volume'PerLevel/per_level"></a> `per_level`

- **Type:** <a href="#VolumePerLevel">VolumePerLevel</a>

---

### <a name="Volume'ByLevel"></a> `Volume'ByLevel`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Volume'ByLevel/tag">See details</a>
`by_level` |  | <a href="#Volume'ByLevel/by_level">See details</a>

#### <a name="Volume'ByLevel/tag"></a> `tag`

- **Constant:** `"ByLevel"`

#### <a name="Volume'ByLevel/by_level"></a> `by_level`

- **Type:** <a href="#VolumeByLevel">VolumeByLevel</a>

---

### <a name="Volume'Map"></a> `Volume'Map`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Volume'Map/tag">See details</a>
`map` |  | <a href="#Volume'Map/map">See details</a>

#### <a name="Volume'Map/tag"></a> `tag`

- **Constant:** `"Map"`

#### <a name="Volume'Map/map"></a> `map`

- **Type:** <a href="#VolumeMap">VolumeMap</a>

---

### <a name="FixedVolume"></a> `FixedVolume`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`points` | The volume points. | <a href="#FixedVolume/points">See details</a>

#### <a name="FixedVolume/points"></a> `points`

The volume points.

- **Type:** Integer
- **Minimum:** `0`

---

### <a name="VolumePerLevel"></a> `VolumePerLevel`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`points` | The volume points per level. | <a href="#VolumePerLevel/points">See details</a>

#### <a name="VolumePerLevel/points"></a> `points`

The volume points per level.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="VolumeByLevel"></a> `VolumeByLevel`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`list` | The volume points for each level. The first element is the volume points for the first level, the second element is the volume points for the second level, and so on. | <a href="#VolumeByLevel/list">See details</a>

#### <a name="VolumeByLevel/list"></a> `list`

The volume points for each level. The first element is the volume points
for the first level, the second element is the volume points for the
second level, and so on.

- **Type:** List
- **Items:** <a href="#VolumeByLevel/list[]">VolumeByLevel/list[]</a>
- **Minimum Items:** `2`

---

### <a name="VolumeByLevel/list[]"></a> `VolumeByLevel/list[]`

- **Type:** <a href="#VolumeByLevelItem">VolumeByLevelItem</a>

---

### <a name="VolumeByLevelItem"></a> `VolumeByLevelItem`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`points` | The volume points for this level. | <a href="#VolumeByLevelItem/points">See details</a>

#### <a name="VolumeByLevelItem/points"></a> `points`

The volume points for this level.

- **Type:** Integer
- **Minimum:** `0`

---

### <a name="VolumeMap"></a> `VolumeMap`

A content that is `3/4/5 Points for Chimera, Daimonid, Golems, Undead /
Fairies, Ghosts / Demons, Elementals` may be respresented as the following
map:

```yaml
options:
  - points: 3
    associated_options:
      - id:
          tag: General
          value: # ...
      # ...
    translations:
      en-US:
        label: "Chimera, Daimonid, Golems, Undead"
        label_standalone: "Chimera/Daimonid/Golems/Undead"
  - points: 4
    associated_options:
      - id:
          tag: General
          value: # ...
      # ...
    translations:
      en-US:
        label: "Fairies, Ghosts"
        label_standalone: "Fairies/Ghosts"
  - points: 5
    associated_options:
      - id:
          tag: General
          value: # ...
      # ...
    translations:
      en-US:
        label: "Demons, Elementals"
        label_standalone: "Demons/Elementals"
```

This will generate the exact same string as seen above. The associated
options are not present in the example, but they link to the options the
volume specification is meant for.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`options` | The possible costs and associated labels. | <a href="#VolumeMap/options">See details</a>
`translations?` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#VolumeMap/translations">See details</a>

#### <a name="VolumeMap/options"></a> `options`

The possible costs and associated labels.

- **Type:** List
- **Items:** <a href="#VolumeMap/options[]">VolumeMap/options[]</a>
- **Minimum Items:** `2`

#### <a name="VolumeMap/translations"></a> `translations?`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#VolumeMap/translations[key]">VolumeMap/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="VolumeMap/options[]"></a> `VolumeMap/options[]`

- **Type:** <a href="#VolumeMapOption">VolumeMapOption</a>

---

### <a name="VolumeMap/translations[key]"></a> `VolumeMap/translations[key]`

- **Type:** <a href="#VolumeMapTranslation">VolumeMapTranslation</a>

---

### <a name="VolumeMapTranslation"></a> `VolumeMapTranslation`

- **Type:** Object
- **Minimum Properties:** `1`

Key | Description | Details
:-- | :-- | :--
`list_prepend?` | Place a string between the `for` and the grouped map option labels. | <a href="#VolumeMapTranslation/list_prepend">See details</a>
`list_append?` | Place a string after the grouped map option labels. | <a href="#VolumeMapTranslation/list_append">See details</a>
`replacement?` | If the string from the book cannot be generated using the default generation technique, use this string. All options still need to be inserted propertly, since it may be used by in-game tools to provide a selection to players. | <a href="#VolumeMapTranslation/replacement">See details</a>

#### <a name="VolumeMapTranslation/list_prepend"></a> `list_prepend?`

Place a string between the `for` and the grouped map option labels.

- **Type:** String

#### <a name="VolumeMapTranslation/list_append"></a> `list_append?`

Place a string after the grouped map option labels.

- **Type:** String

#### <a name="VolumeMapTranslation/replacement"></a> `replacement?`

If the string from the book cannot be generated using the default
generation technique, use this string. All options still need to be
inserted propertly, since it may be used by in-game tools to provide a
selection to players.

- **Type:** String

---

### <a name="VolumeMapOption"></a> `VolumeMapOption`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`points` | The full permanent AE cost value for this option. | <a href="#VolumeMapOption/points">See details</a>
`associated_options` | Links to the options this volume specification is meant for. | <a href="#VolumeMapOption/associated_options">See details</a>
`translations?` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#VolumeMapOption/translations">See details</a>

#### <a name="VolumeMapOption/points"></a> `points`

The full permanent AE cost value for this option.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="VolumeMapOption/associated_options"></a> `associated_options`

Links to the options this volume specification is meant for.

- **Type:** List
- **Items:** <a href="#VolumeMapOption/associated_options[]">VolumeMapOption/associated_options[]</a>

#### <a name="VolumeMapOption/translations"></a> `translations?`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#VolumeMapOption/translations[key]">VolumeMapOption/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="VolumeMapOption/associated_options[]"></a> `VolumeMapOption/associated_options[]`

- **Type:** <a href="#VolumeMapOptionAssociatedOption">VolumeMapOptionAssociatedOption</a>

---

### <a name="VolumeMapOption/translations[key]"></a> `VolumeMapOption/translations[key]`

- **Type:** <a href="#VolumeMapOptionTranslation">VolumeMapOptionTranslation</a>

---

### <a name="VolumeMapOptionAssociatedOption"></a> `VolumeMapOptionAssociatedOption`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The option's identifier. | <a href="#VolumeMapOptionAssociatedOption/id">See details</a>

#### <a name="VolumeMapOptionAssociatedOption/id"></a> `id`

The option's identifier.

- **Type:** <a href="./_IdentifierGroup.md#VolumePointsOptionReferenceIdentifier">VolumePointsOptionReferenceIdentifier</a>

---

### <a name="VolumeMapOptionTranslation"></a> `VolumeMapOptionTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`label` | The description of the option for cost string generation. | <a href="#VolumeMapOptionTranslation/label">See details</a>
`label_standalone?` | The description of the option if used standalone. Only used if different from `label`. | <a href="#VolumeMapOptionTranslation/label_standalone">See details</a>

#### <a name="VolumeMapOptionTranslation/label"></a> `label`

The description of the option for cost string generation.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="VolumeMapOptionTranslation/label_standalone"></a> `label_standalone?`

The description of the option if used standalone. Only used if
different from `label`.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

---

### <a name="BindingCost"></a> `BindingCost`

The binding cost for an enchantment.

- **Type:** Union
- **Cases:** <a href="#BindingCost'Fixed">BindingCost'Fixed</a> | <a href="#BindingCost'PerLevel">BindingCost'PerLevel</a> | <a href="#BindingCost'Map">BindingCost'Map</a>

---

### <a name="BindingCost'Fixed"></a> `BindingCost'Fixed`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#BindingCost'Fixed/tag">See details</a>
`fixed` |  | <a href="#BindingCost'Fixed/fixed">See details</a>

#### <a name="BindingCost'Fixed/tag"></a> `tag`

- **Constant:** `"Fixed"`

#### <a name="BindingCost'Fixed/fixed"></a> `fixed`

- **Type:** <a href="#FixedBindingCost">FixedBindingCost</a>

---

### <a name="BindingCost'PerLevel"></a> `BindingCost'PerLevel`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#BindingCost'PerLevel/tag">See details</a>
`per_level` |  | <a href="#BindingCost'PerLevel/per_level">See details</a>

#### <a name="BindingCost'PerLevel/tag"></a> `tag`

- **Constant:** `"PerLevel"`

#### <a name="BindingCost'PerLevel/per_level"></a> `per_level`

- **Type:** <a href="#BindingCostPerLevel">BindingCostPerLevel</a>

---

### <a name="BindingCost'Map"></a> `BindingCost'Map`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#BindingCost'Map/tag">See details</a>
`map` |  | <a href="#BindingCost'Map/map">See details</a>

#### <a name="BindingCost'Map/tag"></a> `tag`

- **Constant:** `"Map"`

#### <a name="BindingCost'Map/map"></a> `map`

- **Type:** <a href="#BindingCostMap">BindingCostMap</a>

---

### <a name="FixedBindingCost"></a> `FixedBindingCost`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`permanent_value` | The permanent AE cost. | <a href="#FixedBindingCost/permanent_value">See details</a>

#### <a name="FixedBindingCost/permanent_value"></a> `permanent_value`

The permanent AE cost.

If the enchantment has multiple levels, it is only applied for the first
level.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="BindingCostPerLevel"></a> `BindingCostPerLevel`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`permanent_value` | The permanent AE cost per level. | <a href="#BindingCostPerLevel/permanent_value">See details</a>

#### <a name="BindingCostPerLevel/permanent_value"></a> `permanent_value`

The permanent AE cost per level.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="BindingCostMap"></a> `BindingCostMap`

A content that is `2/4/8 permanent AE for spell-swords with the combat
technique Daggers, Swords, or Two-Handed Swords` may be respresented as the
following map:

```yaml
options:
  - permanent_value: 2
    translations:
      en-US:
        label: "Daggers"
        label_standalone: "Dagger"
  - permanent_value: 4
    translations:
      en-US:
        label: "Swords"
        label_standalone: "Sword"
  - permanent_value: 8
    translations:
      en-US:
        label: "Two-Handed Swords"
        label_standalone: "Two-Handed Sword"
list_prepend: "spell-swords with the combat technique"
```

This will generate the exact same string as seen above.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`options` | The possible costs and associated labels. | <a href="#BindingCostMap/options">See details</a>
`translations?` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#BindingCostMap/translations">See details</a>

#### <a name="BindingCostMap/options"></a> `options`

The possible costs and associated labels.

- **Type:** List
- **Items:** <a href="#BindingCostMap/options[]">BindingCostMap/options[]</a>
- **Minimum Items:** `2`

#### <a name="BindingCostMap/translations"></a> `translations?`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#BindingCostMap/translations[key]">BindingCostMap/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="BindingCostMap/options[]"></a> `BindingCostMap/options[]`

- **Type:** <a href="#VolumeMapOption">VolumeMapOption</a>

---

### <a name="BindingCostMap/translations[key]"></a> `BindingCostMap/translations[key]`

- **Type:** <a href="#BindingCostMapTranslation">BindingCostMapTranslation</a>

---

### <a name="BindingCostMapTranslation"></a> `BindingCostMapTranslation`

- **Type:** Object
- **Minimum Properties:** `1`

Key | Description | Details
:-- | :-- | :--
`list_prepend?` | Place a string between the `for` and the grouped map option labels. | <a href="#BindingCostMapTranslation/list_prepend">See details</a>
`list_append?` | Place a string after the grouped map option labels. | <a href="#BindingCostMapTranslation/list_append">See details</a>
`replacement?` | If the string from the book cannot be generated using the default generation technique, use this string. All options still need to be inserted propertly, since it may be used by in-game tools to provide a selection to players. | <a href="#BindingCostMapTranslation/replacement">See details</a>

#### <a name="BindingCostMapTranslation/list_prepend"></a> `list_prepend?`

Place a string between the `for` and the grouped map option labels.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="BindingCostMapTranslation/list_append"></a> `list_append?`

Place a string after the grouped map option labels.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="BindingCostMapTranslation/replacement"></a> `replacement?`

If the string from the book cannot be generated using the default
generation technique, use this string. All options still need to be
inserted propertly, since it may be used by in-game tools to provide a
selection to players.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

---

### <a name="BindingCostMapOption"></a> `BindingCostMapOption`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`permanent_value` | The full permanent AE cost value for this option. | <a href="#BindingCostMapOption/permanent_value">See details</a>
`translations?` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#BindingCostMapOption/translations">See details</a>

#### <a name="BindingCostMapOption/permanent_value"></a> `permanent_value`

The full permanent AE cost value for this option.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="BindingCostMapOption/translations"></a> `translations?`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#BindingCostMapOption/translations[key]">BindingCostMapOption/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="BindingCostMapOption/translations[key]"></a> `BindingCostMapOption/translations[key]`

- **Type:** <a href="#BindingCostMapOptionTranslation">BindingCostMapOptionTranslation</a>

---

### <a name="BindingCostMapOptionTranslation"></a> `BindingCostMapOptionTranslation`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`label` | The description of the option for cost string generation. | <a href="#BindingCostMapOptionTranslation/label">See details</a>
`label_standalone?` | The description of the option if used standalone. Only used if different from `label`. | <a href="#BindingCostMapOptionTranslation/label_standalone">See details</a>

#### <a name="BindingCostMapOptionTranslation/label"></a> `label`

The description of the option for cost string generation.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

#### <a name="BindingCostMapOptionTranslation/label_standalone"></a> `label_standalone?`

The description of the option if used standalone. Only used if
different from `label`.

- **Type:** <a href="./_NonEmptyString.md#NonEmptyString">NonEmptyString</a>

---

### <a name="Property"></a> `Property`

The magic property's identifier. `DependingOnProperty` can only be used if
the special ability has an option to select a property.

- **Type:** Union
- **Cases:** <a href="#Property'DependingOnSelection">Property'DependingOnSelection</a> | <a href="#Property'Fixed">Property'Fixed</a>

---

### <a name="Property'DependingOnSelection"></a> `Property'DependingOnSelection`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Property'DependingOnSelection/tag">See details</a>
`depending_on_selection` |  | <a href="#Property'DependingOnSelection/depending_on_selection">See details</a>

#### <a name="Property'DependingOnSelection/tag"></a> `tag`

- **Constant:** `"DependingOnSelection"`

#### <a name="Property'DependingOnSelection/depending_on_selection"></a> `depending_on_selection`

- **Type:** <a href="#Property'DependingOnSelection/depending_on_selection">Object</a>

---

### <a name="Property'DependingOnSelection/depending_on_selection"></a> `Property'DependingOnSelection/depending_on_selection`

- **Type:** Empty Object

---

### <a name="Property'Fixed"></a> `Property'Fixed`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Property'Fixed/tag">See details</a>
`fixed` |  | <a href="#Property'Fixed/fixed">See details</a>

#### <a name="Property'Fixed/tag"></a> `tag`

- **Constant:** `"Fixed"`

#### <a name="Property'Fixed/fixed"></a> `fixed`

- **Type:** <a href="./_SimpleReferences.md#PropertyReference">PropertyReference</a>

---

### <a name="Aspect"></a> `Aspect`

The blessed aspect.

- **Type:** <a href="./_SimpleReferences.md#AspectReference">AspectReference</a>

---

### <a name="AdvancedSpecialAbilityDerivedExternalEntryId"></a> `AdvancedSpecialAbilityDerivedExternalEntryId`

- **Type:** <a href="./_Identifier.md#MagicalTraditionIdentifier">MagicalTraditionIdentifier</a>

---

### <a name="AdvancedSpecialAbilityDerivedExternalEntryOptionId"></a> `AdvancedSpecialAbilityDerivedExternalEntryOptionId`

- **Type:** <a href="./_Identifier.md#PatronIdentifier">PatronIdentifier</a>

---

### <a name="ApplicableCombatTechniques"></a> `ApplicableCombatTechniques`

- **Type:** Union
- **Cases:** <a href="#ApplicableCombatTechniques'None">ApplicableCombatTechniques'None</a> | <a href="#ApplicableCombatTechniques'DependingOnCombatStyle">ApplicableCombatTechniques'DependingOnCombatStyle</a> | <a href="#ApplicableCombatTechniques'All">ApplicableCombatTechniques'All</a> | <a href="#ApplicableCombatTechniques'AllClose">ApplicableCombatTechniques'AllClose</a> | <a href="#ApplicableCombatTechniques'AllRanged">ApplicableCombatTechniques'AllRanged</a> | <a href="#ApplicableCombatTechniques'Specific">ApplicableCombatTechniques'Specific</a>

---

### <a name="ApplicableCombatTechniques'None"></a> `ApplicableCombatTechniques'None`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ApplicableCombatTechniques'None/tag">See details</a>
`none` |  | <a href="#ApplicableCombatTechniques'None/none">See details</a>

#### <a name="ApplicableCombatTechniques'None/tag"></a> `tag`

- **Constant:** `"None"`

#### <a name="ApplicableCombatTechniques'None/none"></a> `none`

- **Type:** <a href="#ApplicableCombatTechniques'None/none">Object</a>

---

### <a name="ApplicableCombatTechniques'None/none"></a> `ApplicableCombatTechniques'None/none`

- **Type:** Empty Object

---

### <a name="ApplicableCombatTechniques'DependingOnCombatStyle"></a> `ApplicableCombatTechniques'DependingOnCombatStyle`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ApplicableCombatTechniques'DependingOnCombatStyle/tag">See details</a>
`depending_on_combat_style` |  | <a href="#ApplicableCombatTechniques'DependingOnCombatStyle/depending_on_combat_style">See details</a>

#### <a name="ApplicableCombatTechniques'DependingOnCombatStyle/tag"></a> `tag`

- **Constant:** `"DependingOnCombatStyle"`

#### <a name="ApplicableCombatTechniques'DependingOnCombatStyle/depending_on_combat_style"></a> `depending_on_combat_style`

- **Type:** <a href="#ApplicableCombatTechniques'DependingOnCombatStyle/depending_on_combat_style">Object</a>

---

### <a name="ApplicableCombatTechniques'DependingOnCombatStyle/depending_on_combat_style"></a> `ApplicableCombatTechniques'DependingOnCombatStyle/depending_on_combat_style`

- **Type:** Empty Object

---

### <a name="ApplicableCombatTechniques'All"></a> `ApplicableCombatTechniques'All`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ApplicableCombatTechniques'All/tag">See details</a>
`all` |  | <a href="#ApplicableCombatTechniques'All/all">See details</a>

#### <a name="ApplicableCombatTechniques'All/tag"></a> `tag`

- **Constant:** `"All"`

#### <a name="ApplicableCombatTechniques'All/all"></a> `all`

- **Type:** <a href="#AllApplicableCombatTechniques">AllApplicableCombatTechniques</a>

---

### <a name="ApplicableCombatTechniques'AllClose"></a> `ApplicableCombatTechniques'AllClose`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ApplicableCombatTechniques'AllClose/tag">See details</a>
`all_close` |  | <a href="#ApplicableCombatTechniques'AllClose/all_close">See details</a>

#### <a name="ApplicableCombatTechniques'AllClose/tag"></a> `tag`

- **Constant:** `"AllClose"`

#### <a name="ApplicableCombatTechniques'AllClose/all_close"></a> `all_close`

- **Type:** <a href="#AllApplicableCloseCombatTechniques">AllApplicableCloseCombatTechniques</a>

---

### <a name="ApplicableCombatTechniques'AllRanged"></a> `ApplicableCombatTechniques'AllRanged`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ApplicableCombatTechniques'AllRanged/tag">See details</a>
`all_ranged` |  | <a href="#ApplicableCombatTechniques'AllRanged/all_ranged">See details</a>

#### <a name="ApplicableCombatTechniques'AllRanged/tag"></a> `tag`

- **Constant:** `"AllRanged"`

#### <a name="ApplicableCombatTechniques'AllRanged/all_ranged"></a> `all_ranged`

- **Type:** <a href="#AllApplicableRangedCombatTechniques">AllApplicableRangedCombatTechniques</a>

---

### <a name="ApplicableCombatTechniques'Specific"></a> `ApplicableCombatTechniques'Specific`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ApplicableCombatTechniques'Specific/tag">See details</a>
`specific` |  | <a href="#ApplicableCombatTechniques'Specific/specific">See details</a>

#### <a name="ApplicableCombatTechniques'Specific/tag"></a> `tag`

- **Constant:** `"Specific"`

#### <a name="ApplicableCombatTechniques'Specific/specific"></a> `specific`

- **Type:** <a href="#SpecificApplicableCombatTechniques">SpecificApplicableCombatTechniques</a>

---

### <a name="AllApplicableCombatTechniques"></a> `AllApplicableCombatTechniques`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`restrictions?` |  | <a href="#AllApplicableCombatTechniques/restrictions">See details</a>

#### <a name="AllApplicableCombatTechniques/restrictions"></a> `restrictions?`

- **Type:** List
- **Items:** <a href="#AllApplicableCombatTechniques/restrictions[]">AllApplicableCombatTechniques/restrictions[]</a>
- **Minimum Items:** `1`

---

### <a name="AllApplicableCombatTechniques/restrictions[]"></a> `AllApplicableCombatTechniques/restrictions[]`

- **Type:** <a href="#ApplicableAllCombatTechniquesRestriction">ApplicableAllCombatTechniquesRestriction</a>

---

### <a name="AllApplicableCloseCombatTechniques"></a> `AllApplicableCloseCombatTechniques`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`restrictions?` |  | <a href="#AllApplicableCloseCombatTechniques/restrictions">See details</a>

#### <a name="AllApplicableCloseCombatTechniques/restrictions"></a> `restrictions?`

- **Type:** List
- **Items:** <a href="#AllApplicableCloseCombatTechniques/restrictions[]">AllApplicableCloseCombatTechniques/restrictions[]</a>
- **Minimum Items:** `1`

---

### <a name="AllApplicableCloseCombatTechniques/restrictions[]"></a> `AllApplicableCloseCombatTechniques/restrictions[]`

- **Type:** <a href="#ApplicableCloseCombatTechniquesRestriction">ApplicableCloseCombatTechniquesRestriction</a>

---

### <a name="AllApplicableRangedCombatTechniques"></a> `AllApplicableRangedCombatTechniques`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`restrictions?` |  | <a href="#AllApplicableRangedCombatTechniques/restrictions">See details</a>

#### <a name="AllApplicableRangedCombatTechniques/restrictions"></a> `restrictions?`

- **Type:** List
- **Items:** <a href="#AllApplicableRangedCombatTechniques/restrictions[]">AllApplicableRangedCombatTechniques/restrictions[]</a>
- **Minimum Items:** `1`

---

### <a name="AllApplicableRangedCombatTechniques/restrictions[]"></a> `AllApplicableRangedCombatTechniques/restrictions[]`

- **Type:** <a href="#ApplicableRangedCombatTechniquesRestriction">ApplicableRangedCombatTechniquesRestriction</a>

---

### <a name="SpecificApplicableCombatTechniques"></a> `SpecificApplicableCombatTechniques`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`list` |  | <a href="#SpecificApplicableCombatTechniques/list">See details</a>

#### <a name="SpecificApplicableCombatTechniques/list"></a> `list`

- **Type:** List
- **Items:** <a href="#SpecificApplicableCombatTechniques/list[]">SpecificApplicableCombatTechniques/list[]</a>
- **Minimum Items:** `1`

---

### <a name="SpecificApplicableCombatTechniques/list[]"></a> `SpecificApplicableCombatTechniques/list[]`

- **Type:** <a href="#SpecificApplicableCombatTechnique">SpecificApplicableCombatTechnique</a>

---

### <a name="SpecificApplicableCombatTechnique"></a> `SpecificApplicableCombatTechnique`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` |  | <a href="#SpecificApplicableCombatTechnique/id">See details</a>
`restrictions?` |  | <a href="#SpecificApplicableCombatTechnique/restrictions">See details</a>

#### <a name="SpecificApplicableCombatTechnique/id"></a> `id`

- **Type:** <a href="./_IdentifierGroup.md#CombatTechniqueIdentifier">CombatTechniqueIdentifier</a>

#### <a name="SpecificApplicableCombatTechnique/restrictions"></a> `restrictions?`

- **Type:** List
- **Items:** <a href="#SpecificApplicableCombatTechnique/restrictions[]">SpecificApplicableCombatTechnique/restrictions[]</a>
- **Minimum Items:** `1`

---

### <a name="SpecificApplicableCombatTechnique/restrictions[]"></a> `SpecificApplicableCombatTechnique/restrictions[]`

- **Type:** <a href="#ApplicableSpecificCombatTechniquesRestriction">ApplicableSpecificCombatTechniquesRestriction</a>

---

### <a name="ApplicableAllCombatTechniquesRestriction"></a> `ApplicableAllCombatTechniquesRestriction`

- **Type:** Union
- **Cases:** <a href="#ApplicableAllCombatTechniquesRestriction'Improvised">ApplicableAllCombatTechniquesRestriction'Improvised</a> | <a href="#ApplicableAllCombatTechniquesRestriction'PointedBlade">ApplicableAllCombatTechniquesRestriction'PointedBlade</a> | <a href="#ApplicableAllCombatTechniquesRestriction'Mount">ApplicableAllCombatTechniquesRestriction'Mount</a> | <a href="#ApplicableAllCombatTechniquesRestriction'Race">ApplicableAllCombatTechniquesRestriction'Race</a> | <a href="#ApplicableAllCombatTechniquesRestriction'ExcludeCombatTechniques">ApplicableAllCombatTechniquesRestriction'ExcludeCombatTechniques</a>

---

### <a name="ApplicableAllCombatTechniquesRestriction'Improvised"></a> `ApplicableAllCombatTechniquesRestriction'Improvised`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ApplicableAllCombatTechniquesRestriction'Improvised/tag">See details</a>
`improvised` |  | <a href="#ApplicableAllCombatTechniquesRestriction'Improvised/improvised">See details</a>

#### <a name="ApplicableAllCombatTechniquesRestriction'Improvised/tag"></a> `tag`

- **Constant:** `"Improvised"`

#### <a name="ApplicableAllCombatTechniquesRestriction'Improvised/improvised"></a> `improvised`

- **Type:** <a href="#ApplicableAllCombatTechniquesRestriction'Improvised/improvised">Object</a>

---

### <a name="ApplicableAllCombatTechniquesRestriction'Improvised/improvised"></a> `ApplicableAllCombatTechniquesRestriction'Improvised/improvised`

- **Type:** Empty Object

---

### <a name="ApplicableAllCombatTechniquesRestriction'PointedBlade"></a> `ApplicableAllCombatTechniquesRestriction'PointedBlade`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ApplicableAllCombatTechniquesRestriction'PointedBlade/tag">See details</a>
`pointed_blade` |  | <a href="#ApplicableAllCombatTechniquesRestriction'PointedBlade/pointed_blade">See details</a>

#### <a name="ApplicableAllCombatTechniquesRestriction'PointedBlade/tag"></a> `tag`

- **Constant:** `"PointedBlade"`

#### <a name="ApplicableAllCombatTechniquesRestriction'PointedBlade/pointed_blade"></a> `pointed_blade`

- **Type:** <a href="#ApplicableAllCombatTechniquesRestriction'PointedBlade/pointed_blade">Object</a>

---

### <a name="ApplicableAllCombatTechniquesRestriction'PointedBlade/pointed_blade"></a> `ApplicableAllCombatTechniquesRestriction'PointedBlade/pointed_blade`

- **Type:** Empty Object

---

### <a name="ApplicableAllCombatTechniquesRestriction'Mount"></a> `ApplicableAllCombatTechniquesRestriction'Mount`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ApplicableAllCombatTechniquesRestriction'Mount/tag">See details</a>
`mount` |  | <a href="#ApplicableAllCombatTechniquesRestriction'Mount/mount">See details</a>

#### <a name="ApplicableAllCombatTechniquesRestriction'Mount/tag"></a> `tag`

- **Constant:** `"Mount"`

#### <a name="ApplicableAllCombatTechniquesRestriction'Mount/mount"></a> `mount`

- **Type:** <a href="#ApplicableAllCombatTechniquesRestriction'Mount/mount">Object</a>

---

### <a name="ApplicableAllCombatTechniquesRestriction'Mount/mount"></a> `ApplicableAllCombatTechniquesRestriction'Mount/mount`

- **Type:** Empty Object

---

### <a name="ApplicableAllCombatTechniquesRestriction'Race"></a> `ApplicableAllCombatTechniquesRestriction'Race`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ApplicableAllCombatTechniquesRestriction'Race/tag">See details</a>
`race` |  | <a href="#ApplicableAllCombatTechniquesRestriction'Race/race">See details</a>

#### <a name="ApplicableAllCombatTechniquesRestriction'Race/tag"></a> `tag`

- **Constant:** `"Race"`

#### <a name="ApplicableAllCombatTechniquesRestriction'Race/race"></a> `race`

- **Type:** <a href="#ApplicableCombatTechniquesRaceRestriction">ApplicableCombatTechniquesRaceRestriction</a>

---

### <a name="ApplicableAllCombatTechniquesRestriction'ExcludeCombatTechniques"></a> `ApplicableAllCombatTechniquesRestriction'ExcludeCombatTechniques`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ApplicableAllCombatTechniquesRestriction'ExcludeCombatTechniques/tag">See details</a>
`exclude_combat_techniques` |  | <a href="#ApplicableAllCombatTechniquesRestriction'ExcludeCombatTechniques/exclude_combat_techniques">See details</a>

#### <a name="ApplicableAllCombatTechniquesRestriction'ExcludeCombatTechniques/tag"></a> `tag`

- **Constant:** `"ExcludeCombatTechniques"`

#### <a name="ApplicableAllCombatTechniquesRestriction'ExcludeCombatTechniques/exclude_combat_techniques"></a> `exclude_combat_techniques`

- **Type:** <a href="#ApplicableAllCombatTechniquesRestriction'ExcludeCombatTechniques/exclude_combat_techniques">Object</a>

---

### <a name="ApplicableAllCombatTechniquesRestriction'ExcludeCombatTechniques/exclude_combat_techniques"></a> `ApplicableAllCombatTechniquesRestriction'ExcludeCombatTechniques/exclude_combat_techniques`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`list` | The combat techniques this combat special ability is **not** applicable to. | <a href="#ApplicableAllCombatTechniquesRestriction'ExcludeCombatTechniques/exclude_combat_techniques/list">See details</a>

#### <a name="ApplicableAllCombatTechniquesRestriction'ExcludeCombatTechniques/exclude_combat_techniques/list"></a> `list`

The combat techniques this combat special ability is **not** applicable to.

- **Type:** List
- **Items:** <a href="#ApplicableAllCombatTechniquesRestriction'ExcludeCombatTechniques/exclude_combat_techniques/list[]">ApplicableAllCombatTechniquesRestriction'ExcludeCombatTechniques/exclude_combat_techniques/list[]</a>
- **Minimum Items:** `1`
- **Unique Items:** Yes

---

### <a name="ApplicableAllCombatTechniquesRestriction'ExcludeCombatTechniques/exclude_combat_techniques/list[]"></a> `ApplicableAllCombatTechniquesRestriction'ExcludeCombatTechniques/exclude_combat_techniques/list[]`

- **Type:** <a href="./_SimpleReferences.md#CombatTechniqueReference">CombatTechniqueReference</a>

---

### <a name="ApplicableCloseCombatTechniquesRestriction"></a> `ApplicableCloseCombatTechniquesRestriction`

- **Type:** Union
- **Cases:** <a href="#ApplicableCloseCombatTechniquesRestriction'Improvised">ApplicableCloseCombatTechniquesRestriction'Improvised</a> | <a href="#ApplicableCloseCombatTechniquesRestriction'PointedBlade">ApplicableCloseCombatTechniquesRestriction'PointedBlade</a> | <a href="#ApplicableCloseCombatTechniquesRestriction'Mount">ApplicableCloseCombatTechniquesRestriction'Mount</a> | <a href="#ApplicableCloseCombatTechniquesRestriction'HasParry">ApplicableCloseCombatTechniquesRestriction'HasParry</a> | <a href="#ApplicableCloseCombatTechniquesRestriction'OneHanded">ApplicableCloseCombatTechniquesRestriction'OneHanded</a> | <a href="#ApplicableCloseCombatTechniquesRestriction'ParryingWeapon">ApplicableCloseCombatTechniquesRestriction'ParryingWeapon</a> | <a href="#ApplicableCloseCombatTechniquesRestriction'Race">ApplicableCloseCombatTechniquesRestriction'Race</a> | <a href="#ApplicableCloseCombatTechniquesRestriction'ExcludeCombatTechniques">ApplicableCloseCombatTechniquesRestriction'ExcludeCombatTechniques</a>

---

### <a name="ApplicableCloseCombatTechniquesRestriction'Improvised"></a> `ApplicableCloseCombatTechniquesRestriction'Improvised`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ApplicableCloseCombatTechniquesRestriction'Improvised/tag">See details</a>
`improvised` |  | <a href="#ApplicableCloseCombatTechniquesRestriction'Improvised/improvised">See details</a>

#### <a name="ApplicableCloseCombatTechniquesRestriction'Improvised/tag"></a> `tag`

- **Constant:** `"Improvised"`

#### <a name="ApplicableCloseCombatTechniquesRestriction'Improvised/improvised"></a> `improvised`

- **Type:** <a href="#ApplicableCloseCombatTechniquesRestriction'Improvised/improvised">Object</a>

---

### <a name="ApplicableCloseCombatTechniquesRestriction'Improvised/improvised"></a> `ApplicableCloseCombatTechniquesRestriction'Improvised/improvised`

- **Type:** Empty Object

---

### <a name="ApplicableCloseCombatTechniquesRestriction'PointedBlade"></a> `ApplicableCloseCombatTechniquesRestriction'PointedBlade`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ApplicableCloseCombatTechniquesRestriction'PointedBlade/tag">See details</a>
`pointed_blade` |  | <a href="#ApplicableCloseCombatTechniquesRestriction'PointedBlade/pointed_blade">See details</a>

#### <a name="ApplicableCloseCombatTechniquesRestriction'PointedBlade/tag"></a> `tag`

- **Constant:** `"PointedBlade"`

#### <a name="ApplicableCloseCombatTechniquesRestriction'PointedBlade/pointed_blade"></a> `pointed_blade`

- **Type:** <a href="#ApplicableCloseCombatTechniquesRestriction'PointedBlade/pointed_blade">Object</a>

---

### <a name="ApplicableCloseCombatTechniquesRestriction'PointedBlade/pointed_blade"></a> `ApplicableCloseCombatTechniquesRestriction'PointedBlade/pointed_blade`

- **Type:** Empty Object

---

### <a name="ApplicableCloseCombatTechniquesRestriction'Mount"></a> `ApplicableCloseCombatTechniquesRestriction'Mount`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ApplicableCloseCombatTechniquesRestriction'Mount/tag">See details</a>
`mount` |  | <a href="#ApplicableCloseCombatTechniquesRestriction'Mount/mount">See details</a>

#### <a name="ApplicableCloseCombatTechniquesRestriction'Mount/tag"></a> `tag`

- **Constant:** `"Mount"`

#### <a name="ApplicableCloseCombatTechniquesRestriction'Mount/mount"></a> `mount`

- **Type:** <a href="#ApplicableCloseCombatTechniquesRestriction'Mount/mount">Object</a>

---

### <a name="ApplicableCloseCombatTechniquesRestriction'Mount/mount"></a> `ApplicableCloseCombatTechniquesRestriction'Mount/mount`

- **Type:** Empty Object

---

### <a name="ApplicableCloseCombatTechniquesRestriction'HasParry"></a> `ApplicableCloseCombatTechniquesRestriction'HasParry`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ApplicableCloseCombatTechniquesRestriction'HasParry/tag">See details</a>
`has_parry` |  | <a href="#ApplicableCloseCombatTechniquesRestriction'HasParry/has_parry">See details</a>

#### <a name="ApplicableCloseCombatTechniquesRestriction'HasParry/tag"></a> `tag`

- **Constant:** `"HasParry"`

#### <a name="ApplicableCloseCombatTechniquesRestriction'HasParry/has_parry"></a> `has_parry`

- **Type:** <a href="#ApplicableCloseCombatTechniquesRestriction'HasParry/has_parry">Object</a>

---

### <a name="ApplicableCloseCombatTechniquesRestriction'HasParry/has_parry"></a> `ApplicableCloseCombatTechniquesRestriction'HasParry/has_parry`

- **Type:** Empty Object

---

### <a name="ApplicableCloseCombatTechniquesRestriction'OneHanded"></a> `ApplicableCloseCombatTechniquesRestriction'OneHanded`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ApplicableCloseCombatTechniquesRestriction'OneHanded/tag">See details</a>
`one_handed` |  | <a href="#ApplicableCloseCombatTechniquesRestriction'OneHanded/one_handed">See details</a>

#### <a name="ApplicableCloseCombatTechniquesRestriction'OneHanded/tag"></a> `tag`

- **Constant:** `"OneHanded"`

#### <a name="ApplicableCloseCombatTechniquesRestriction'OneHanded/one_handed"></a> `one_handed`

- **Type:** <a href="#ApplicableCloseCombatTechniquesRestriction'OneHanded/one_handed">Object</a>

---

### <a name="ApplicableCloseCombatTechniquesRestriction'OneHanded/one_handed"></a> `ApplicableCloseCombatTechniquesRestriction'OneHanded/one_handed`

- **Type:** Empty Object

---

### <a name="ApplicableCloseCombatTechniquesRestriction'ParryingWeapon"></a> `ApplicableCloseCombatTechniquesRestriction'ParryingWeapon`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ApplicableCloseCombatTechniquesRestriction'ParryingWeapon/tag">See details</a>
`parrying_weapon` |  | <a href="#ApplicableCloseCombatTechniquesRestriction'ParryingWeapon/parrying_weapon">See details</a>

#### <a name="ApplicableCloseCombatTechniquesRestriction'ParryingWeapon/tag"></a> `tag`

- **Constant:** `"ParryingWeapon"`

#### <a name="ApplicableCloseCombatTechniquesRestriction'ParryingWeapon/parrying_weapon"></a> `parrying_weapon`

- **Type:** <a href="#ApplicableCloseCombatTechniquesRestriction'ParryingWeapon/parrying_weapon">Object</a>

---

### <a name="ApplicableCloseCombatTechniquesRestriction'ParryingWeapon/parrying_weapon"></a> `ApplicableCloseCombatTechniquesRestriction'ParryingWeapon/parrying_weapon`

- **Type:** Empty Object

---

### <a name="ApplicableCloseCombatTechniquesRestriction'Race"></a> `ApplicableCloseCombatTechniquesRestriction'Race`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ApplicableCloseCombatTechniquesRestriction'Race/tag">See details</a>
`race` |  | <a href="#ApplicableCloseCombatTechniquesRestriction'Race/race">See details</a>

#### <a name="ApplicableCloseCombatTechniquesRestriction'Race/tag"></a> `tag`

- **Constant:** `"Race"`

#### <a name="ApplicableCloseCombatTechniquesRestriction'Race/race"></a> `race`

- **Type:** <a href="#ApplicableCombatTechniquesRaceRestriction">ApplicableCombatTechniquesRaceRestriction</a>

---

### <a name="ApplicableCloseCombatTechniquesRestriction'ExcludeCombatTechniques"></a> `ApplicableCloseCombatTechniquesRestriction'ExcludeCombatTechniques`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ApplicableCloseCombatTechniquesRestriction'ExcludeCombatTechniques/tag">See details</a>
`exclude_combat_techniques` |  | <a href="#ApplicableCloseCombatTechniquesRestriction'ExcludeCombatTechniques/exclude_combat_techniques">See details</a>

#### <a name="ApplicableCloseCombatTechniquesRestriction'ExcludeCombatTechniques/tag"></a> `tag`

- **Constant:** `"ExcludeCombatTechniques"`

#### <a name="ApplicableCloseCombatTechniquesRestriction'ExcludeCombatTechniques/exclude_combat_techniques"></a> `exclude_combat_techniques`

- **Type:** <a href="#ApplicableCloseCombatTechniquesRestriction'ExcludeCombatTechniques/exclude_combat_techniques">Object</a>

---

### <a name="ApplicableCloseCombatTechniquesRestriction'ExcludeCombatTechniques/exclude_combat_techniques"></a> `ApplicableCloseCombatTechniquesRestriction'ExcludeCombatTechniques/exclude_combat_techniques`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`list` | The combat techniques this combat special ability is **not** applicable to. | <a href="#ApplicableCloseCombatTechniquesRestriction'ExcludeCombatTechniques/exclude_combat_techniques/list">See details</a>

#### <a name="ApplicableCloseCombatTechniquesRestriction'ExcludeCombatTechniques/exclude_combat_techniques/list"></a> `list`

The combat techniques this combat special ability is **not** applicable to.

- **Type:** List
- **Items:** <a href="#ApplicableCloseCombatTechniquesRestriction'ExcludeCombatTechniques/exclude_combat_techniques/list[]">ApplicableCloseCombatTechniquesRestriction'ExcludeCombatTechniques/exclude_combat_techniques/list[]</a>
- **Minimum Items:** `1`
- **Unique Items:** Yes

---

### <a name="ApplicableCloseCombatTechniquesRestriction'ExcludeCombatTechniques/exclude_combat_techniques/list[]"></a> `ApplicableCloseCombatTechniquesRestriction'ExcludeCombatTechniques/exclude_combat_techniques/list[]`

- **Type:** <a href="./_SimpleReferences.md#CloseCombatTechniqueReference">CloseCombatTechniqueReference</a>

---

### <a name="ApplicableRangedCombatTechniquesRestriction"></a> `ApplicableRangedCombatTechniquesRestriction`

- **Type:** Union
- **Cases:** <a href="#ApplicableRangedCombatTechniquesRestriction'Improvised">ApplicableRangedCombatTechniquesRestriction'Improvised</a> | <a href="#ApplicableRangedCombatTechniquesRestriction'PointedBlade">ApplicableRangedCombatTechniquesRestriction'PointedBlade</a> | <a href="#ApplicableRangedCombatTechniquesRestriction'Mount">ApplicableRangedCombatTechniquesRestriction'Mount</a> | <a href="#ApplicableRangedCombatTechniquesRestriction'Race">ApplicableRangedCombatTechniquesRestriction'Race</a> | <a href="#ApplicableRangedCombatTechniquesRestriction'ExcludeCombatTechniques">ApplicableRangedCombatTechniquesRestriction'ExcludeCombatTechniques</a>

---

### <a name="ApplicableRangedCombatTechniquesRestriction'Improvised"></a> `ApplicableRangedCombatTechniquesRestriction'Improvised`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ApplicableRangedCombatTechniquesRestriction'Improvised/tag">See details</a>
`improvised` |  | <a href="#ApplicableRangedCombatTechniquesRestriction'Improvised/improvised">See details</a>

#### <a name="ApplicableRangedCombatTechniquesRestriction'Improvised/tag"></a> `tag`

- **Constant:** `"Improvised"`

#### <a name="ApplicableRangedCombatTechniquesRestriction'Improvised/improvised"></a> `improvised`

- **Type:** <a href="#ApplicableRangedCombatTechniquesRestriction'Improvised/improvised">Object</a>

---

### <a name="ApplicableRangedCombatTechniquesRestriction'Improvised/improvised"></a> `ApplicableRangedCombatTechniquesRestriction'Improvised/improvised`

- **Type:** Empty Object

---

### <a name="ApplicableRangedCombatTechniquesRestriction'PointedBlade"></a> `ApplicableRangedCombatTechniquesRestriction'PointedBlade`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ApplicableRangedCombatTechniquesRestriction'PointedBlade/tag">See details</a>
`pointed_blade` |  | <a href="#ApplicableRangedCombatTechniquesRestriction'PointedBlade/pointed_blade">See details</a>

#### <a name="ApplicableRangedCombatTechniquesRestriction'PointedBlade/tag"></a> `tag`

- **Constant:** `"PointedBlade"`

#### <a name="ApplicableRangedCombatTechniquesRestriction'PointedBlade/pointed_blade"></a> `pointed_blade`

- **Type:** <a href="#ApplicableRangedCombatTechniquesRestriction'PointedBlade/pointed_blade">Object</a>

---

### <a name="ApplicableRangedCombatTechniquesRestriction'PointedBlade/pointed_blade"></a> `ApplicableRangedCombatTechniquesRestriction'PointedBlade/pointed_blade`

- **Type:** Empty Object

---

### <a name="ApplicableRangedCombatTechniquesRestriction'Mount"></a> `ApplicableRangedCombatTechniquesRestriction'Mount`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ApplicableRangedCombatTechniquesRestriction'Mount/tag">See details</a>
`mount` |  | <a href="#ApplicableRangedCombatTechniquesRestriction'Mount/mount">See details</a>

#### <a name="ApplicableRangedCombatTechniquesRestriction'Mount/tag"></a> `tag`

- **Constant:** `"Mount"`

#### <a name="ApplicableRangedCombatTechniquesRestriction'Mount/mount"></a> `mount`

- **Type:** <a href="#ApplicableRangedCombatTechniquesRestriction'Mount/mount">Object</a>

---

### <a name="ApplicableRangedCombatTechniquesRestriction'Mount/mount"></a> `ApplicableRangedCombatTechniquesRestriction'Mount/mount`

- **Type:** Empty Object

---

### <a name="ApplicableRangedCombatTechniquesRestriction'Race"></a> `ApplicableRangedCombatTechniquesRestriction'Race`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ApplicableRangedCombatTechniquesRestriction'Race/tag">See details</a>
`race` |  | <a href="#ApplicableRangedCombatTechniquesRestriction'Race/race">See details</a>

#### <a name="ApplicableRangedCombatTechniquesRestriction'Race/tag"></a> `tag`

- **Constant:** `"Race"`

#### <a name="ApplicableRangedCombatTechniquesRestriction'Race/race"></a> `race`

- **Type:** <a href="#ApplicableCombatTechniquesRaceRestriction">ApplicableCombatTechniquesRaceRestriction</a>

---

### <a name="ApplicableRangedCombatTechniquesRestriction'ExcludeCombatTechniques"></a> `ApplicableRangedCombatTechniquesRestriction'ExcludeCombatTechniques`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ApplicableRangedCombatTechniquesRestriction'ExcludeCombatTechniques/tag">See details</a>
`exclude_combat_techniques` |  | <a href="#ApplicableRangedCombatTechniquesRestriction'ExcludeCombatTechniques/exclude_combat_techniques">See details</a>

#### <a name="ApplicableRangedCombatTechniquesRestriction'ExcludeCombatTechniques/tag"></a> `tag`

- **Constant:** `"ExcludeCombatTechniques"`

#### <a name="ApplicableRangedCombatTechniquesRestriction'ExcludeCombatTechniques/exclude_combat_techniques"></a> `exclude_combat_techniques`

- **Type:** <a href="#ApplicableRangedCombatTechniquesRestriction'ExcludeCombatTechniques/exclude_combat_techniques">Object</a>

---

### <a name="ApplicableRangedCombatTechniquesRestriction'ExcludeCombatTechniques/exclude_combat_techniques"></a> `ApplicableRangedCombatTechniquesRestriction'ExcludeCombatTechniques/exclude_combat_techniques`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`list` | The combat techniques this combat special ability is **not** applicable to. | <a href="#ApplicableRangedCombatTechniquesRestriction'ExcludeCombatTechniques/exclude_combat_techniques/list">See details</a>

#### <a name="ApplicableRangedCombatTechniquesRestriction'ExcludeCombatTechniques/exclude_combat_techniques/list"></a> `list`

The combat techniques this combat special ability is **not** applicable to.

- **Type:** List
- **Items:** <a href="#ApplicableRangedCombatTechniquesRestriction'ExcludeCombatTechniques/exclude_combat_techniques/list[]">ApplicableRangedCombatTechniquesRestriction'ExcludeCombatTechniques/exclude_combat_techniques/list[]</a>
- **Minimum Items:** `1`
- **Unique Items:** Yes

---

### <a name="ApplicableRangedCombatTechniquesRestriction'ExcludeCombatTechniques/exclude_combat_techniques/list[]"></a> `ApplicableRangedCombatTechniquesRestriction'ExcludeCombatTechniques/exclude_combat_techniques/list[]`

- **Type:** <a href="./_SimpleReferences.md#RangedCombatTechniqueReference">RangedCombatTechniqueReference</a>

---

### <a name="ApplicableSpecificCombatTechniquesRestriction"></a> `ApplicableSpecificCombatTechniquesRestriction`

- **Type:** Union
- **Cases:** <a href="#ApplicableSpecificCombatTechniquesRestriction'Improvised">ApplicableSpecificCombatTechniquesRestriction'Improvised</a> | <a href="#ApplicableSpecificCombatTechniquesRestriction'PointedBlade">ApplicableSpecificCombatTechniquesRestriction'PointedBlade</a> | <a href="#ApplicableSpecificCombatTechniquesRestriction'Mount">ApplicableSpecificCombatTechniquesRestriction'Mount</a> | <a href="#ApplicableSpecificCombatTechniquesRestriction'Race">ApplicableSpecificCombatTechniquesRestriction'Race</a> | <a href="#ApplicableSpecificCombatTechniquesRestriction'Level">ApplicableSpecificCombatTechniquesRestriction'Level</a> | <a href="#ApplicableSpecificCombatTechniquesRestriction'Weapons">ApplicableSpecificCombatTechniquesRestriction'Weapons</a>

---

### <a name="ApplicableSpecificCombatTechniquesRestriction'Improvised"></a> `ApplicableSpecificCombatTechniquesRestriction'Improvised`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ApplicableSpecificCombatTechniquesRestriction'Improvised/tag">See details</a>
`improvised` |  | <a href="#ApplicableSpecificCombatTechniquesRestriction'Improvised/improvised">See details</a>

#### <a name="ApplicableSpecificCombatTechniquesRestriction'Improvised/tag"></a> `tag`

- **Constant:** `"Improvised"`

#### <a name="ApplicableSpecificCombatTechniquesRestriction'Improvised/improvised"></a> `improvised`

- **Type:** <a href="#ApplicableSpecificCombatTechniquesRestriction'Improvised/improvised">Object</a>

---

### <a name="ApplicableSpecificCombatTechniquesRestriction'Improvised/improvised"></a> `ApplicableSpecificCombatTechniquesRestriction'Improvised/improvised`

- **Type:** Empty Object

---

### <a name="ApplicableSpecificCombatTechniquesRestriction'PointedBlade"></a> `ApplicableSpecificCombatTechniquesRestriction'PointedBlade`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ApplicableSpecificCombatTechniquesRestriction'PointedBlade/tag">See details</a>
`pointed_blade` |  | <a href="#ApplicableSpecificCombatTechniquesRestriction'PointedBlade/pointed_blade">See details</a>

#### <a name="ApplicableSpecificCombatTechniquesRestriction'PointedBlade/tag"></a> `tag`

- **Constant:** `"PointedBlade"`

#### <a name="ApplicableSpecificCombatTechniquesRestriction'PointedBlade/pointed_blade"></a> `pointed_blade`

- **Type:** <a href="#ApplicableSpecificCombatTechniquesRestriction'PointedBlade/pointed_blade">Object</a>

---

### <a name="ApplicableSpecificCombatTechniquesRestriction'PointedBlade/pointed_blade"></a> `ApplicableSpecificCombatTechniquesRestriction'PointedBlade/pointed_blade`

- **Type:** Empty Object

---

### <a name="ApplicableSpecificCombatTechniquesRestriction'Mount"></a> `ApplicableSpecificCombatTechniquesRestriction'Mount`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ApplicableSpecificCombatTechniquesRestriction'Mount/tag">See details</a>
`mount` |  | <a href="#ApplicableSpecificCombatTechniquesRestriction'Mount/mount">See details</a>

#### <a name="ApplicableSpecificCombatTechniquesRestriction'Mount/tag"></a> `tag`

- **Constant:** `"Mount"`

#### <a name="ApplicableSpecificCombatTechniquesRestriction'Mount/mount"></a> `mount`

- **Type:** <a href="#ApplicableSpecificCombatTechniquesRestriction'Mount/mount">Object</a>

---

### <a name="ApplicableSpecificCombatTechniquesRestriction'Mount/mount"></a> `ApplicableSpecificCombatTechniquesRestriction'Mount/mount`

- **Type:** Empty Object

---

### <a name="ApplicableSpecificCombatTechniquesRestriction'Race"></a> `ApplicableSpecificCombatTechniquesRestriction'Race`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ApplicableSpecificCombatTechniquesRestriction'Race/tag">See details</a>
`race` |  | <a href="#ApplicableSpecificCombatTechniquesRestriction'Race/race">See details</a>

#### <a name="ApplicableSpecificCombatTechniquesRestriction'Race/tag"></a> `tag`

- **Constant:** `"Race"`

#### <a name="ApplicableSpecificCombatTechniquesRestriction'Race/race"></a> `race`

- **Type:** <a href="#ApplicableCombatTechniquesRaceRestriction">ApplicableCombatTechniquesRaceRestriction</a>

---

### <a name="ApplicableSpecificCombatTechniquesRestriction'Level"></a> `ApplicableSpecificCombatTechniquesRestriction'Level`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ApplicableSpecificCombatTechniquesRestriction'Level/tag">See details</a>
`level` |  | <a href="#ApplicableSpecificCombatTechniquesRestriction'Level/level">See details</a>

#### <a name="ApplicableSpecificCombatTechniquesRestriction'Level/tag"></a> `tag`

- **Constant:** `"Level"`

#### <a name="ApplicableSpecificCombatTechniquesRestriction'Level/level"></a> `level`

- **Type:** <a href="#ApplicableCombatTechniquesLevelRestriction">ApplicableCombatTechniquesLevelRestriction</a>

---

### <a name="ApplicableSpecificCombatTechniquesRestriction'Weapons"></a> `ApplicableSpecificCombatTechniquesRestriction'Weapons`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#ApplicableSpecificCombatTechniquesRestriction'Weapons/tag">See details</a>
`weapons` |  | <a href="#ApplicableSpecificCombatTechniquesRestriction'Weapons/weapons">See details</a>

#### <a name="ApplicableSpecificCombatTechniquesRestriction'Weapons/tag"></a> `tag`

- **Constant:** `"Weapons"`

#### <a name="ApplicableSpecificCombatTechniquesRestriction'Weapons/weapons"></a> `weapons`

- **Type:** <a href="#ApplicableCombatTechniquesWeaponRestriction">ApplicableCombatTechniquesWeaponRestriction</a>

---

### <a name="ApplicableCombatTechniquesRaceRestriction"></a> `ApplicableCombatTechniquesRaceRestriction`

- **Type:** <a href="./_SimpleReferences.md#RaceReference">RaceReference</a>

---

### <a name="ApplicableCombatTechniquesLevelRestriction"></a> `ApplicableCombatTechniquesLevelRestriction`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`level` | The combat special ability is only applicable on a certain level. | <a href="#ApplicableCombatTechniquesLevelRestriction/level">See details</a>

#### <a name="ApplicableCombatTechniquesLevelRestriction/level"></a> `level`

The combat special ability is only applicable on a certain level.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="ApplicableCombatTechniquesWeaponRestriction"></a> `ApplicableCombatTechniquesWeaponRestriction`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`list` | The specific weapons this combat special ability is only applicable to. | <a href="#ApplicableCombatTechniquesWeaponRestriction/list">See details</a>

#### <a name="ApplicableCombatTechniquesWeaponRestriction/list"></a> `list`

The specific weapons this combat special ability is only applicable to.

- **Type:** List
- **Items:** <a href="#ApplicableCombatTechniquesWeaponRestriction/list[]">ApplicableCombatTechniquesWeaponRestriction/list[]</a>
- **Minimum Items:** `1`
- **Unique Items:** Yes

---

### <a name="ApplicableCombatTechniquesWeaponRestriction/list[]"></a> `ApplicableCombatTechniquesWeaponRestriction/list[]`

- **Type:** <a href="./_SimpleReferences.md#WeaponReference">WeaponReference</a>

---

### <a name="AdventurePointsValue"></a> `AdventurePointsValue`

- **Type:** Union
- **Cases:** <a href="#AdventurePointsValue'Fixed">AdventurePointsValue'Fixed</a> | <a href="#AdventurePointsValue'ByLevel">AdventurePointsValue'ByLevel</a> | <a href="#AdventurePointsValue'Indefinite">AdventurePointsValue'Indefinite</a>

---

### <a name="AdventurePointsValue'Fixed"></a> `AdventurePointsValue'Fixed`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#AdventurePointsValue'Fixed/tag">See details</a>
`fixed` |  | <a href="#AdventurePointsValue'Fixed/fixed">See details</a>

#### <a name="AdventurePointsValue'Fixed/tag"></a> `tag`

- **Constant:** `"Fixed"`

#### <a name="AdventurePointsValue'Fixed/fixed"></a> `fixed`

- **Type:** <a href="#FixedAdventurePointsValue">FixedAdventurePointsValue</a>

---

### <a name="AdventurePointsValue'ByLevel"></a> `AdventurePointsValue'ByLevel`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#AdventurePointsValue'ByLevel/tag">See details</a>
`by_level` |  | <a href="#AdventurePointsValue'ByLevel/by_level">See details</a>

#### <a name="AdventurePointsValue'ByLevel/tag"></a> `tag`

- **Constant:** `"ByLevel"`

#### <a name="AdventurePointsValue'ByLevel/by_level"></a> `by_level`

- **Type:** <a href="#AdventurePointsValueByLevel">AdventurePointsValueByLevel</a>

---

### <a name="AdventurePointsValue'Indefinite"></a> `AdventurePointsValue'Indefinite`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#AdventurePointsValue'Indefinite/tag">See details</a>
`indefinite` |  | <a href="#AdventurePointsValue'Indefinite/indefinite">See details</a>

#### <a name="AdventurePointsValue'Indefinite/tag"></a> `tag`

- **Constant:** `"Indefinite"`

#### <a name="AdventurePointsValue'Indefinite/indefinite"></a> `indefinite`

- **Type:** <a href="#AdventurePointsValue'Indefinite/indefinite">Object</a>

---

### <a name="AdventurePointsValue'Indefinite/indefinite"></a> `AdventurePointsValue'Indefinite/indefinite`

- **Type:** Empty Object

---

### <a name="FixedAdventurePointsValue"></a> `FixedAdventurePointsValue`

A fixed adventure points value. If the entry has levels, this is the cost per
level as well.

- **Type:** <a href="#AdventurePointsSingleValue">AdventurePointsSingleValue</a>

---

### <a name="AdventurePointsValueByLevel"></a> `AdventurePointsValueByLevel`

An entry with levels may have different costs for each level. The length of
the list must match the amount of levels the special ability has.

- **Type:** List
- **Items:** <a href="#AdventurePointsValueByLevel[]">AdventurePointsValueByLevel[]</a>
- **Minimum Items:** `2`

---

### <a name="AdventurePointsValueByLevel[]"></a> `AdventurePointsValueByLevel[]`

- **Type:** <a href="#AdventurePointsSingleValue">AdventurePointsSingleValue</a>

---

### <a name="AdventurePointsSingleValue"></a> `AdventurePointsSingleValue`

A single adventure points value.

- **Type:** Integer
- **Minimum:** `0`
