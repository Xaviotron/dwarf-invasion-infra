export interface Character {
  achievementPoints: number
  battlegroup: any
  calcClass: any
  class: number
  faction: number
  gender: number
  guild: Guild
  items: Items
  lastModified: number
  level: number
  name: string
  race: number
  realm: string
  talentLoadouts: TalentLoadout[]
  thumbnail: any
  totalHonorableKills: any
  v2: V2
}

export interface Guild {
  achievementPoints: any
  battlegroup: any
  emblem: any
  members: any
}

export interface Items {
  averageItemLevel: number
  averageItemLevelEquipped: number
  back: Back
  chest: Chest
  feet: Feet
  finger1: Finger1
  finger2: Finger2
  hands: Hands
  head: Head
  legs: Legs
  mainHand: MainHand
  neck: Neck
  offHand: any
  shirt: any
  shoulder: Shoulder
  tabard: any
  trinket1: Trinket1
  trinket2: Trinket2
  waist: Waist
  wrist: Wrist
}

export interface Back {
  id: number
  name: string
  names: Names
  icon: string
  quality: number
  itemClass: number
  itemSubClass: number
  inventoryType: number
  itemLevel: number
  stats: Stat[]
  expansion: number
  baseItemLevel: number
  socketInfo: SocketInfo
  bonusLists: number[]
  context: number
  tooltipParams: TooltipParams
  craftedStats: any[]
  gem_id: string
}

export interface Names {
  de_DE: string
  en_US: string
  es_ES: string
  fr_FR: string
  it_IT: string
  pt_BR: string
  ru_RU: string
}

export interface Stat {
  id: number
  alloc: number
}

export interface SocketInfo {}

export interface TooltipParams {}

export interface Chest {
  id: number
  name: string
  names: Names2
  icon: string
  quality: number
  itemClass: number
  itemSubClass: number
  inventoryType: number
  itemLevel: number
  stats: Stat2[]
  expansion: number
  baseItemLevel: number
  socketInfo: SocketInfo2
  bonusLists: number[]
  context: number
  tooltipParams: TooltipParams2
  craftedStats: any[]
  gem_id: string
}

export interface Names2 {
  de_DE: string
  en_US: string
  es_ES: string
  fr_FR: string
  it_IT: string
  pt_BR: string
  ru_RU: string
}

export interface Stat2 {
  id: number
  alloc: number
}

export interface SocketInfo2 {}

export interface TooltipParams2 {}

export interface Feet {
  id: number
  name: string
  names: Names3
  icon: string
  quality: number
  itemClass: number
  itemSubClass: number
  inventoryType: number
  itemLevel: number
  stats: Stat3[]
  expansion: number
  baseItemLevel: number
  socketInfo: SocketInfo3
  bonusLists: number[]
  context: number
  tooltipParams: TooltipParams3
  craftedStats: any[]
  gem_id: string
}

export interface Names3 {
  de_DE: string
  en_US: string
  es_ES: string
  fr_FR: string
  it_IT: string
  pt_BR: string
  ru_RU: string
}

export interface Stat3 {
  id: number
  alloc: number
}

export interface SocketInfo3 {}

export interface TooltipParams3 {}

export interface Finger1 {
  id: number
  name: string
  names: Names4
  icon: string
  quality: number
  itemClass: number
  itemSubClass: number
  inventoryType: number
  itemLevel: number
  uniqueEquipped: boolean
  stats: Stat4[]
  expansion: number
  baseItemLevel: number
  socketInfo: SocketInfo4
  bonusLists: number[]
  context: number
  tooltipParams: TooltipParams4
  craftedStats: any[]
  gem_id: string
}

export interface Names4 {
  de_DE: string
  en_US: string
  es_ES: string
  fr_FR: string
  it_IT: string
  pt_BR: string
  ru_RU: string
}

export interface Stat4 {
  id: number
  alloc: number
}

export interface SocketInfo4 {}

export interface TooltipParams4 {}

export interface Finger2 {
  id: number
  name: string
  names: Names5
  icon: string
  quality: number
  itemClass: number
  itemSubClass: number
  inventoryType: number
  itemLevel: number
  uniqueEquipped: boolean
  stats: Stat5[]
  expansion: number
  baseItemLevel: number
  socketInfo: SocketInfo5
  bonusLists: number[]
  context: number
  tooltipParams: TooltipParams5
  craftedStats: any[]
  gem_id: string
}

