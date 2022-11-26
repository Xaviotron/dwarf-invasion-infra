export interface SimReport {
  version: string
  report_version: string
  ptr_enabled: number
  beta_enabled: number
  build_date: string
  build_time: string
  timestamp: number
  git_revision: string
  git_branch: string
  sim: Sim
  notifications: string[]
  simbot: Simbot
}

export interface Sim {
  options: Options
  overrides: Overrides
  players: Player[]
  statistics: Statistics
  raid_events: RaidEvent[]
  sim_auras: SimAura[]
}

export interface Options {
  debug: boolean
  max_time: number
  expected_iteration_time: number
  vary_combat_length: number
  iterations: number
  target_error: number
  threads: number
  seed: number
  single_actor_batch: boolean
  queue_lag: number
  queue_lag_stddev: number
  gcd_lag: number
  gcd_lag_stddev: number
  channel_lag: number
  channel_lag_stddev: number
  queue_gcd_reduction: number
  strict_gcd_queue: boolean
  confidence: number
  confidence_estimator: number
  world_lag: number
  world_lag_stddev: number
  travel_variance: number
  default_skill: number
  reaction_time: number
  regen_periodicity: number
  ignite_sampling_delta: number
  fixed_time: boolean
  optimize_expressions: number
  optimal_raid: number
  log: number
  debug_each: number
  stat_cache: number
  max_aoe_enemies: number
  show_etmi: boolean
  tmi_window_global: number
  tmi_bin_size: number
  enemy_death_pct: number
  challenge_mode: boolean
  timewalk: number
  pvp_mode: boolean
  rng: Rng
  deterministic: number
  average_range: number
  average_gauss: number
  fight_style: string
  desired_targets: number
  default_aura_delay: number
  default_aura_delay_stddev: number
  dbc: Dbc
}

export interface Rng {
  name: string
}

export interface Dbc {
  Live: Live
  PTR: Ptr
  version_used: string
}

export interface Live {
  build_level: number
  wow_version: string
  hotfix_date: string
  hotfix_build: number
  hotfix_hash: string
}

export interface Ptr {
  build_level: number
  wow_version: string
  hotfix_date: string
  hotfix_build: number
  hotfix_hash: string
}

export interface Overrides {
  arcane_intellect: number
  battle_shout: number
  power_word_fortitude: number
  chaos_brand: number
  mystic_touch: number
  mortal_wounds: number
  bleeding: number
  bloodlust: number
}

export interface Player {
  name: string
  race: string
  level: number
  role: string
  specialization: string
  profile_source: string
  talents: string
  party: number
  ready_type: number
  bugs: boolean
  scale_player: boolean
  potion_used: boolean
  timeofday: string
  zandalari_loa: string
  vulpera_tricks: string
  invert_scaling: number
  reaction_offset: number
  reaction_max: number
  reaction_mean: number
  reaction_stddev: number
  reaction_nu: number
  world_lag: number
  brain_lag: number
  brain_lag_stddev: number
  world_lag_override: boolean
  world_lag_stddev_override: boolean
  dbc: Dbc2
  potion: string
  flask: string
  food: string
  augmentation: string
  temporary_enchant: string
  collected_data: CollectedData
  buffs: Buff2[]
  buffs_constant: BuffsConstant[]
  procs: Proc[]
  gains: Gain[]
  stats: Stat[]
  stats_pets: StatsPets
  gear: Gear
  custom: Custom
}

export interface Dbc2 {
  Live: Live2
  PTR: Ptr2
  version_used: string
}

export interface Live2 {
  build_level: number
  wow_version: string
  hotfix_date: string
  hotfix_build: number
  hotfix_hash: string
}

export interface Ptr2 {
  build_level: number
  wow_version: string
  hotfix_date: string
  hotfix_build: number
  hotfix_hash: string
}

export interface CollectedData {
  fight_length: FightLength
  waiting_time: WaitingTime
  executed_foreground_actions: ExecutedForegroundActions
  dmg: Dmg
  compound_dmg: CompoundDmg
  timeline_dmg: TimelineDmg
  total_iterations: number
  dps: Dps
  dpse: Dpse
  target_metric: TargetMetric
  buffed_stats: BuffedStats
  resource_lost: ResourceLost
  resource_overflowed: ResourceOverflowed
  combat_end_resource: CombatEndResource
  resource_timelines: ResourceTimelines
  health_changes: HealthChanges
  health_changes_tmi: HealthChangesTmi
  action_sequence_precombat: ActionSequencePrecombat[]
  action_sequence: ActionSequence[]
}

export interface FightLength {
  sum: number
  count: number
  mean: number
  min: number
  max: number
  median: number
  variance: number
  std_dev: number
  mean_variance: number
  mean_std_dev: number
}

export interface WaitingTime {
  sum: number
  count: number
  mean: number
  min: number
  max: number
}

export interface ExecutedForegroundActions {
  sum: number
  count: number
  mean: number
  min: number
  max: number
}

export interface Dmg {
  sum: number
  count: number
  mean: number
  min: number
  max: number
}

export interface CompoundDmg {
  sum: number
  count: number
  mean: number
  min: number
  max: number
}

export interface TimelineDmg {
  mean: number
  mean_std_dev: number
  min: number
  max: number
}

export interface Dps {
  sum: number
  count: number
  mean: number
  min: number
  max: number
  median: number
  variance: number
  std_dev: number
  mean_variance: number
  mean_std_dev: number
}

export interface Dpse {
  sum: number
  count: number
  mean: number
  min: number
  max: number
}

export interface TargetMetric {
  sum: number
  count: number
  mean: number
  min: number
  max: number
  median: number
  variance: number
  std_dev: number
  mean_variance: number
  mean_std_dev: number
}

export interface BuffedStats {
  attribute: Attribute
  resources: Resources
  stats: Stats
}

export interface Attribute {
  strength: number
  agility: number
  stamina: number
  intellect: number
}

export interface Resources {
  health: number
  runic_power: number
  rune: number
}

export interface Stats {
  spell_power: number
  attack_power: number
  spell_crit: number
  attack_crit: number
  spell_haste: number
  attack_haste: number
  spell_speed: number
  attack_speed: number
  mastery_value: number
  damage_versatility: number
  heal_versatility: number
  mitigation_versatility: number
  crit_rating: number
  crit_pct: number
  haste_rating: number
  haste_pct: number
  mastery_rating: number
  mastery_pct: number
  versatility_rating: number
  versatility_pct: number
  leech_rating: number
  leech_pct: number
  speed_pct: number
  armor: number
  dodge: number
  parry: number
}

export interface ResourceLost {
  health: Health
  runic_power: RunicPower
  rune: Rune
}

export interface Health {
  sum: number
  count: number
  mean: number
}

export interface RunicPower {
  sum: number
  count: number
  mean: number
}

export interface Rune {
  sum: number
  count: number
  mean: number
}

export interface ResourceOverflowed {
  health: Health2
  runic_power: RunicPower2
  rune: Rune2
}

export interface Health2 {
  sum: number
  count: number
  mean: number
}

export interface RunicPower2 {
  sum: number
  count: number
  mean: number
}

export interface Rune2 {
  sum: number
  count: number
  mean: number
}

export interface CombatEndResource {
  health: Health3
  runic_power: RunicPower3
  rune: Rune3
}

export interface Health3 {
  sum: number
  count: number
  mean: number
  min: number
  max: number
}

export interface RunicPower3 {
  sum: number
  count: number
  mean: number
  min: number
  max: number
}

export interface Rune3 {
  sum: number
  count: number
  mean: number
  min: number
  max: number
}

export interface ResourceTimelines {
  health: Health4
  runic_power: RunicPower4
  rune: Rune4
}

