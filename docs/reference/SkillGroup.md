# Skill Group

## Definitions

### <a name="SkillGroup"></a> Skill Group (`SkillGroup`)

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`id` | The skill group's identifier. An unique, increasing integer. | <a href="#SkillGroup/id">See details</a>
`check` | The skill group check's attributes. | <a href="#SkillGroup/check">See details</a>
`translations` | All translations for the entry, identified by IETF language tag (BCP47). | <a href="#SkillGroup/translations">See details</a>

#### <a name="SkillGroup/id"></a> `id`

The skill group's identifier. An unique, increasing integer.

- **Type:** Integer
- **Minimum:** `1`

#### <a name="SkillGroup/check"></a> `check`

The skill group check's attributes.

- **Type:** <a href="./_SkillCheck.md#SkillCheck">SkillCheck</a>

#### <a name="SkillGroup/translations"></a> `translations`

All translations for the entry, identified by IETF language tag (BCP47).

- **Type:** Dictionary
- **Property Values:** <a href="#SkillGroup/translations[key]">SkillGroup/translations[key]</a>
- **Pattern:** `^[a-z]{2}-[A-Z]{2}$`
- **Minimum Properties:** `1`

---

### <a name="SkillGroup/translations[key]"></a> `SkillGroup/translations[key]`

- **Type:** Object

Key | Description | Details
:-- | :-- | :--
`name` | The skill group's name. | <a href="#SkillGroup/translations[key]/name">See details</a>
`full_name` | The skill group's full name. | <a href="#SkillGroup/translations[key]/full_name">See details</a>

#### <a name="SkillGroup/translations[key]/name"></a> `name`

The skill group's name.

- **Type:** String
- **Minimum Length:** `1`

#### <a name="SkillGroup/translations[key]/full_name"></a> `full_name`

The skill group's full name.

- **Type:** String
- **Minimum Length:** `1`