export interface Names5 {
  de_DE: string
  en_US: string
  es_ES: string
  fr_FR: string
  it_IT: string
  pt_BR: string
  ru_RU: string
}

export interface Stat5 {
  id: number
  alloc: number
}

export interface SocketInfo5 {}

export interface TooltipParams5 {}

export interface Hands {
  id: number
  name: string
  names: Names6
  icon: string
  quality: number
  itemClass: number
  itemSubClass: number
  inventoryType: number
  itemLevel: number
  stats: Stat6[]
  expansion: number
  baseItemLevel: number
  socketInfo: SocketInfo6
  bonusLists: number[]
  context: number
  tooltipParams: TooltipParams6
  craftedStats: any[]
  gem_id: string
}

export interface Names6 {
  de_DE: string
  en_US: string
  es_ES: string
  fr_FR: string
  it_IT: string
  pt_BR: string
  ru_RU: string
}

export interface Stat6 {
  id: number
  alloc: number
}

export interface SocketInfo6 {}

export interface TooltipParams6 {}

export interface Head {
  id: number
  name: string
  names: Names7
  icon: string
  quality: number
  itemClass: number
  itemSubClass: number
  inventoryType: number
  itemLevel: number
  stats: Stat7[]
  expansion: number
  baseItemLevel: number
  socketInfo: SocketInfo7
  bonusLists: number[]
  context: number
  tooltipParams: TooltipParams7
  craftedStats: any[]
  gem_id: string
}

export interface Names7 {
  de_DE: string
  en_US: string
  es_ES: string
  fr_FR: string
  it_IT: string
  pt_BR: string
  ru_RU: string
}

export interface Stat7 {
  id: number
  alloc: number
}

export interface SocketInfo7 {}

export interface TooltipParams7 {}

export interface Legs {
  id: number
  name: string
  names: Names8
  icon: string
  quality: number
  itemClass: number
  itemSubClass: number
  inventoryType: number
  itemLevel: number
  stats: Stat8[]
  expansion: number
  baseItemLevel: number
  socketInfo: SocketInfo8
  bonusLists: number[]
  context: number
  tooltipParams: TooltipParams8
  craftedStats: any[]
  gem_id: string
}

export interface Names8 {
  de_DE: string
  en_US: string
  es_ES: string
  fr_FR: string
  it_IT: string
  pt_BR: string
  ru_RU: string
}

export interface Stat8 {
  id: number
  alloc: number
}

export interface SocketInfo8 {}

export interface TooltipParams8 {}

export interface MainHand {
  id: number
  name: string
  names: Names9
  icon: string
  quality: number
  itemClass: number
  itemSubClass: number
  inventoryType: number
  itemLevel: number
  allowableClasses: number[]
  stats: Stat9[]
  expansion: number
  baseItemLevel: number
  socketInfo: SocketInfo9
  bonusLists: number[]
  context: number
  tooltipParams: TooltipParams9
  craftedStats: any[]
  gem_id: string
}

export interface Names9 {
  de_DE: string
  en_US: string
  es_ES: string
  fr_FR: string
  it_IT: string
  pt_BR: string
  ru_RU: string
}

export interface Stat9 {
  id: number
  alloc: number
}

export interface SocketInfo9 {}

export interface TooltipParams9 {}

export interface Neck {
  id: number
  name: string
  names: Names10
  icon: string
  quality: number
  itemClass: number
  itemSubClass: number
  inventoryType: number
  itemLevel: number
  stats: Stat10[]
  expansion: number
  baseItemLevel: number
  socketInfo: SocketInfo10
  bonusLists: number[]
  context: number
  tooltipParams: TooltipParams10
  craftedStats: any[]
  gem_id: string
}

export interface Names10 {
  de_DE: string
  en_US: string
  es_ES: string
  fr_FR: string
  it_IT: string
  pt_BR: string
  ru_RU: string
}

export interface Stat10 {
  id: number
  alloc: number
}

export interface SocketInfo10 {}

export interface TooltipParams10 {}