export interface Health4 {
  mean: number
  mean_std_dev: number
  min: number
  max: number
  data: number[]
}

export interface RunicPower4 {
  mean: number
  mean_std_dev: number
  min: number
  max: number
  data: number[]
}

export interface Rune4 {
  mean: number
  mean_std_dev: number
  min: number
  max: number
  data: number[]
}

export interface HealthChanges {
  mean: number
  mean_std_dev: number
  min: number
  max: number
  data: number[]
}

export interface HealthChangesTmi {
  mean: number
  mean_std_dev: number
  min: number
  max: number
  data: number[]
}

export interface ActionSequencePrecombat {
  time: number
  id: number
  name: string
  target: string
  spell_name: string
  queue_failed: boolean
  resources: Resources2
  resources_max: ResourcesMax
}

export interface Resources2 {
  health: number
  runic_power: number
  rune: number
}

export interface ResourcesMax {
  health: number
  runic_power: number
  rune: number
}

export interface ActionSequence {
  time: number
  id?: number
  name?: string
  target?: string
  spell_name?: string
  queue_failed?: boolean
  resources: Resources3
  resources_max: ResourcesMax2
  buffs?: Buff[]
  wait?: number
}

export interface Resources3 {
  health: number
  runic_power: number
  rune: number
}

export interface ResourcesMax2 {
  health: number
  runic_power: number
  rune: number
}

export interface Buff {
  id: number
  name: string
  stacks: number
}

export interface Buff2 {
  name: string
  spell_name: string
  spell_school: string
  spell: number
  start_count: number
  interval?: number
  trigger?: number
  duration: number
  uptime: number
  overflow_stacks?: number
  overflow_total?: number
  expire_count?: number
  refresh_count?: number
  benefit?: number
  cooldown?: Cooldown
  default_value?: number
}

export interface Cooldown {
  name: string
  duration: number
}

export interface BuffsConstant {
  name: string
  spell_name: string
  spell_school: string
  spell: number
  start_count: number
  duration: number
  uptime: number
  default_value?: number
  cooldown?: Cooldown2
}

export interface Cooldown2 {
  name: string
  duration: number
}

export interface Proc {
  name: string
  interval: number
  count: number
}

export interface Gain {
  name: string
  rune?: Rune5
  runic_power?: RunicPower5
}

export interface Rune5 {
  actual: number
  overflow: number
  count: number
}

export interface RunicPower5 {
  actual: number
  overflow: number
  count: number
}

export interface Stat {
  id: number
  spell_name: string
  name: string
  school?: string
  type: string
  num_executes: NumExecutes
  compound_amount: number
  total_execute_time?: TotalExecuteTime
  total_intervals?: TotalIntervals
  children?: Children[]
  portion_aps?: PortionAps2
  portion_apse?: PortionApse2
  portion_amount?: number
  actual_amount?: ActualAmount4
  total_amount?: TotalAmount4
  num_direct_results?: NumDirectResults2
  direct_results?: DirectResults2
  num_ticks?: NumTicks
  num_tick_results?: NumTickResults
  total_tick_time?: TotalTickTime
  num_refreshes?: NumRefreshes
  tick_results?: TickResults
  resource_gain?: ResourceGain
}

export interface NumExecutes {
  sum: number
  count: number
  mean: number
}

export interface TotalExecuteTime {
  sum: number
  count: number
  mean: number
}

export interface TotalIntervals {
  sum: number
  count: number
  mean: number
}

export interface Children {
  id: number
  spell_name: string
  name: string
  type: string
  num_executes: NumExecutes2
  compound_amount: number
  portion_aps: PortionAps
  portion_apse: PortionApse
  portion_amount: number
  actual_amount: ActualAmount
  total_amount: TotalAmount
  total_intervals: TotalIntervals2
  num_direct_results: NumDirectResults
  direct_results: DirectResults
}

export interface NumExecutes2 {
  sum: number
  count: number
  mean: number
}

export interface PortionAps {
  sum: number
  count: number
  mean: number
  min: number
  max: number
}

export interface PortionApse {
  sum: number
  count: number
  mean: number
  min: number
  max: number
}

export interface ActualAmount {
  sum: number
  count: number
  mean: number
  min: number
  max: number
}

export interface TotalAmount {
  sum: number
  count: number
  mean: number
  min: number
  max: number
}

export interface TotalIntervals2 {
  sum: number
  count: number
  mean: number
}

export interface NumDirectResults {
  sum: number
  count: number
  mean: number
}

export interface DirectResults {
  crit: Crit
  hit: Hit
}

export interface Crit {
  actual_amount: ActualAmount2
  avg_actual_amount: AvgActualAmount
  total_amount: TotalAmount2
  fight_actual_amount: FightActualAmount
  fight_total_amount: FightTotalAmount
  overkill_pct: OverkillPct
  count: Count
  pct: number
}

export interface ActualAmount2 {
  sum: number
  count: number
  mean: number
  min: number
  max: number
}

export interface AvgActualAmount {
  sum: number
  count: number
  mean: number
  min: number
  max: number
}

export interface TotalAmount2 {
  sum: number
  count: number
  mean: number
}

export interface FightActualAmount {
  sum: number
  count: number
  mean: number
}

export interface FightTotalAmount {
  sum: number
  count: number
  mean: number
}

export interface OverkillPct {
  sum: number
  count: number
  mean: number
}

export interface Count {
  sum: number
  count: number
  mean: number
  min: number
  max: number
}

export interface Hit {
  actual_amount: ActualAmount3
  avg_actual_amount: AvgActualAmount2
  total_amount: TotalAmount3
  fight_actual_amount: FightActualAmount2
  fight_total_amount: FightTotalAmount2
  overkill_pct: OverkillPct2
  count: Count2
  pct: number
}

export interface ActualAmount3 {
  sum: number
  count: number
  mean: number
  min: number
  max: number
}

export interface AvgActualAmount2 {
  sum: number
  count: number
  mean: number
  min: number
  max: number
}

export interface TotalAmount3 {
  sum: number
  count: number
  mean: number
}

export interface FightActualAmount2 {
  sum: number
  count: number
  mean: number
}

export interface FightTotalAmount2 {
  sum: number
  count: number
  mean: number
}

export interface OverkillPct2 {
  sum: number
  count: number
  mean: number
}

export interface Count2 {
  sum: number
  count: number
  mean: number
  min: number
  max: number
}

export interface PortionAps2 {
  sum: number
  count: number
  mean: number
  min: number
  max: number
}

export interface PortionApse2 {
  sum: number
  count: number
  mean: number
  min: number
  max: number
}

export interface ActualAmount4 {
  sum: number
  count: number
  mean: number
  min: number
  max: number
}

export interface TotalAmount4 {
  sum: number
  count: number
  mean: number
  min: number
  max: number
}

export interface NumDirectResults2 {
  sum: number
  count: number
  mean: number
}

export interface DirectResults2 {
  crit?: Crit2
  hit: Hit2
}

export interface Crit2 {
  actual_amount: ActualAmount5
  avg_actual_amount: AvgActualAmount3
  total_amount: TotalAmount5
  fight_actual_amount: FightActualAmount3
  fight_total_amount: FightTotalAmount3
  overkill_pct: OverkillPct3
  count: Count3
  pct: number
}

export interface ActualAmount5 {
  sum: number
  count: number
  mean: number
  min: number
  max: number
}

export interface AvgActualAmount3 {
  sum: number
  count: number
  mean: number
  min: number
  max: number
}

export interface TotalAmount5 {
  sum: number
  count: number
  mean: number
}

export interface FightActualAmount3 {
  sum: number
  count: number
  mean: number
}

