# Spell

## Definitions

### <a name="Spell"></a> Spell (`Spell`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The spell's identifier. An unique, increasing integer. | <a href="#Spell/id">See details</a>
`parameters` | Measurable parameters of a spell. | <a href="#Spell/parameters">See details</a>
`target` | The target category – the kind of creature or object – the skill affects. | <a href="#Spell/target">See details</a>
`property_id` | The property's identifier. | <a href="#Spell/property_id">See details</a>
`improvement_cost` | States which column is used to improve the skill. | <a href="#Spell/improvement_cost">See details</a>
`note` | A note specifying the dissemination of the cantrip in different traditions. Sometimes a cantrip is exclusively available to one or more specific traditions, but usually one the academies and traditions are listed the cantrip is most commonly teached in. | <a href="#Spell/note">See details</a>
`src` |  | <a href="#Spell/src">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#Spell/translations">See details</a>
`enhancements?` |  | <a href="#Spell/enhancements">See details</a>

#### <a name="Spell/id"></a> `id`

The spell's identifier. An unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="Spell/parameters"></a> `parameters`

Measurable parameters of a spell.

- **Type:** <a href="#PerformanceParameters">PerformanceParameters</a>

#### <a name="Spell/target"></a> `target`

The target category – the kind of creature or object – the skill affects.

- **Type:** <a href="./_ActivatableSkill.md#TargetCategory/T">TargetCategory/T</a>

#### <a name="Spell/property_id"></a> `property_id`

The property's identifier.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="Spell/improvement_cost"></a> `improvement_cost`

States which column is used to improve the skill.

- **Type:** <a href="./_ImprovementCost.md#ImprovementCost">ImprovementCost</a>

#### <a name="Spell/note"></a> `note`

A note specifying the dissemination of the cantrip in different traditions. Sometimes a cantrip is exclusively available to one or more specific traditions, but usually one the academies and traditions are listed the cantrip is most commonly teached in.

- **Type:** Union
- **Cases:** <a href="#Spell/note'Exclusive">Spell/note'Exclusive</a> | <a href="#Spell/note'Common">Spell/note'Common</a>

#### <a name="Spell/src"></a> `src`

- **Type:** <a href="./source/_PublicationRef.md#PublicationRefs">PublicationRefs</a>

#### <a name="Spell/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#Spell/translations[key]">Spell/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

#### <a name="Spell/enhancements"></a> `enhancements?`

- **Type:** <a href="./_Enhancements.md#Enhancements">Enhancements</a>

---

### <a name="Spell/note'Exclusive"></a> `Spell/note'Exclusive`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Spell/note'Exclusive/tag">See details</a>
`traditions` | The traditions the cantrip is exclusively available to. | <a href="#Spell/note'Exclusive/traditions">See details</a>

#### <a name="Spell/note'Exclusive/tag"></a> `tag`

- **Constant:** `"Exclusive"`

#### <a name="Spell/note'Exclusive/traditions"></a> `traditions`

The traditions the cantrip is exclusively available to.

- **Type:** List
- **Items:** <a href="#Spell/note'Exclusive/traditions[]">Spell/note'Exclusive/traditions[]</a>
- **Minimum Items:** `1`
- **Unique Items:** Yes

---

### <a name="Spell/note'Exclusive/traditions[]"></a> `Spell/note'Exclusive/traditions[]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The magical tradition's identifier. | <a href="#Spell/note'Exclusive/traditions[]/id">See details</a>

#### <a name="Spell/note'Exclusive/traditions[]/id"></a> `id`

The magical tradition's identifier.

- **Type:** Integer
- **Minimum:** `2`

---

### <a name="Spell/note'Common"></a> `Spell/note'Common`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#Spell/note'Common/tag">See details</a>
`list` | The academies and traditions the cantrip is commonly teached in. | <a href="#Spell/note'Common/list">See details</a>

#### <a name="Spell/note'Common/tag"></a> `tag`

- **Constant:** `"Common"`

#### <a name="Spell/note'Common/list"></a> `list`