export interface Shoulder {
  id: number
  name: string
  names: Names11
  icon: string
  quality: number
  itemClass: number
  itemSubClass: number
  inventoryType: number
  itemLevel: number
  stats: Stat11[]
  expansion: number
  baseItemLevel: number
  socketInfo: SocketInfo11
  bonusLists: number[]
  context: number
  tooltipParams: TooltipParams11
  craftedStats: any[]
  gem_id: string
}

export interface Names11 {
  de_DE: string
  en_US: string
  es_ES: string
  fr_FR: string
  it_IT: string
  pt_BR: string
  ru_RU: string
}

export interface Stat11 {
  id: number
  alloc: number
}

export interface SocketInfo11 {}

export interface TooltipParams11 {}

export interface Trinket1 {
  id: number
  name: string
  names: Names12
  icon: string
  quality: number
  itemClass: number
  itemSubClass: number
  inventoryType: number
  itemLevel: number
  uniqueEquipped: boolean
  stats: Stat12[]
  expansion: number
  baseItemLevel: number
  socketInfo: SocketInfo12
  bonusLists: number[]
  context: number
  tooltipParams: TooltipParams12
  craftedStats: any[]
  gem_id: string
}

export interface Names12 {
  de_DE: string
  en_US: string
  es_ES: string
  fr_FR: string
  it_IT: string
  pt_BR: string
  ru_RU: string
}

export interface Stat12 {
  id: number
  alloc: number
}

export interface SocketInfo12 {}

export interface TooltipParams12 {}

export interface Trinket2 {
  id: number
  name: string
  names: Names13
  icon: string
  quality: number
  itemClass: number
  itemSubClass: number
  inventoryType: number
  itemLevel: number
  uniqueEquipped: boolean
  stats: Stat13[]
  expansion: number
  baseItemLevel: number
  socketInfo: SocketInfo13
  bonusLists: number[]
  context: number
  tooltipParams: TooltipParams13
  craftedStats: any[]
  gem_id: string
}

export interface Names13 {
  de_DE: string
  en_US: string
  es_ES: string
  fr_FR: string
  it_IT: string
  pt_BR: string
  ru_RU: string
}

export interface Stat13 {
  id: number
  alloc: number
}

export interface SocketInfo13 {}

export interface TooltipParams13 {}

export interface Waist {
  id: number
  name: string
  names: Names14
  icon: string
  quality: number
  itemClass: number
  itemSubClass: number
  inventoryType: number
  itemLevel: number
  stats: Stat14[]
  expansion: number
  baseItemLevel: number
  socketInfo: SocketInfo14
  bonusLists: number[]
  context: number
  tooltipParams: TooltipParams14
  craftedStats: any[]
  gem_id: string
}

export interface Names14 {
  de_DE: string
  en_US: string
  es_ES: string
  fr_FR: string
  it_IT: string
  pt_BR: string
  ru_RU: string
}

export interface Stat14 {
  id: number
  alloc: number
}

export interface SocketInfo14 {}

export interface TooltipParams14 {}

export interface Wrist {
  id: number
  name: string
  names: Names15
  icon: string
  quality: number
  itemClass: number
  itemSubClass: number
  inventoryType: number
  itemLevel: number
  stats: Stat15[]
  expansion: number
  baseItemLevel: number
  socketInfo: SocketInfo15
  bonusLists: number[]
  context: number
  tooltipParams: TooltipParams15
  craftedStats: any[]
  gem_id: string
}

export interface Names15 {
  de_DE: string
  en_US: string
  es_ES: string
  fr_FR: string
  it_IT: string
  pt_BR: string
  ru_RU: string
}

export interface Stat15 {
  id: number
  alloc: number
}

export interface SocketInfo15 {}

export interface TooltipParams15 {}

export interface TalentLoadout {
  index: number
  active: boolean
  name: string
  rawString: string
  string: string
  talents: Talents
}

export interface Talents {
  className: string
  classId: number
  specName: string
  specId: number
  fullNodeOrder: number[]
  spent: Spent
  entries: Entry[]
  rawString: string
  rawInput: string
  unknownEntries: any[]
}

export interface Spent {
  spec: number
  class: number
}

export interface Entry {
  entry: Entry2
  rank: number
}