export interface FightTotalAmount3 {
  sum: number
  count: number
  mean: number
}

export interface OverkillPct3 {
  sum: number
  count: number
  mean: number
}

export interface Count3 {
  sum: number
  count: number
  mean: number
  min: number
  max: number
}

export interface Hit2 {
  actual_amount: ActualAmount6
  avg_actual_amount: AvgActualAmount4
  total_amount: TotalAmount6
  fight_actual_amount: FightActualAmount4
  fight_total_amount: FightTotalAmount4
  overkill_pct: OverkillPct4
  count: Count4
  pct: number
}

export interface ActualAmount6 {
  sum: number
  count: number
  mean: number
  min: number
  max: number
}

export interface AvgActualAmount4 {
  sum: number
  count: number
  mean: number
  min: number
  max: number
}

export interface TotalAmount6 {
  sum: number
  count: number
  mean: number
}

export interface FightActualAmount4 {
  sum: number
  count: number
  mean: number
}

export interface FightTotalAmount4 {
  sum: number
  count: number
  mean: number
}

export interface OverkillPct4 {
  sum: number
  count: number
  mean: number
}

export interface Count4 {
  sum: number
  count: number
  mean: number
  min: number
  max: number
}

export interface NumTicks {
  sum: number
  count: number
  mean: number
}

export interface NumTickResults {
  sum: number
  count: number
  mean: number
}

export interface TotalTickTime {
  sum: number
  count: number
  mean: number
}

export interface NumRefreshes {
  sum: number
  count: number
  mean: number
}

export interface TickResults {
  crit: Crit3
  hit: Hit3
}

export interface Crit3 {
  actual_amount: ActualAmount7
  avg_actual_amount: AvgActualAmount5
  total_amount: TotalAmount7
  fight_actual_amount: FightActualAmount5
  fight_total_amount: FightTotalAmount5
  overkill_pct: OverkillPct5
  count: Count5
  pct: number
}

export interface ActualAmount7 {
  sum: number
  count: number
  mean: number
  min: number
  max: number
}

export interface AvgActualAmount5 {
  sum: number
  count: number
  mean: number
  min: number
  max: number
}

export interface TotalAmount7 {
  sum: number
  count: number
  mean: number
}

export interface FightActualAmount5 {
  sum: number
  count: number
  mean: number
}

export interface FightTotalAmount5 {
  sum: number
  count: number
  mean: number
}

export interface OverkillPct5 {
  sum: number
  count: number
  mean: number
}

export interface Count5 {
  sum: number
  count: number
  mean: number
  min: number
  max: number
}

export interface Hit3 {
  actual_amount: ActualAmount8
  avg_actual_amount: AvgActualAmount6
  total_amount: TotalAmount8
  fight_actual_amount: FightActualAmount6
  fight_total_amount: FightTotalAmount6
  overkill_pct: OverkillPct6
  count: Count6
  pct: number
}

export interface ActualAmount8 {
  sum: number
  count: number
  mean: number
  min: number
  max: number
}

export interface AvgActualAmount6 {
  sum: number
  count: number
  mean: number
  min: number
  max: number
}

export interface TotalAmount8 {
  sum: number
  count: number
  mean: number
}

export interface FightActualAmount6 {
  sum: number
  count: number
  mean: number
}

export interface FightTotalAmount6 {
  sum: number
  count: number
  mean: number
}

export interface OverkillPct6 {
  sum: number
  count: number
  mean: number
}

export interface Count6 {
  sum: number
  count: number
  mean: number
  min: number
  max: number
}

export interface ResourceGain {
  name: string
  rune?: Rune6
  runic_power?: RunicPower6
}

export interface Rune6 {
  actual: number
  overflow: number
  count: number
}

export interface RunicPower6 {
  actual: number
  overflow: number
  count: number
}

export interface StatsPets {
  ghoul: Ghoul[]
  dancing_rune_weapon: DancingRuneWeapon[]
  everlasting_bond: EverlastingBond[]
}

export interface Ghoul {
  id: number
  spell_name: string
  name: string
  school: string
  type: string
  resource_gain?: ResourceGain2
  num_executes: NumExecutes3
  compound_amount: number
  total_execute_time: TotalExecuteTime2
  portion_aps: PortionAps3
  portion_apse: PortionApse3
  portion_amount: number
  actual_amount: ActualAmount9
  total_amount: TotalAmount9
  total_intervals: TotalIntervals3
  num_direct_results: NumDirectResults3
  direct_results: DirectResults3
}

export interface ResourceGain2 {
  name: string
  energy: Energy
}

export interface Energy {
  actual: number
  overflow: number
  count: number
}

export interface NumExecutes3 {
  sum: number
  count: number
  mean: number
}

export interface TotalExecuteTime2 {
  sum: number
  count: number
  mean: number
}

export interface PortionAps3 {
  sum: number
  count: number
  mean: number
  min: number
  max: number
}

export interface PortionApse3 {
  sum: number
  count: number
  mean: number
  min: number
  max: number
}

export interface ActualAmount9 {
  sum: number
  count: number
  mean: number
  min: number
  max: number
}

export interface TotalAmount9 {
  sum: number
  count: number
  mean: number
  min: number
  max: number
}

export interface TotalIntervals3 {
  sum: number
  count: number
  mean: number
}

export interface NumDirectResults3 {
  sum: number
  count: number
  mean: number
}

export interface DirectResults3 {
  crit: Crit4
  hit: Hit4
}

export interface Crit4 {
  actual_amount: ActualAmount10
  avg_actual_amount: AvgActualAmount7
  total_amount: TotalAmount10
  fight_actual_amount: FightActualAmount7
  fight_total_amount: FightTotalAmount7
  overkill_pct: OverkillPct7
  count: Count7
  pct: number
}

export interface ActualAmount10 {
  sum: number
  count: number
  mean: number
  min: number
  max: number
}

export interface AvgActualAmount7 {
  sum: number
  count: number
  mean: number
  min: number
  max: number
}

export interface TotalAmount10 {
  sum: number
  count: number
  mean: number
}

export interface FightActualAmount7 {
  sum: number
  count: number
  mean: number
}

export interface FightTotalAmount7 {
  sum: number
  count: number
  mean: number
}

export interface OverkillPct7 {
  sum: number
  count: number
  mean: number
}

export interface Count7 {
  sum: number
  count: number
  mean: number
  min: number
  max: number
}

export interface Hit4 {
  actual_amount: ActualAmount11
  avg_actual_amount: AvgActualAmount8
  total_amount: TotalAmount11
  fight_actual_amount: FightActualAmount8
  fight_total_amount: FightTotalAmount8
  overkill_pct: OverkillPct8
  count: Count8
  pct: number
}

export interface ActualAmount11 {
  sum: number
  count: number
  mean: number
  min: number
  max: number
}

export interface AvgActualAmount8 {
  sum: number
  count: number
  mean: number
  min: number
  max: number
}

export interface TotalAmount11 {
  sum: number
  count: number
  mean: number
}

export interface FightActualAmount8 {
  sum: number
  count: number
  mean: number
}

export interface FightTotalAmount8 {
  sum: number
  count: number
  mean: number
}

export interface OverkillPct8 {
  sum: number
  count: number
  mean: number
}

export interface Count8 {
  sum: number
  count: number
  mean: number
  min: number
  max: number
}

export interface DancingRuneWeapon {
  id: number
  spell_name: string
  name: string
  school: string
  type: string
  num_executes: NumExecutes4
  compound_amount: number
  portion_aps: PortionAps4
  portion_apse: PortionApse4
  portion_amount: number
  actual_amount: ActualAmount12
  total_amount: TotalAmount12
  total_intervals: TotalIntervals4
  num_direct_results?: NumDirectResults4
  direct_results?: DirectResults4
  num_ticks?: NumTicks2
  num_tick_results?: NumTickResults2
  total_tick_time?: TotalTickTime2
  num_refreshes?: NumRefreshes2
  tick_results?: TickResults2
  resource_gain?: ResourceGain3
  total_execute_time?: TotalExecuteTime3
}