The academies and traditions the cantrip is commonly teached in.

- **Type:** List
- **Items:** <a href="#Spell/note'Common/list[]">Spell/note'Common/list[]</a>
- **Minimum Items:** `1`
- **Unique Items:** Yes

---

### <a name="Spell/note'Common/list[]"></a> `Spell/note'Common/list[]`

- **Type:** <a href="#CommonNote">CommonNote</a>

---

### <a name="Spell/translations[key]"></a> `Spell/translations[key]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The name of the spell. | <a href="#Spell/translations[key]/name">See details</a>
`effect` | The effect description may be either a plain text or a text that is divided by a list of effects for each quality level. It may also be a list for each two quality levels. | <a href="#Spell/translations[key]/effect">See details</a>
`casting_time` |  | <a href="#Spell/translations[key]/casting_time">See details</a>
`cost` |  | <a href="#Spell/translations[key]/cost">See details</a>
`range` |  | <a href="#Spell/translations[key]/range">See details</a>
`duration` |  | <a href="#Spell/translations[key]/duration">See details</a>
`target` |  | <a href="#Spell/translations[key]/target">See details</a>
`errata?` |  | <a href="#Spell/translations[key]/errata">See details</a>

#### <a name="Spell/translations[key]/name"></a> `name`

The name of the spell.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="Spell/translations[key]/effect"></a> `effect`

The effect description may be either a plain text or a text that is divided by a list of effects for each quality level. It may also be a list for each two quality levels.

- **Type:** <a href="./_ActivatableSkill.md#Effect/T">Effect/T</a>

#### <a name="Spell/translations[key]/casting_time"></a> `casting_time`

- **Type:** <a href="#Spell/translations[key]/casting_time">Object</a>

#### <a name="Spell/translations[key]/cost"></a> `cost`

- **Type:** <a href="#Spell/translations[key]/cost">Object</a>

#### <a name="Spell/translations[key]/range"></a> `range`

- **Type:** <a href="#Spell/translations[key]/range">Object</a>

#### <a name="Spell/translations[key]/duration"></a> `duration`

- **Type:** <a href="#Spell/translations[key]/duration">Object</a>

#### <a name="Spell/translations[key]/target"></a> `target`

- **Type:** String

#### <a name="Spell/translations[key]/errata"></a> `errata?`

- **Type:** <a href="./source/_Erratum.md#Errata">Errata</a>

---

### <a name="Spell/translations[key]/casting_time"></a> `Spell/translations[key]/casting_time`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`full` |  | <a href="#Spell/translations[key]/casting_time/full">See details</a>
`abbr` |  | <a href="#Spell/translations[key]/casting_time/abbr">See details</a>

#### <a name="Spell/translations[key]/casting_time/full"></a> `full`

- **Type:** String

#### <a name="Spell/translations[key]/casting_time/abbr"></a> `abbr`

- **Type:** String

---

### <a name="Spell/translations[key]/cost"></a> `Spell/translations[key]/cost`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`full` |  | <a href="#Spell/translations[key]/cost/full">See details</a>
`abbr` |  | <a href="#Spell/translations[key]/cost/abbr">See details</a>

#### <a name="Spell/translations[key]/cost/full"></a> `full`

- **Type:** String

#### <a name="Spell/translations[key]/cost/abbr"></a> `abbr`

- **Type:** String

---

### <a name="Spell/translations[key]/range"></a> `Spell/translations[key]/range`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`full` |  | <a href="#Spell/translations[key]/range/full">See details</a>
`abbr` |  | <a href="#Spell/translations[key]/range/abbr">See details</a>

#### <a name="Spell/translations[key]/range/full"></a> `full`

- **Type:** String

#### <a name="Spell/translations[key]/range/abbr"></a> `abbr`

- **Type:** String

---

### <a name="Spell/translations[key]/duration"></a> `Spell/translations[key]/duration`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`full` |  | <a href="#Spell/translations[key]/duration/full">See details</a>
`abbr` |  | <a href="#Spell/translations[key]/duration/abbr">See details</a>