export interface Entry2 {
  id: number
  definitionId: number
  maxRanks: number
  type: string
  name: string
  spellId: number
  icon: string
  index: number
  nodeId: number
  node: Node
  tree: string
}

export interface Node {
  id: number
  name: string
  type: string
  posX: number
  posY: number
  maxRanks: number
  entryNode?: boolean
  next: number[]
  prev: number[]
  entries: Entry3[]
  reqPoints?: number
}

export interface Entry3 {
  id: number
  definitionId: number
  maxRanks: number
  type: string
  name: string
  spellId: number
  icon: string
  index: number
}

export interface V2 {
  profile: Profile
  equipment: Equipment2
  specializations: Specializations2
}

export interface Profile {
  _links: Links
  id: number
  name: string
  gender: Gender
  faction: Faction
  race: Race
  character_class: CharacterClass
  active_spec: ActiveSpec
  realm: Realm
  level: number
  experience: number
  achievement_points: number
  achievements: Achievements
  titles: Titles
  pvp_summary: PvpSummary
  encounters: Encounters
  media: Media
  last_login_timestamp: number
  average_item_level: number
  equipped_item_level: number
  specializations: Specializations
  statistics: Statistics
  mythic_keystone_profile: MythicKeystoneProfile
  equipment: Equipment
  appearance: Appearance
  collections: Collections
  reputations: Reputations
  quests: Quests
  achievements_statistics: AchievementsStatistics
  professions: Professions
}

export interface Links {
  self: Self
}

export interface Self {
  href: string
}

export interface Gender {
  type: string
  name: string
}

export interface Faction {
  type: string
  name: string
}

export interface Race {
  key: Key
  name: string
  id: number
}

export interface Key {
  href: string
}

export interface CharacterClass {
  key: Key2
  name: string
  id: number
}

export interface Key2 {
  href: string
}

export interface ActiveSpec {
  key: Key3
  name: string
  id: number
}

export interface Key3 {
  href: string
}

export interface Realm {
  key: Key4
  name: string
  id: number
  slug: string
}

export interface Key4 {
  href: string
}

export interface Achievements {
  href: string
}

export interface Titles {
  href: string
}

export interface PvpSummary {
  href: string
}

export interface Encounters {
  href: string
}

export interface Media {
  href: string
}

export interface Specializations {
  href: string
}

export interface Statistics {
  href: string
}

export interface MythicKeystoneProfile {
  href: string
}

export interface Equipment {
  href: string
}

export interface Appearance {
  href: string
}

export interface Collections {
  href: string
}

export interface Reputations {
  href: string
}

export interface Quests {
  href: string
}

export interface AchievementsStatistics {
  href: string
}

export interface Professions {
  href: string
}

export interface Equipment2 {
  _links: Links2
  character: Character
  equipped_items: EquippedItem[]
}

export interface Links2 {
  self: Self2
}

export interface Self2 {
  href: string
}

export interface Character {
  key: Key5
  name: string
  id: number
  realm: Realm2
}

export interface Key5 {
  href: string
}

export interface Realm2 {
  key: Key6
  name: string
  id: number
  slug: string
}

export interface Key6 {
  href: string
}

export interface EquippedItem {
  item: Item
  slot: Slot
  quantity: number
  context: number
  bonus_list: number[]
  timewalker_level?: number
  quality: Quality
  name: string
  media: Media2
  item_class: ItemClass
  item_subclass: ItemSubclass
  inventory_type: InventoryType
  binding: Binding
  armor?: Armor
  stats: Stat16[]
  sell_price: SellPrice
  requirements: Requirements
  level: Level2
  transmog?: Transmog
  durability?: Durability
  is_subclass_hidden?: boolean
  unique_equipped?: string
  spells?: Spell[]
  weapon?: Weapon
}

export interface Item {
  key: Key7
  id: number
}

export interface Key7 {
  href: string
}

export interface Slot {
  type: string
  name: string
}

export interface Quality {
  type: string
  name: string
}

export interface Media2 {
  key: Key8
  id: number
}

export interface Key8 {
  href: string
}

export interface ItemClass {
  key: Key9
  name: string
  id: number
}

export interface Key9 {
  href: string
}

export interface ItemSubclass {
  key: Key10
  name: string
  id: number
}