export interface NumExecutes4 {
  sum: number
  count: number
  mean: number
}

export interface PortionAps4 {
  sum: number
  count: number
  mean: number
  min: number
  max: number
}

export interface PortionApse4 {
  sum: number
  count: number
  mean: number
  min: number
  max: number
}

export interface ActualAmount12 {
  sum: number
  count: number
  mean: number
  min: number
  max: number
}

export interface TotalAmount12 {
  sum: number
  count: number
  mean: number
  min: number
  max: number
}

export interface TotalIntervals4 {
  sum: number
  count: number
  mean: number
}

export interface NumDirectResults4 {
  sum: number
  count: number
  mean: number
}

export interface DirectResults4 {
  crit: Crit5
  hit: Hit5
}

export interface Crit5 {
  actual_amount: ActualAmount13
  avg_actual_amount: AvgActualAmount9
  total_amount: TotalAmount13
  fight_actual_amount: FightActualAmount9
  fight_total_amount: FightTotalAmount9
  overkill_pct: OverkillPct9
  count: Count9
  pct: number
}

export interface ActualAmount13 {
  sum: number
  count: number
  mean: number
  min: number
  max: number
}

export interface AvgActualAmount9 {
  sum: number
  count: number
  mean: number
  min: number
  max: number
}

export interface TotalAmount13 {
  sum: number
  count: number
  mean: number
}

export interface FightActualAmount9 {
  sum: number
  count: number
  mean: number
}

export interface FightTotalAmount9 {
  sum: number
  count: number
  mean: number
}

export interface OverkillPct9 {
  sum: number
  count: number
  mean: number
}

export interface Count9 {
  sum: number
  count: number
  mean: number
  min: number
  max: number
}

export interface Hit5 {
  actual_amount: ActualAmount14
  avg_actual_amount: AvgActualAmount10
  total_amount: TotalAmount14
  fight_actual_amount: FightActualAmount10
  fight_total_amount: FightTotalAmount10
  overkill_pct: OverkillPct10
  count: Count10
  pct: number
}

export interface ActualAmount14 {
  sum: number
  count: number
  mean: number
  min: number
  max: number
}

export interface AvgActualAmount10 {
  sum: number
  count: number
  mean: number
  min: number
  max: number
}

export interface TotalAmount14 {
  sum: number
  count: number
  mean: number
}

export interface FightActualAmount10 {
  sum: number
  count: number
  mean: number
}

export interface FightTotalAmount10 {
  sum: number
  count: number
  mean: number
}

export interface OverkillPct10 {
  sum: number
  count: number
  mean: number
}

export interface Count10 {
  sum: number
  count: number
  mean: number
  min: number
  max: number
}

export interface NumTicks2 {
  sum: number
  count: number
  mean: number
}

export interface NumTickResults2 {
  sum: number
  count: number
  mean: number
}

export interface TotalTickTime2 {
  sum: number
  count: number
  mean: number
}

export interface NumRefreshes2 {
  sum: number
  count: number
  mean: number
}

export interface TickResults2 {
  crit: Crit6
  hit: Hit6
}

export interface Crit6 {
  actual_amount: ActualAmount15
  avg_actual_amount: AvgActualAmount11
  total_amount: TotalAmount15
  fight_actual_amount: FightActualAmount11
  fight_total_amount: FightTotalAmount11
  overkill_pct: OverkillPct11
  count: Count11
  pct: number
}

export interface ActualAmount15 {
  sum: number
  count: number
  mean: number
  min: number
  max: number
}

export interface AvgActualAmount11 {
  sum: number
  count: number
  mean: number
  min: number
  max: number
}

export interface TotalAmount15 {
  sum: number
  count: number
  mean: number
}

export interface FightActualAmount11 {
  sum: number
  count: number
  mean: number
}

export interface FightTotalAmount11 {
  sum: number
  count: number
  mean: number
}

export interface OverkillPct11 {
  sum: number
  count: number
  mean: number
}

export interface Count11 {
  sum: number
  count: number
  mean: number
  min: number
  max: number
}

export interface Hit6 {
  actual_amount: ActualAmount16
  avg_actual_amount: AvgActualAmount12
  total_amount: TotalAmount16
  fight_actual_amount: FightActualAmount12
  fight_total_amount: FightTotalAmount12
  overkill_pct: OverkillPct12
  count: Count12
  pct: number
}

export interface ActualAmount16 {
  sum: number
  count: number
  mean: number
  min: number
  max: number
}

export interface AvgActualAmount12 {
  sum: number
  count: number
  mean: number
  min: number
  max: number
}

export interface TotalAmount16 {
  sum: number
  count: number
  mean: number
}

export interface FightActualAmount12 {
  sum: number
  count: number
  mean: number
}

export interface FightTotalAmount12 {
  sum: number
  count: number
  mean: number
}

export interface OverkillPct12 {
  sum: number
  count: number
  mean: number
}

export interface Count12 {
  sum: number
  count: number
  mean: number
  min: number
  max: number
}

export interface ResourceGain3 {
  name: string
  rune?: Rune7
  runic_power?: RunicPower7
}

export interface Rune7 {
  actual: number
  overflow: number
  count: number
}

export interface RunicPower7 {
  actual: number
  overflow: number
  count: number
}

export interface TotalExecuteTime3 {
  sum: number
  count: number
  mean: number
}

export interface EverlastingBond {
  id: number
  spell_name: string
  name: string
  school: string
  type: string
  num_executes: NumExecutes5
  compound_amount: number
  portion_aps: PortionAps5
  portion_apse: PortionApse5
  portion_amount: number
  actual_amount: ActualAmount17
  total_amount: TotalAmount17
  total_intervals: TotalIntervals5
  num_direct_results?: NumDirectResults5
  direct_results?: DirectResults5
  num_ticks?: NumTicks3
  num_tick_results?: NumTickResults3
  total_tick_time?: TotalTickTime3
  num_refreshes?: NumRefreshes3
  tick_results?: TickResults3
  resource_gain?: ResourceGain4
  total_execute_time?: TotalExecuteTime4
}

export interface NumExecutes5 {
  sum: number
  count: number
  mean: number
}

export interface PortionAps5 {
  sum: number
  count: number
  mean: number
  min: number
  max: number
}

export interface PortionApse5 {
  sum: number
  count: number
  mean: number
  min: number
  max: number
}

export interface ActualAmount17 {
  sum: number
  count: number
  mean: number
  min: number
  max: number
}

export interface TotalAmount17 {
  sum: number
  count: number
  mean: number
  min: number
  max: number
}

export interface TotalIntervals5 {
  sum: number
  count: number
  mean: number
}

export interface NumDirectResults5 {
  sum: number
  count: number
  mean: number
}

export interface DirectResults5 {
  crit: Crit7
  hit: Hit7
}

export interface Crit7 {
  actual_amount: ActualAmount18
  avg_actual_amount: AvgActualAmount13
  total_amount: TotalAmount18
  fight_actual_amount: FightActualAmount13
  fight_total_amount: FightTotalAmount13
  overkill_pct: OverkillPct13
  count: Count13
  pct: number
}

export interface ActualAmount18 {
  sum: number
  count: number
  mean: number
  min: number
  max: number
}

export interface AvgActualAmount13 {
  sum: number
  count: number
  mean: number
  min: number
  max: number
}

export interface TotalAmount18 {
  sum: number
  count: number
  mean: number
}