#### <a name="Spell/translations[key]/duration/full"></a> `full`

- **Type:** String

#### <a name="Spell/translations[key]/duration/abbr"></a> `abbr`

- **Type:** String

---

### <a name="PerformanceParameters"></a> `PerformanceParameters`

Measurable parameters of a blessing.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`range` |  | <a href="#PerformanceParameters/range">See details</a>
`duration` |  | <a href="#PerformanceParameters/duration">See details</a>

#### <a name="PerformanceParameters/range"></a> `range`

- **Type:** Union
- **Cases:** <a href="#PerformanceParameters/range'Self">PerformanceParameters/range'Self</a> | <a href="#PerformanceParameters/range'Touch">PerformanceParameters/range'Touch</a> | <a href="#PerformanceParameters/range'Fixed">PerformanceParameters/range'Fixed</a>

#### <a name="PerformanceParameters/duration"></a> `duration`

- **Type:** Union
- **Cases:** <a href="#PerformanceParameters/duration'Immediate">PerformanceParameters/duration'Immediate</a> | <a href="#PerformanceParameters/duration'Fixed">PerformanceParameters/duration'Fixed</a> | <a href="#PerformanceParameters/duration'DuringLovemaking">PerformanceParameters/duration'DuringLovemaking</a> | <a href="#PerformanceParameters/duration'Indefinite">PerformanceParameters/duration'Indefinite</a>

---

### <a name="PerformanceParameters/range'Self"></a> `PerformanceParameters/range'Self`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#PerformanceParameters/range'Self/tag">See details</a>

#### <a name="PerformanceParameters/range'Self/tag"></a> `tag`

- **Constant:** `"Self"`

---

### <a name="PerformanceParameters/range'Touch"></a> `PerformanceParameters/range'Touch`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#PerformanceParameters/range'Touch/tag">See details</a>

#### <a name="PerformanceParameters/range'Touch/tag"></a> `tag`

- **Constant:** `"Touch"`

---

### <a name="PerformanceParameters/range'Fixed"></a> `PerformanceParameters/range'Fixed`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#PerformanceParameters/range'Fixed/tag">See details</a>
`value` | The range in steps/m. | <a href="#PerformanceParameters/range'Fixed/value">See details</a>
`is_radius?` | If `true`, the range is a radius. | <a href="#PerformanceParameters/range'Fixed/is_radius">See details</a>

#### <a name="PerformanceParameters/range'Fixed/tag"></a> `tag`

- **Constant:** `"Fixed"`

#### <a name="PerformanceParameters/range'Fixed/value"></a> `value`

The range in steps/m.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="PerformanceParameters/range'Fixed/is_radius"></a> `is_radius?`

If `true`, the range is a radius.

- **Constant:** `true`

---

### <a name="PerformanceParameters/duration'Immediate"></a> `PerformanceParameters/duration'Immediate`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#PerformanceParameters/duration'Immediate/tag">See details</a>

#### <a name="PerformanceParameters/duration'Immediate/tag"></a> `tag`

- **Constant:** `"Immediate"`

---

### <a name="PerformanceParameters/duration'Fixed"></a> `PerformanceParameters/duration'Fixed`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#PerformanceParameters/duration'Fixed/tag">See details</a>
`is_maximum?` | If `true`, the duration is a maximum duration. | <a href="#PerformanceParameters/duration'Fixed/is_maximum">See details</a>
`value` | The (unitless) duration. | <a href="#PerformanceParameters/duration'Fixed/value">See details</a>
`unit` | The duration unit. | <a href="#PerformanceParameters/duration'Fixed/unit">See details</a>

#### <a name="PerformanceParameters/duration'Fixed/tag"></a> `tag`

- **Constant:** `"Fixed"`

#### <a name="PerformanceParameters/duration'Fixed/is_maximum"></a> `is_maximum?`

If `true`, the duration is a maximum duration.

- **Constant:** `true`