export interface Key10 {
  href: string
}

export interface InventoryType {
  type: string
  name: string
}

export interface Binding {
  type: string
  name: string
}

export interface Armor {
  value: number
  display: Display
}

export interface Display {
  display_string: string
  color: Color
}

export interface Color {
  r: number
  g: number
  b: number
  a: number
}

export interface Stat16 {
  type: Type
  value: number
  display: Display2
  is_negated?: boolean
  is_equip_bonus?: boolean
}

export interface Type {
  type: string
  name: string
}

export interface Display2 {
  display_string: string
  color: Color2
}

export interface Color2 {
  r: number
  g: number
  b: number
  a: number
}

export interface SellPrice {
  value: number
  display_strings: DisplayStrings
}

export interface DisplayStrings {
  header: string
  gold: string
  silver: string
  copper: string
}

export interface Requirements {
  level: Level
  playable_classes?: PlayableClasses
}

export interface Level {
  value: number
  display_string: string
}

export interface PlayableClasses {
  links: Link[]
  display_string: string
}

export interface Link {
  key: Key11
  name: string
  id: number
}

export interface Key11 {
  href: string
}

export interface Level2 {
  value: number
  display_string: string
}

export interface Transmog {
  item: Item2
  display_string: string
  item_modified_appearance_id: number
}

export interface Item2 {
  key: Key12
  name: string
  id: number
}

export interface Key12 {
  href: string
}

export interface Durability {
  value: number
  display_string: string
}

export interface Spell {
  spell: Spell2
  description: string
}

export interface Spell2 {
  key: Key13
  name: string
  id: number
}

export interface Key13 {
  href: string
}

export interface Weapon {
  damage: Damage
  attack_speed: AttackSpeed
  dps: Dps
}

export interface Damage {
  min_value: number
  max_value: number
  display_string: string
  damage_class: DamageClass
}

export interface DamageClass {
  type: string
  name: string
}

export interface AttackSpeed {
  value: number
  display_string: string
}

export interface Dps {
  value: number
  display_string: string
}

export interface Specializations2 {
  _links: Links3
  specializations: Specialization[]
  active_specialization: ActiveSpecialization
  character: Character2
}

export interface Links3 {
  self: Self3
}

export interface Self3 {
  href: string
}

export interface Specialization {
  specialization: Specialization2
  loadouts: Loadout[]
}

export interface Specialization2 {
  key: Key14
  name: string
  id: number
}

export interface Key14 {
  href: string
}

export interface Loadout {
  is_active: boolean
  talent_loadout_code: string
  selected_class_talents: SelectedClassTalent[]
  selected_spec_talents: SelectedSpecTalent[]
}

export interface SelectedClassTalent {
  id: number
  rank: number
  tooltip: Tooltip
  default_points?: number
}

export interface Tooltip {
  talent: Talent
  spell_tooltip: SpellTooltip
}

export interface Talent {
  key: Key15
  name: string
  id: number
}

export interface Key15 {
  href: string
}

export interface SpellTooltip {
  spell: Spell3
  description: string
  cast_time: string
  power_cost?: string
  range?: string
  cooldown?: string
}

export interface Spell3 {
  key: Key16
  name: string
  id: number
}

export interface Key16 {
  href: string
}

export interface SelectedSpecTalent {
  id: number
  rank: number
  tooltip: Tooltip2
}

export interface Tooltip2 {
  talent: Talent2
  spell_tooltip: SpellTooltip2
}

export interface Talent2 {
  key: Key17
  name: string
  id: number
}

export interface Key17 {
  href: string
}

export interface SpellTooltip2 {
  spell: Spell4
  description: string
  cast_time: string
  power_cost?: string
  range?: string
  cooldown?: string
}

export interface Spell4 {
  key: Key18
  name: string
  id: number
}

export interface Key18 {
  href: string
}

export interface ActiveSpecialization {
  key: Key19
  name: string
  id: number
}

export interface Key19 {
  href: string
}

export interface Character2 {
  key: Key20
  name: string
  id: number
  realm: Realm3
}

export interface Key20 {
  href: string
}

export interface Realm3 {
  key: Key21
  name: string
  id: number
  slug: string
}

export interface Key21 {
  href: string
}