export interface FightActualAmount13 {
  sum: number
  count: number
  mean: number
}

export interface FightTotalAmount13 {
  sum: number
  count: number
  mean: number
}

export interface OverkillPct13 {
  sum: number
  count: number
  mean: number
}

export interface Count13 {
  sum: number
  count: number
  mean: number
  min: number
  max: number
}

export interface Hit7 {
  actual_amount: ActualAmount19
  avg_actual_amount: AvgActualAmount14
  total_amount: TotalAmount19
  fight_actual_amount: FightActualAmount14
  fight_total_amount: FightTotalAmount14
  overkill_pct: OverkillPct14
  count: Count14
  pct: number
}

export interface ActualAmount19 {
  sum: number
  count: number
  mean: number
  min: number
  max: number
}

export interface AvgActualAmount14 {
  sum: number
  count: number
  mean: number
  min: number
  max: number
}

export interface TotalAmount19 {
  sum: number
  count: number
  mean: number
}

export interface FightActualAmount14 {
  sum: number
  count: number
  mean: number
}

export interface FightTotalAmount14 {
  sum: number
  count: number
  mean: number
}

export interface OverkillPct14 {
  sum: number
  count: number
  mean: number
}

export interface Count14 {
  sum: number
  count: number
  mean: number
  min: number
  max: number
}

export interface NumTicks3 {
  sum: number
  count: number
  mean: number
}

export interface NumTickResults3 {
  sum: number
  count: number
  mean: number
}

export interface TotalTickTime3 {
  sum: number
  count: number
  mean: number
}

export interface NumRefreshes3 {
  sum: number
  count: number
  mean: number
}

export interface TickResults3 {
  crit: Crit8
  hit: Hit8
}

export interface Crit8 {
  actual_amount: ActualAmount20
  avg_actual_amount: AvgActualAmount15
  total_amount: TotalAmount20
  fight_actual_amount: FightActualAmount15
  fight_total_amount: FightTotalAmount15
  overkill_pct: OverkillPct15
  count: Count15
  pct: number
}

export interface ActualAmount20 {
  sum: number
  count: number
  mean: number
  min: number
  max: number
}

export interface AvgActualAmount15 {
  sum: number
  count: number
  mean: number
  min: number
  max: number
}

export interface TotalAmount20 {
  sum: number
  count: number
  mean: number
}

export interface FightActualAmount15 {
  sum: number
  count: number
  mean: number
}

export interface FightTotalAmount15 {
  sum: number
  count: number
  mean: number
}

export interface OverkillPct15 {
  sum: number
  count: number
  mean: number
}

export interface Count15 {
  sum: number
  count: number
  mean: number
  min: number
  max: number
}

export interface Hit8 {
  actual_amount: ActualAmount21
  avg_actual_amount: AvgActualAmount16
  total_amount: TotalAmount21
  fight_actual_amount: FightActualAmount16
  fight_total_amount: FightTotalAmount16
  overkill_pct: OverkillPct16
  count: Count16
  pct: number
}

export interface ActualAmount21 {
  sum: number
  count: number
  mean: number
  min: number
  max: number
}

export interface AvgActualAmount16 {
  sum: number
  count: number
  mean: number
  min: number
  max: number
}

export interface TotalAmount21 {
  sum: number
  count: number
  mean: number
}

export interface FightActualAmount16 {
  sum: number
  count: number
  mean: number
}

export interface FightTotalAmount16 {
  sum: number
  count: number
  mean: number
}

export interface OverkillPct16 {
  sum: number
  count: number
  mean: number
}

export interface Count16 {
  sum: number
  count: number
  mean: number
  min: number
  max: number
}

export interface ResourceGain4 {
  name: string
  rune?: Rune8
  runic_power?: RunicPower8
}

export interface Rune8 {
  actual: number
  overflow: number
  count: number
}

export interface RunicPower8 {
  actual: number
  overflow: number
  count: number
}

export interface TotalExecuteTime4 {
  sum: number
  count: number
  mean: number
}

export interface Gear {
  head: Head
  neck: Neck
  shoulders: Shoulders
  chest: Chest
  waist: Waist
  legs: Legs
  feet: Feet
  wrists: Wrists
  hands: Hands
  finger1: Finger1
  finger2: Finger2
  trinket1: Trinket1
  trinket2: Trinket2
  back: Back
  main_hand: MainHand
}

export interface Head {
  name: string
  encoded_item: string
  ilevel: number
  stamina: number
  haste_rating: number
  versatility_rating: number
  strint: number
}

export interface Neck {
  name: string
  encoded_item: string
  ilevel: number
  stamina: number
  haste_rating: number
  versatility_rating: number
}

export interface Shoulders {
  name: string
  encoded_item: string
  ilevel: number
  stamina: number
  crit_rating: number
  haste_rating: number
  strint: number
}

export interface Chest {
  name: string
  encoded_item: string
  ilevel: number
  stamina: number
  crit_rating: number
  mastery_rating: number
  strint: number
}

export interface Waist {
  name: string
  encoded_item: string
  ilevel: number
  stamina: number
  crit_rating: number
  haste_rating: number
  strint: number
}

export interface Legs {
  name: string
  encoded_item: string
  ilevel: number
  stamina: number
  haste_rating: number
  mastery_rating: number
  strint: number
}

export interface Feet {
  name: string
  encoded_item: string
  ilevel: number
  stamina: number
  versatility_rating: number
  mastery_rating: number
  strint: number
}

export interface Wrists {
  name: string
  encoded_item: string
  ilevel: number
  stamina: number
  crit_rating: number
  mastery_rating: number
  strint: number
}

export interface Hands {
  name: string
  encoded_item: string
  ilevel: number
  stamina: number
  crit_rating: number
  mastery_rating: number
  strint: number
}

export interface Finger1 {
  name: string
  encoded_item: string
  ilevel: number
  stamina: number
  crit_rating: number
  mastery_rating: number
}

export interface Finger2 {
  name: string
  encoded_item: string
  ilevel: number
  stamina: number
  versatility_rating: number
  mastery_rating: number
}

export interface Trinket1 {
  name: string
  encoded_item: string
  ilevel: number
  stragiint: number
}

export interface Trinket2 {
  name: string
  encoded_item: string
  ilevel: number
  strength: number
}

export interface Back {
  name: string
  encoded_item: string
  ilevel: number
  stamina: number
  stragiint: number
  haste_rating: number
  versatility_rating: number
}

export interface MainHand {
  name: string
  encoded_item: string
  ilevel: number
  strength: number
  stamina: number
  haste_rating: number
  versatility_rating: number
}

export interface Custom {}

export interface Statistics {
  elapsed_cpu_seconds: number
  elapsed_time_seconds: number
  init_time_seconds: number
  merge_time_seconds: number
  analyze_time_seconds: number
  simulation_length: SimulationLength
  total_events_processed: number
  raid_dps: RaidDps
  raid_aps: RaidAps
  total_dmg: TotalDmg
  total_absorb: TotalAbsorb
}

export interface SimulationLength {
  sum: number
  count: number
  mean: number
  min: number
  max: number
  median: number
  variance: number
  std_dev: number
  mean_variance: number
  mean_std_dev: number
}

export interface RaidDps {
  sum: number
  count: number
  mean: number
}

export interface RaidAps {
  sum: number
  count: number
  mean: number
}

export interface TotalDmg {
  sum: number
  count: number
  mean: number
}

export interface TotalAbsorb {
  sum: number
  count: number
  mean: number
}

export interface RaidEvent {
  name: string
  type: string
  first: number
  last: number
  cooldown: number
  cooldown_min: number
  cooldown_max: number
}