#### <a name="PerformanceParameters/duration'Fixed/value"></a> `value`

The (unitless) duration.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="PerformanceParameters/duration'Fixed/unit"></a> `unit`

The duration unit.

- **Type:** <a href="./_ActivatableSkill.md#Duration/Unit">Duration/Unit</a>

---

### <a name="PerformanceParameters/duration'DuringLovemaking"></a> `PerformanceParameters/duration'DuringLovemaking`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#PerformanceParameters/duration'DuringLovemaking/tag">See details</a>
`value` | The duration in rounds. | <a href="#PerformanceParameters/duration'DuringLovemaking/value">See details</a>

#### <a name="PerformanceParameters/duration'DuringLovemaking/tag"></a> `tag`

- **Constant:** `"DuringLovemaking"`

#### <a name="PerformanceParameters/duration'DuringLovemaking/value"></a> `value`

The duration in rounds.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="PerformanceParameters/duration'Indefinite"></a> `PerformanceParameters/duration'Indefinite`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#PerformanceParameters/duration'Indefinite/tag">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#PerformanceParameters/duration'Indefinite/translations">See details</a>

#### <a name="PerformanceParameters/duration'Indefinite/tag"></a> `tag`

- **Constant:** `"Indefinite"`

#### <a name="PerformanceParameters/duration'Indefinite/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#PerformanceParameters/duration'Indefinite/translations[key]">PerformanceParameters/duration'Indefinite/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="PerformanceParameters/duration'Indefinite/translations[key]"></a> `PerformanceParameters/duration'Indefinite/translations[key]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`description` | A description of the duration. | <a href="#PerformanceParameters/duration'Indefinite/translations[key]/description">See details</a>

#### <a name="PerformanceParameters/duration'Indefinite/translations[key]/description"></a> `description`

A description of the duration.

- **Type:** <a href="#PerformanceParameters/duration'Indefinite/translations[key]/description">Object</a>

---

### <a name="PerformanceParameters/duration'Indefinite/translations[key]/description"></a> `PerformanceParameters/duration'Indefinite/translations[key]/description`

A description of the duration.

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`default` | The full description of the duration. | <a href="#PerformanceParameters/duration'Indefinite/translations[key]/description/default">See details</a>
`compressed` | A compressed description of the duration for use in small areas (e.g. on character sheet). | <a href="#PerformanceParameters/duration'Indefinite/translations[key]/description/compressed">See details</a>

#### <a name="PerformanceParameters/duration'Indefinite/translations[key]/description/default"></a> `default`

The full description of the duration.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="PerformanceParameters/duration'Indefinite/translations[key]/description/compressed"></a> `compressed`

A compressed description of the duration for use in small areas (e.g. on character sheet).

- **Type:** String
- **Minimum Length:** `1`

---

### <a name="CommonNote"></a> `CommonNote`

- **Type:** Union
- **Cases:** <a href="#CommonNote'Academy">CommonNote'Academy</a> | <a href="#CommonNote'Tradition">CommonNote'Tradition</a>

---

### <a name="CommonNote'Academy"></a> `CommonNote'Academy`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#CommonNote'Academy/tag">See details</a>
`id` | The academy's curriculum identifier. | <a href="#CommonNote'Academy/id">See details</a>

#### <a name="CommonNote'Academy/tag"></a> `tag`

- **Constant:** `"Academy"`

#### <a name="CommonNote'Academy/id"></a> `id`

The academy's curriculum identifier.

- **Type:** Integer
- **Minimum:** `1`

---

### <a name="CommonNote'Tradition"></a> `CommonNote'Tradition`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`tag` |  | <a href="#CommonNote'Tradition/tag">See details</a>
`id` | The magical tradition's identifier. | <a href="#CommonNote'Tradition/id">See details</a>

#### <a name="CommonNote'Tradition/tag"></a> `tag`

- **Constant:** `"Tradition"`

#### <a name="CommonNote'Tradition/id"></a> `id`

The magical tradition's identifier.

- **Type:** Integer
- **Minimum:** `2`