export interface SimAura {
  name: string
  spell_name: string
  spell_school: string
  spell: number
  start_count: number
  duration: number
  uptime: number
  default_value: number
  cooldown?: Cooldown3
}

export interface Cooldown3 {
  name: string
  duration: number
}

export interface Simbot {
  title: string
  simId: string
  simcVersion: string
  timeLimit: number
  concurrency: number
  isConcurrencyEligible: boolean
  userConcurrency: number
  rateLimitKey: string
  smart: boolean
  smartHighPrecision: boolean
  publicTitle: string
  simType: string
  player: string
  charClass: string
  spec: string
  fightStyle: string
  frontendHost: string
  totalIterations: number
  userLevel: string
  numProfilesets: number
  jobSubmitted: number
  chunkSizes: number[]
  attempts: number
  numChunks: number
  stage: number
  numStages: number
  stageTarget: number
  stageActors: number
  jobFirstStart: number
  host: string
  hostStart: number
  meta: Meta
  parentSimId: string
  parentJobId: string
  fromFlightmaster: boolean
  flightChunk: boolean
  saveHtml: boolean
  source: string
  input: string
  date: number
  skippedHtml: boolean
  mem: Mem
  flightmaster: Flightmaster
  hasCsv: boolean
}

export interface Meta {
  title: string
  type: string
  source: string
  origin: string
  simcVersion: string
  iterations: string
  fightStyle: string
  fightLength: number
  enemyCount: number
  enemyType: string
  potion: string
  food: string
  flask: string
  augmentation: string
  optimalRaid: boolean
  bloodlust: boolean
  arcaneIntellect: boolean
  fortitude: boolean
  battleShout: boolean
  mysticTouch: boolean
  chaosBrand: boolean
  windfury: boolean
  markOfTheWild: boolean
  enableDominationShards: boolean
  soleahStatType: string
  ocularGlandUptime: number
  enableRuneWords: boolean
  temporaryEnchant: string
  stoneLegionHeraldryInParty: number
  cabalistsHymnalInParty: number
  disableIqdExecute: boolean
  iqdStatFailChance: number
  unboundChangelingStatType: string
  bleeding: boolean
  reportDetails: boolean
  ptr: boolean
  frontendHost: string
  frontendVersion: string
  rawFormData: RawFormData
  customApl: boolean
  expertMode: boolean
  nonMaxLevel: boolean
  race: string
  charClass: string
  faction: string
  spec: string
  player: string
  totalIterations: number
}

export interface RawFormData {
  type: string
  text: string
  baseActorName: string
  reportName: string
  armory: Armory
  sendEmail: boolean
  character: Character
  spec: string
  simcItems: SimcItems
  gearsets: any[]
  talents: any
  talentSets: any[]
  droptimizerItems: any[]
  simcVersion: string
  iterations: string
  smartHighPrecision: boolean
  fightStyle: string
  fightLength: number
  enemyCount: number
  enemyType: string
  potion: string
  food: string
  flask: string
  augmentation: string
  bloodlust: boolean
  arcaneIntellect: boolean
  fortitude: boolean
  battleShout: boolean
  mysticTouch: boolean
  chaosBrand: boolean
  bleeding: boolean
  windfury: boolean
  markOfTheWild: boolean
  reportDetails: boolean
  apl: string
  ptr: boolean
  frontendHost: string
  frontendVersion: string
  enableDominationShards: boolean
  soleahStatType: string
  ocularGlandUptime: number
  enableRuneWords: boolean
  temporaryEnchant: string
  stoneLegionHeraldryInParty: number
  cabalistsHymnalInParty: number
  disableIqdExecute: boolean
  iqdStatFailChance: number
  unboundChangelingStatType: string
  nazjatar: boolean
  worldveinAllies: number
  loyalToTheEndAllies: number
  covenantChance: number
  undulatingTides: number
  nyalotha: boolean
  aberration: boolean
  voidRitual: boolean
  surgingVitality: number
  symbioticPresence: number
}

export interface Armory {
  region: string
  realm: string
  name: string
}

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
  changed: boolean
}

export interface Guild {
  name: string
  realm: string
  achievementPoints: any
  battlegroup: any
  emblem: any
  members: any
}

export interface Items {
  averageItemLevel: number
  averageItemLevelEquipped: number
  back: Back2
  chest: Chest2
  feet: Feet2
  finger1: Finger12
  finger2: Finger22
  hands: Hands2
  head: Head2
  legs: Legs2
  mainHand: MainHand2
  neck: Neck2
  offHand: any
  shirt: any
  shoulder: Shoulder
  tabard: any
  trinket1: Trinket12
  trinket2: Trinket22
  waist: Waist2
  wrist: Wrist
}

export interface Back2 {
  id: number
  name: string
  names: Names
  icon: string
  quality: number
  itemClass: number
  itemSubClass: number
  inventoryType: number
  itemLevel: number
  stats: Stat2[]
  expansion: number
  baseItemLevel: number
  socketInfo: SocketInfo
  bonusLists: number[]
  context: number
  tooltipParams: TooltipParams
  craftedStats: any[]
  gem_id: string
  enchant_id: number
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

export interface Stat2 {
  id: number
  alloc: number
}

export interface SocketInfo {}

export interface TooltipParams {
  enchant: number
}

export interface Chest2 {
  id: number
  name: string
  names: Names2
  icon: string
  quality: number
  itemClass: number
  itemSubClass: number
  inventoryType: number
  itemLevel: number
  itemSetId: number
  allowableClasses: number[]
  specs: number[]
  stats: Stat3[]
  sources: Source[]
  expansion: number
  baseItemLevel: number
  socketInfo: SocketInfo2
  upgrade: Upgrade
  bonusLists: number[]
  context: number
  tooltipParams: TooltipParams2
  craftedStats: any[]
  gem_id: string
  enchant_id: number
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

export interface Stat3 {
  id: number
  alloc: number
}

export interface Source {
  instanceId: number
  encounterId: number
}

export interface SocketInfo2 {}

export interface Upgrade {
  level: number
  max: number
  group: number
  bonusId: number
  currency: Currency
  itemLevel: number
}

export interface Currency {
  amount: number
  name: string
  id: number
  icon: string
}

export interface TooltipParams2 {
  enchant: number
}

export interface Feet2 {
  id: number
  name: string
  names: Names3
  icon: string
  quality: number
  itemClass: number
  itemSubClass: number
  inventoryType: number
  itemLevel: number
  stats: Stat4[]
  bonusLists: number[]
  chanceBonusList: number[]
  sources: Source2[]
  expansion: number
  baseItemLevel: number
  socketInfo: SocketInfo3
  upgrade: Upgrade2
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

export interface Stat4 {
  id: number
  alloc: number
}

export interface Source2 {
  instanceId: number
  encounterId: number
}

export interface SocketInfo3 {}

export interface Upgrade2 {
  level: number
  max: number
  group: number
}

export interface TooltipParams3 {}

export interface Finger12 {
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
  stats: Stat5[]
  sources: Source3[]
  expansion: number
  baseItemLevel: number
  socketInfo: SocketInfo4
  upgrade: Upgrade3
  bonusLists: number[]
  context: number
  tooltipParams: TooltipParams4
  craftedStats: any[]
  gem_id: string
  enchant_id: number
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

export interface Stat5 {
  id: number
  alloc: number
}

export interface Source3 {
  instanceId: number
  encounterId: number
}

export interface SocketInfo4 {}

export interface Upgrade3 {
  level: number
  max: number
  group: number
}

export interface TooltipParams4 {
  enchant: number
}

export interface Finger22 {
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
  stats: Stat6[]
  sources: Source4[]
  expansion: number
  baseItemLevel: number
  socketInfo: SocketInfo5
  upgrade: Upgrade4
  bonusLists: number[]
  context: number
  tooltipParams: TooltipParams5
  craftedStats: any[]
  gem_id: string
  enchant_id: number
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

export interface Stat6 {
  id: number
  alloc: number
}

export interface Source4 {
  instanceId: number
  encounterId: number
}

export interface SocketInfo5 {}

export interface Upgrade4 {
  level: number
  max: number
  group: number
}

export interface TooltipParams5 {
  enchant: number
}

export interface Hands2 {
  id: number
  name: string
  names: Names6
  icon: string
  quality: number
  itemClass: number
  itemSubClass: number
  inventoryType: number
  itemLevel: number
  itemSetId: number
  allowableClasses: number[]
  specs: number[]
  stats: Stat7[]
  sources: Source5[]
  expansion: number
  baseItemLevel: number
  socketInfo: SocketInfo6
  upgrade: Upgrade5
  bonusLists: number[]
  context: number
  tooltipParams: TooltipParams6
  craftedStats: any[]
  gem_id: string
  enchant_id: number
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

export interface Stat7 {
  id: number
  alloc: number
}

export interface Source5 {
  instanceId: number
  encounterId: number
}

export interface SocketInfo6 {}

export interface Upgrade5 {
  level: number
  max: number
  group: number
}

export interface TooltipParams6 {
  enchant: number
}

export interface Head2 {
  id: number
  name: string
  names: Names7
  icon: string
  quality: number
  itemClass: number
  itemSubClass: number
  inventoryType: number
  itemLevel: number
  stats: Stat8[]
  sources: Source6[]
  expansion: number
  baseItemLevel: number
  socketInfo: SocketInfo7
  upgrade: Upgrade6
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

export interface Stat8 {
  id: number
  alloc: number
}

export interface Source6 {
  instanceId: number
  encounterId: number
}

export interface SocketInfo7 {}

export interface Upgrade6 {
  level: number
  max: number
  group: number
}

export interface TooltipParams7 {}

export interface Legs2 {
  id: number
  name: string
  names: Names8
  icon: string
  quality: number
  itemClass: number
  itemSubClass: number
  inventoryType: number
  itemLevel: number
  itemSetId: number
  allowableClasses: number[]
  specs: number[]
  stats: Stat9[]
  sources: Source7[]
  expansion: number
  baseItemLevel: number
  socketInfo: SocketInfo8
  upgrade: Upgrade7
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

export interface Stat9 {
  id: number
  alloc: number
}

export interface Source7 {
  instanceId: number
  encounterId: number
}

export interface SocketInfo8 {}

export interface Upgrade7 {
  level: number
  max: number
  group: number
}

export interface TooltipParams8 {}

export interface MainHand2 {
  id: number
  name: string
  names: Names9
  icon: string
  quality: number
  itemClass: number
  itemSubClass: number
  inventoryType: number
  itemLevel: number
  stats: Stat10[]
  sources: Source8[]
  expansion: number
  baseItemLevel: number
  socketInfo: SocketInfo9
  upgrade: Upgrade8
  bonusLists: number[]
  context: number
  tooltipParams: TooltipParams9
  craftedStats: any[]
  gem_id: string
  enchant_id: number
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

export interface Stat10 {
  id: number
  alloc: number
}

export interface Source8 {
  instanceId: number
  encounterId: number
}

export interface SocketInfo9 {}

export interface Upgrade8 {
  level: number
  max: number
  group: number
}

export interface TooltipParams9 {
  enchant: number
}

export interface Neck2 {
  id: number
  name: string
  names: Names10
  icon: string
  quality: number
  itemClass: number
  itemSubClass: number
  inventoryType: number
  itemLevel: number
  itemLimit: ItemLimit
  stats: Stat11[]
  expansion: number
  baseItemLevel: number
  effects: Effect[]
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

export interface ItemLimit {
  category: number
  quantity: number
}

export interface Stat11 {
  id: number
  alloc: number
}

export interface Effect {
  id: number
  index: number
  spell: Spell
}

export interface Spell {
  id: number
  name: string
  icon: string
}

export interface SocketInfo10 {
  PRISMATIC: Prismatic
}

export interface Prismatic {
  type: string
  staticSlots: number
  dynamicSlots: number
  filled: number
  total: number
  gems: Gem[]
  gemIds: number[]
  hasUnique: boolean
}

export interface Gem {
  shortName: string
  name: string
  id: number
  quality: number
  icon: string
  group: string
  type: string
  preferred: Preferred
  stat: Stat12
}

export interface Preferred {
  roles: string[]
}

export interface Stat12 {
  type: string
  amount: number
}

export interface TooltipParams10 {
  gem0: number
}

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
  stats: Stat13[]
  sources: Source9[]
  expansion: number
  baseItemLevel: number
  socketInfo: SocketInfo11
  upgrade: Upgrade9
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

export interface Stat13 {
  id: number
  alloc: number
}

export interface Source9 {
  instanceId: number
  encounterId: number
}

export interface SocketInfo11 {}

export interface Upgrade9 {
  level: number
  max: number
  group: number
  bonusId: number
  currency: Currency2
  itemLevel: number
}

export interface Currency2 {
  amount: number
  name: string
  id: number
  icon: string
}

export interface TooltipParams11 {}

export interface Trinket12 {
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
  stats: Stat14[]
  sources: Source10[]
  expansion: number
  baseItemLevel: number
  socketInfo: SocketInfo12
  upgrade: Upgrade10
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

export interface Stat14 {
  id: number
  alloc: number
}

export interface Source10 {
  instanceId: number
  encounterId: number
}

export interface SocketInfo12 {}

export interface Upgrade10 {
  level: number
  max: number
  group: number
  bonusId: number
  currency: Currency3
  itemLevel: number
}

export interface Currency3 {
  amount: number
  name: string
  id: number
  icon: string
}

export interface TooltipParams12 {}

export interface Trinket22 {
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
  stats: Stat15[]
  sources: Source11[]
  expansion: number
  baseItemLevel: number
  socketInfo: SocketInfo13
  upgrade: Upgrade11
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

export interface Stat15 {
  id: number
  alloc: number
}

export interface Source11 {
  instanceId: number
  encounterId: number
}

export interface SocketInfo13 {}

export interface Upgrade11 {
  level: number
  max: number
  group: number
  bonusId: number
  currency: Currency4
  itemLevel: number
}

export interface Currency4 {
  amount: number
  name: string
  id: number
  icon: string
}

export interface TooltipParams13 {}

export interface Waist2 {
  id: number
  name: string
  names: Names14
  icon: string
  quality: number
  itemClass: number
  itemSubClass: number
  inventoryType: number
  itemLevel: number
  stats: Stat16[]
  bonusLists: number[]
  chanceBonusList: number[]
  sources: Source12[]
  expansion: number
  baseItemLevel: number
  socketInfo: SocketInfo14
  upgrade: Upgrade12
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

export interface Stat16 {
  id: number
  alloc: number
}

export interface Source12 {
  instanceId: number
  encounterId: number
}

export interface SocketInfo14 {}

export interface Upgrade12 {
  level: number
  max: number
  group: number
  bonusId: number
  currency: Currency5
  itemLevel: number
}

export interface Currency5 {
  amount: number
  name: string
  id: number
  icon: string
}

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
  itemLimit: ItemLimit2
  stats: Stat17[]
  expansion: number
  baseItemLevel: number
  effects: Effect2[]
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

export interface ItemLimit2 {
  category: number
  quantity: number
}

export interface Stat17 {
  id: number
  alloc: number
}

export interface Effect2 {
  id: number
  index: number
  spell: Spell2
}

export interface Spell2 {
  id: number
  name: string
  icon: string
}

export interface SocketInfo15 {
  PRISMATIC: Prismatic2
}

export interface Prismatic2 {
  type: string
  staticSlots: number
  dynamicSlots: number
  filled: number
  total: number
  gems: Gem2[]
  gemIds: number[]
  hasUnique: boolean
}

export interface Gem2 {
  shortName: string
  name: string
  id: number
  quality: number
  icon: string
  group: string
  type: string
  preferred: Preferred2
  stat: Stat18
}

export interface Preferred2 {
  roles: string[]
}

export interface Stat18 {
  type: string
  amount: number
}

export interface TooltipParams15 {
  gem0: number
}

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
  guild: Guild2
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
  statistics: Statistics2
  mythic_keystone_profile: MythicKeystoneProfile
  equipment: Equipment
  appearance: Appearance
  collections: Collections
  active_title: ActiveTitle
  reputations: Reputations
  quests: Quests
  achievements_statistics: AchievementsStatistics
  professions: Professions
  covenant_progress: CovenantProgress
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

export interface Guild2 {
  key: Key5
  name: string
  id: number
  realm: Realm2
  faction: Faction2
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

export interface Faction2 {
  type: string
  name: string
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

export interface Statistics2 {
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

export interface ActiveTitle {
  key: Key7
  name: string
  id: number
  display_string: string
}

export interface Key7 {
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

export interface CovenantProgress {
  chosen_covenant: ChosenCovenant
  renown_level: number
  soulbinds: Soulbinds
}

export interface ChosenCovenant {
  key: Key8
  name: string
  id: number
}

export interface Key8 {
  href: string
}

export interface Soulbinds {
  href: string
}

export interface Equipment2 {
  _links: Links2
  character: Character2
  equipped_items: EquippedItem[]
  equipped_item_sets: EquippedItemSet[]
}

export interface Links2 {
  self: Self2
}

export interface Self2 {
  href: string
}

export interface Character2 {
  key: Key9
  name: string
  id: number
  realm: Realm3
}

export interface Key9 {
  href: string
}

export interface Realm3 {
  key: Key10
  name: string
  id: number
  slug: string
}

export interface Key10 {
  href: string
}

export interface EquippedItem {
  item: Item
  slot: Slot
  quantity: number
  context: number
  bonus_list: number[]
  quality: Quality
  name: string
  modified_appearance_id?: number
  media: Media2
  item_class: ItemClass
  item_subclass: ItemSubclass
  inventory_type: InventoryType
  binding: Binding
  armor?: Armor
  stats: Stat19[]
  sell_price?: SellPrice
  requirements?: Requirements
  level: Level2
  transmog?: Transmog
  durability?: Durability
  name_description?: NameDescription
  sockets?: Socket[]
  limit_category?: string
  spells?: Spell3[]
  description?: string
  is_subclass_hidden?: boolean
  enchantments?: Enchantment[]
  set?: Set
  unique_equipped?: string
  weapon?: Weapon
}

export interface Item {
  key: Key11
  id: number
}

export interface Key11 {
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
  key: Key12
  id: number
}

export interface Key12 {
  href: string
}

export interface ItemClass {
  key: Key13
  name: string
  id: number
}

export interface Key13 {
  href: string
}

export interface ItemSubclass {
  key: Key14
  name: string
  id: number
}

export interface Key14 {
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

export interface Stat19 {
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
  key: Key15
  name: string
  id: number
}

export interface Key15 {
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
  key: Key16
  name: string
  id: number
}

export interface Key16 {
  href: string
}

export interface Durability {
  value: number
  display_string: string
}

export interface NameDescription {
  display_string: string
  color: Color3
}

export interface Color3 {
  r: number
  g: number
  b: number
  a: number
}

export interface Socket {
  socket_type: SocketType
  item: Item3
  display_string: string
  media: Media3
}

export interface SocketType {
  type: string
  name: string
}

export interface Item3 {
  key: Key17
  name: string
  id: number
}

export interface Key17 {
  href: string
}

export interface Media3 {
  key: Key18
  id: number
}

export interface Key18 {
  href: string
}

export interface Spell3 {
  spell: Spell4
  description: string
  display_color?: DisplayColor
}

export interface Spell4 {
  key: Key19
  name: string
  id: number
}

export interface Key19 {
  href: string
}

export interface DisplayColor {
  r: number
  g: number
  b: number
  a: number
}

export interface Enchantment {
  display_string: string
  source_item?: SourceItem
  enchantment_id: number
  enchantment_slot: EnchantmentSlot
}

export interface SourceItem {
  key: Key20
  name: string
  id: number
}

export interface Key20 {
  href: string
}

export interface EnchantmentSlot {
  id: number
  type: string
}

export interface Set {
  item_set: ItemSet
  items: Item4[]
  effects: Effect3[]
  legacy: string
  display_string: string
}

export interface ItemSet {
  key: Key21
  name: string
  id: number
}

export interface Key21 {
  href: string
}

export interface Item4 {
  item: Item5
  is_equipped?: boolean
}

export interface Item5 {
  key: Key22
  name: string
  id: number
}

export interface Key22 {
  href: string
}

export interface Effect3 {
  display_string: string
  required_count: number
}

export interface Weapon {
  damage: Damage
  attack_speed: AttackSpeed
  dps: Dps2
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

export interface Dps2 {
  value: number
  display_string: string
}

export interface EquippedItemSet {
  item_set: ItemSet2
  items: Item6[]
  effects: Effect4[]
  legacy: string
  display_string: string
}

export interface ItemSet2 {
  key: Key23
  name: string
  id: number
}

export interface Key23 {
  href: string
}

export interface Item6 {
  item: Item7
  is_equipped?: boolean
}

export interface Item7 {
  key: Key24
  name: string
  id: number
}

export interface Key24 {
  href: string
}

export interface Effect4 {
  display_string: string
  required_count: number
}

export interface Specializations2 {
  _links: Links3
  specializations: Specialization[]
  active_specialization: ActiveSpecialization
  character: Character3
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
  key: Key25
  name: string
  id: number
}

export interface Key25 {
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
  key: Key26
  name: string
  id: number
}

export interface Key26 {
  href: string
}

export interface SpellTooltip {
  spell: Spell5
  description?: string
  cast_time: string
  power_cost?: string
  range?: string
  cooldown?: string
}

export interface Spell5 {
  key: Key27
  name: string
  id: number
}

export interface Key27 {
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
  key: Key28
  name: string
  id: number
}

export interface Key28 {
  href: string
}

export interface SpellTooltip2 {
  spell: Spell6
  description: string
  cast_time: string
  power_cost?: string
  range?: string
  cooldown?: string
}

export interface Spell6 {
  key: Key29
  name: string
  id: number
}

export interface Key29 {
  href: string
}

export interface ActiveSpecialization {
  key: Key30
  name: string
  id: number
}

export interface Key30 {
  href: string
}

export interface Character3 {
  key: Key31
  name: string
  id: number
  realm: Realm4
}

export interface Key31 {
  href: string
}

export interface Realm4 {
  key: Key32
  name: string
  id: number
  slug: string
}

export interface Key32 {
  href: string
}

export interface SimcItems {}

export interface Mem {
  max: number
  samples: number[]
}

export interface Flightmaster {
  stages: Stage[]
  iterationsActual: number
  iterationsEstimate: number
  iterationsEstimateDiff: number
  duration: number
}

export interface Stage {
  stage: number
  actors: number
  totalActors: number
  profilesets: number
  targetError: number
  stats: Stats2
  stageDuration: number
  sims: string[]
  iterations: number
}

export interface Stats2 {
  timing: Timing
}

export interface Timing {
  chunk_start_delay: number[]
}

