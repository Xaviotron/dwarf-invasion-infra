export interface SimReport {
    version: string;
    report_version: string;
    ptr_enabled: number;
    beta_enabled: number;
    build_date: string;
    build_time: string;
    timestamp: number;
    git_revision: string;
    git_branch: string;
    sim: Sim;
    notifications: string[];
    simbot: Simbot;
}

interface Sim {
    options: Options;
    overrides: Overrides;
    players: Player[];
    statistics: Statistics;
    raid_events: RaidEvent[];
    sim_auras: SimAura[];
}

interface Options {
    debug: boolean;
    max_time: number;
    expected_iteration_time: number;
    vary_combat_length: number;
    iterations: number;
    target_error: number;
    threads: number;
    seed: number;
    single_actor_batch: boolean;
    queue_lag: number;
    queue_lag_stddev: number;
    gcd_lag: number;
    gcd_lag_stddev: number;
    channel_lag: number;
    channel_lag_stddev: number;
    queue_gcd_reduction: number;
    strict_gcd_queue: boolean;
    confidence: number;
    confidence_estimator: number;
    world_lag: number;
    world_lag_stddev: number;
    travel_variance: number;
    default_skill: number;
    reaction_time: number;
    regen_periodicity: number;
    ignite_sampling_delta: number;
    fixed_time: boolean;
    optimize_expressions: number;
    optimal_raid: number;
    log: number;
    debug_each: number;
    stat_cache: number;
    max_aoe_enemies: number;
    show_etmi: boolean;
    tmi_window_global: number;
    tmi_bin_size: number;
    enemy_death_pct: number;
    challenge_mode: boolean;
    timewalk: number;
    pvp_mode: boolean;
    rng: Rng;
    deterministic: number;
    average_range: number;
    average_gauss: number;
    fight_style: string;
    desired_targets: number;
    default_aura_delay: number;
    default_aura_delay_stddev: number;
    dbc: Dbc;
}

interface Rng {
    name: string;
}

interface Dbc {
    Live: Live;
    PTR: Ptr;
    version_used: string;
}

interface Live {
    build_level: number;
    wow_version: string;
    hotfix_date: string;
    hotfix_build: number;
    hotfix_hash: string;
}

interface Ptr {
    build_level: number;
    wow_version: string;
    hotfix_date: string;
    hotfix_build: number;
    hotfix_hash: string;
}

interface Overrides {
    arcane_intellect: number;
    battle_shout: number;
    power_word_fortitude: number;
    chaos_brand: number;
    mystic_touch: number;
    mortal_wounds: number;
    bleeding: number;
    bloodlust: number;
}

interface Player {
    name: string;
    race: string;
    level: number;
    role: string;
    specialization: string;
    profile_source: string;
    talents: string;
    party: number;
    ready_type: number;
    bugs: boolean;
    scale_player: boolean;
    potion_used: boolean;
    timeofday: string;
    zandalari_loa: string;
    vulpera_tricks: string;
    invert_scaling: number;
    reaction_offset: number;
    reaction_max: number;
    reaction_mean: number;
    reaction_stddev: number;
    reaction_nu: number;
    world_lag: number;
    brain_lag: number;
    brain_lag_stddev: number;
    world_lag_override: boolean;
    world_lag_stddev_override: boolean;
    dbc: Dbc2;
    potion: string;
    flask: string;
    food: string;
    augmentation: string;
    temporary_enchant: string;
    collected_data: CollectedData;
    buffs: Buff2[];
    buffs_constant: BuffsConstant[];
    procs: Proc[];
    gains: Gain[];
    stats: Stat[];
    stats_pets: StatsPets;
    gear: Gear;
    custom: Custom;
}

interface Dbc2 {
    Live: Live2;
    PTR: Ptr2;
    version_used: string;
}

interface Live2 {
    build_level: number;
    wow_version: string;
    hotfix_date: string;
    hotfix_build: number;
    hotfix_hash: string;
}

interface Ptr2 {
    build_level: number;
    wow_version: string;
    hotfix_date: string;
    hotfix_build: number;
    hotfix_hash: string;
}

interface CollectedData {
    fight_length: FightLength;
    waiting_time: WaitingTime;
    executed_foreground_actions: ExecutedForegroundActions;
    dmg: Dmg;
    compound_dmg: CompoundDmg;
    timeline_dmg: TimelineDmg;
    total_iterations: number;
    dps: Dps;
    dpse: Dpse;
    target_metric: TargetMetric;
    buffed_stats: BuffedStats;
    resource_lost: ResourceLost;
    resource_overflowed: ResourceOverflowed;
    combat_end_resource: CombatEndResource;
    resource_timelines: ResourceTimelines;
    health_changes: HealthChanges;
    health_changes_tmi: HealthChangesTmi;
    action_sequence_precombat: ActionSequencePrecombat[];
    action_sequence: ActionSequence[];
}

interface FightLength {
    sum: number;
    count: number;
    mean: number;
    min: number;
    max: number;
    median: number;
    variance: number;
    std_dev: number;
    mean_variance: number;
    mean_std_dev: number;
}

interface WaitingTime {
    sum: number;
    count: number;
    mean: number;
    min: number;
    max: number;
}

interface ExecutedForegroundActions {
    sum: number;
    count: number;
    mean: number;
    min: number;
    max: number;
}

interface Dmg {
    sum: number;
    count: number;
    mean: number;
    min: number;
    max: number;
}

interface CompoundDmg {
    sum: number;
    count: number;
    mean: number;
    min: number;
    max: number;
}

interface TimelineDmg {
    mean: number;
    mean_std_dev: number;
    min: number;
    max: number;
}

interface Dps {
    sum: number;
    count: number;
    mean: number;
    min: number;
    max: number;
    median: number;
    variance: number;
    std_dev: number;
    mean_variance: number;
    mean_std_dev: number;
}

interface Dpse {
    sum: number;
    count: number;
    mean: number;
    min: number;
    max: number;
}

interface TargetMetric {
    sum: number;
    count: number;
    mean: number;
    min: number;
    max: number;
    median: number;
    variance: number;
    std_dev: number;
    mean_variance: number;
    mean_std_dev: number;
}

interface BuffedStats {
    attribute: Attribute;
    resources: Resources;
    stats: Stats;
}

interface Attribute {
    strength: number;
    agility: number;
    stamina: number;
    intellect: number;
}

interface Resources {
    health: number;
    runic_power: number;
    rune: number;
}

interface Stats {
    spell_power: number;
    attack_power: number;
    spell_crit: number;
    attack_crit: number;
    spell_haste: number;
    attack_haste: number;
    spell_speed: number;
    attack_speed: number;
    mastery_value: number;
    damage_versatility: number;
    heal_versatility: number;
    mitigation_versatility: number;
    crit_rating: number;
    crit_pct: number;
    haste_rating: number;
    haste_pct: number;
    mastery_rating: number;
    mastery_pct: number;
    versatility_rating: number;
    versatility_pct: number;
    leech_rating: number;
    leech_pct: number;
    speed_pct: number;
    armor: number;
    dodge: number;
    parry: number;
}

interface ResourceLost {
    health: Health;
    runic_power: RunicPower;
    rune: Rune;
}

interface Health {
    sum: number;
    count: number;
    mean: number;
}

interface RunicPower {
    sum: number;
    count: number;
    mean: number;
}

interface Rune {
    sum: number;
    count: number;
    mean: number;
}

interface ResourceOverflowed {
    health: Health2;
    runic_power: RunicPower2;
    rune: Rune2;
}

interface Health2 {
    sum: number;
    count: number;
    mean: number;
}

interface RunicPower2 {
    sum: number;
    count: number;
    mean: number;
}

interface Rune2 {
    sum: number;
    count: number;
    mean: number;
}

interface CombatEndResource {
    health: Health3;
    runic_power: RunicPower3;
    rune: Rune3;
}

interface Health3 {
    sum: number;
    count: number;
    mean: number;
    min: number;
    max: number;
}

interface RunicPower3 {
    sum: number;
    count: number;
    mean: number;
    min: number;
    max: number;
}

interface Rune3 {
    sum: number;
    count: number;
    mean: number;
    min: number;
    max: number;
}

interface ResourceTimelines {
    health: Health4;
    runic_power: RunicPower4;
    rune: Rune4;
}

interface Health4 {
    mean: number;
    mean_std_dev: number;
    min: number;
    max: number;
    data: number[];
}

interface RunicPower4 {
    mean: number;
    mean_std_dev: number;
    min: number;
    max: number;
    data: number[];
}

interface Rune4 {
    mean: number;
    mean_std_dev: number;
    min: number;
    max: number;
    data: number[];
}

interface HealthChanges {
    mean: number;
    mean_std_dev: number;
    min: number;
    max: number;
    data: number[];
}

interface HealthChangesTmi {
    mean: number;
    mean_std_dev: number;
    min: number;
    max: number;
    data: number[];
}

interface ActionSequencePrecombat {
    time: number;
    id: number;
    name: string;
    target: string;
    spell_name: string;
    queue_failed: boolean;
    resources: Resources2;
    resources_max: ResourcesMax;
}

interface Resources2 {
    health: number;
    runic_power: number;
    rune: number;
}

interface ResourcesMax {
    health: number;
    runic_power: number;
    rune: number;
}

interface ActionSequence {
    time: number;
    id?: number;
    name?: string;
    target?: string;
    spell_name?: string;
    queue_failed?: boolean;
    resources: Resources3;
    resources_max: ResourcesMax2;
    buffs?: Buff[];
    wait?: number;
}

interface Resources3 {
    health: number;
    runic_power: number;
    rune: number;
}

interface ResourcesMax2 {
    health: number;
    runic_power: number;
    rune: number;
}

interface Buff {
    id: number;
    name: string;
    stacks: number;
}

interface Buff2 {
    name: string;
    spell_name: string;
    spell_school: string;
    spell: number;
    start_count: number;
    interval?: number;
    trigger?: number;
    duration: number;
    uptime: number;
    overflow_stacks?: number;
    overflow_total?: number;
    expire_count?: number;
    refresh_count?: number;
    benefit?: number;
    cooldown?: Cooldown;
    default_value?: number;
}

interface Cooldown {
    name: string;
    duration: number;
}

interface BuffsConstant {
    name: string;
    spell_name: string;
    spell_school: string;
    spell: number;
    start_count: number;
    duration: number;
    uptime: number;
    default_value?: number;
    cooldown?: Cooldown2;
}

interface Cooldown2 {
    name: string;
    duration: number;
}

interface Proc {
    name: string;
    interval: number;
    count: number;
}

interface Gain {
    name: string;
    rune?: Rune5;
    runic_power?: RunicPower5;
}

interface Rune5 {
    actual: number;
    overflow: number;
    count: number;
}

interface RunicPower5 {
    actual: number;
    overflow: number;
    count: number;
}

interface Stat {
    id: number;
    spell_name: string;
    name: string;
    school?: string;
    type: string;
    num_executes: NumExecutes;
    compound_amount: number;
    total_execute_time?: TotalExecuteTime;
    total_intervals?: TotalIntervals;
    children?: Children[];
    portion_aps?: PortionAps2;
    portion_apse?: PortionApse2;
    portion_amount?: number;
    actual_amount?: ActualAmount4;
    total_amount?: TotalAmount4;
    num_direct_results?: NumDirectResults2;
    direct_results?: DirectResults2;
    num_ticks?: NumTicks;
    num_tick_results?: NumTickResults;
    total_tick_time?: TotalTickTime;
    num_refreshes?: NumRefreshes;
    tick_results?: TickResults;
    resource_gain?: ResourceGain;
}

interface NumExecutes {
    sum: number;
    count: number;
    mean: number;
}

interface TotalExecuteTime {
    sum: number;
    count: number;
    mean: number;
}

interface TotalIntervals {
    sum: number;
    count: number;
    mean: number;
}

interface Children {
    id: number;
    spell_name: string;
    name: string;
    type: string;
    num_executes: NumExecutes2;
    compound_amount: number;
    portion_aps: PortionAps;
    portion_apse: PortionApse;
    portion_amount: number;
    actual_amount: ActualAmount;
    total_amount: TotalAmount;
    total_intervals: TotalIntervals2;
    num_direct_results: NumDirectResults;
    direct_results: DirectResults;
}

interface NumExecutes2 {
    sum: number;
    count: number;
    mean: number;
}

interface PortionAps {
    sum: number;
    count: number;
    mean: number;
    min: number;
    max: number;
}

interface PortionApse {
    sum: number;
    count: number;
    mean: number;
    min: number;
    max: number;
}

interface ActualAmount {
    sum: number;
    count: number;
    mean: number;
    min: number;
    max: number;
}

interface TotalAmount {
    sum: number;
    count: number;
    mean: number;
    min: number;
    max: number;
}

interface TotalIntervals2 {
    sum: number;
    count: number;
    mean: number;
}

interface NumDirectResults {
    sum: number;
    count: number;
    mean: number;
}

interface DirectResults {
    crit: Crit;
    hit: Hit;
}

interface Crit {
    actual_amount: ActualAmount2;
    avg_actual_amount: AvgActualAmount;
    total_amount: TotalAmount2;
    fight_actual_amount: FightActualAmount;
    fight_total_amount: FightTotalAmount;
    overkill_pct: OverkillPct;
    count: Count;
    pct: number;
}

interface ActualAmount2 {
    sum: number;
    count: number;
    mean: number;
    min: number;
    max: number;
}

interface AvgActualAmount {
    sum: number;
    count: number;
    mean: number;
    min: number;
    max: number;
}

interface TotalAmount2 {
    sum: number;
    count: number;
    mean: number;
}

interface FightActualAmount {
    sum: number;
    count: number;
    mean: number;
}

interface FightTotalAmount {
    sum: number;
    count: number;
    mean: number;
}

interface OverkillPct {
    sum: number;
    count: number;
    mean: number;
}

interface Count {
    sum: number;
    count: number;
    mean: number;
    min: number;
    max: number;
}

interface Hit {
    actual_amount: ActualAmount3;
    avg_actual_amount: AvgActualAmount2;
    total_amount: TotalAmount3;
    fight_actual_amount: FightActualAmount2;
    fight_total_amount: FightTotalAmount2;
    overkill_pct: OverkillPct2;
    count: Count2;
    pct: number;
}

interface ActualAmount3 {
    sum: number;
    count: number;
    mean: number;
    min: number;
    max: number;
}

interface AvgActualAmount2 {
    sum: number;
    count: number;
    mean: number;
    min: number;
    max: number;
}

interface TotalAmount3 {
    sum: number;
    count: number;
    mean: number;
}

interface FightActualAmount2 {
    sum: number;
    count: number;
    mean: number;
}

interface FightTotalAmount2 {
    sum: number;
    count: number;
    mean: number;
}

interface OverkillPct2 {
    sum: number;
    count: number;
    mean: number;
}

interface Count2 {
    sum: number;
    count: number;
    mean: number;
    min: number;
    max: number;
}

interface PortionAps2 {
    sum: number;
    count: number;
    mean: number;
    min: number;
    max: number;
}

interface PortionApse2 {
    sum: number;
    count: number;
    mean: number;
    min: number;
    max: number;
}

interface ActualAmount4 {
    sum: number;
    count: number;
    mean: number;
    min: number;
    max: number;
}

interface TotalAmount4 {
    sum: number;
    count: number;
    mean: number;
    min: number;
    max: number;
}

interface NumDirectResults2 {
    sum: number;
    count: number;
    mean: number;
}

interface DirectResults2 {
    crit?: Crit2;
    hit: Hit2;
}

interface Crit2 {
    actual_amount: ActualAmount5;
    avg_actual_amount: AvgActualAmount3;
    total_amount: TotalAmount5;
    fight_actual_amount: FightActualAmount3;
    fight_total_amount: FightTotalAmount3;
    overkill_pct: OverkillPct3;
    count: Count3;
    pct: number;
}

interface ActualAmount5 {
    sum: number;
    count: number;
    mean: number;
    min: number;
    max: number;
}

interface AvgActualAmount3 {
    sum: number;
    count: number;
    mean: number;
    min: number;
    max: number;
}

interface TotalAmount5 {
    sum: number;
    count: number;
    mean: number;
}

interface FightActualAmount3 {
    sum: number;
    count: number;
    mean: number;
}

interface FightTotalAmount3 {
    sum: number;
    count: number;
    mean: number;
}

interface OverkillPct3 {
    sum: number;
    count: number;
    mean: number;
}

interface Count3 {
    sum: number;
    count: number;
    mean: number;
    min: number;
    max: number;
}

interface Hit2 {
    actual_amount: ActualAmount6;
    avg_actual_amount: AvgActualAmount4;
    total_amount: TotalAmount6;
    fight_actual_amount: FightActualAmount4;
    fight_total_amount: FightTotalAmount4;
    overkill_pct: OverkillPct4;
    count: Count4;
    pct: number;
}

interface ActualAmount6 {
    sum: number;
    count: number;
    mean: number;
    min: number;
    max: number;
}

interface AvgActualAmount4 {
    sum: number;
    count: number;
    mean: number;
    min: number;
    max: number;
}

interface TotalAmount6 {
    sum: number;
    count: number;
    mean: number;
}

interface FightActualAmount4 {
    sum: number;
    count: number;
    mean: number;
}

interface FightTotalAmount4 {
    sum: number;
    count: number;
    mean: number;
}

interface OverkillPct4 {
    sum: number;
    count: number;
    mean: number;
}

interface Count4 {
    sum: number;
    count: number;
    mean: number;
    min: number;
    max: number;
}

interface NumTicks {
    sum: number;
    count: number;
    mean: number;
}

interface NumTickResults {
    sum: number;
    count: number;
    mean: number;
}

interface TotalTickTime {
    sum: number;
    count: number;
    mean: number;
}

interface NumRefreshes {
    sum: number;
    count: number;
    mean: number;
}

interface TickResults {
    crit: Crit3;
    hit: Hit3;
}

interface Crit3 {
    actual_amount: ActualAmount7;
    avg_actual_amount: AvgActualAmount5;
    total_amount: TotalAmount7;
    fight_actual_amount: FightActualAmount5;
    fight_total_amount: FightTotalAmount5;
    overkill_pct: OverkillPct5;
    count: Count5;
    pct: number;
}

interface ActualAmount7 {
    sum: number;
    count: number;
    mean: number;
    min: number;
    max: number;
}

interface AvgActualAmount5 {
    sum: number;
    count: number;
    mean: number;
    min: number;
    max: number;
}

interface TotalAmount7 {
    sum: number;
    count: number;
    mean: number;
}

interface FightActualAmount5 {
    sum: number;
    count: number;
    mean: number;
}

interface FightTotalAmount5 {
    sum: number;
    count: number;
    mean: number;
}

interface OverkillPct5 {
    sum: number;
    count: number;
    mean: number;
}

interface Count5 {
    sum: number;
    count: number;
    mean: number;
    min: number;
    max: number;
}

interface Hit3 {
    actual_amount: ActualAmount8;
    avg_actual_amount: AvgActualAmount6;
    total_amount: TotalAmount8;
    fight_actual_amount: FightActualAmount6;
    fight_total_amount: FightTotalAmount6;
    overkill_pct: OverkillPct6;
    count: Count6;
    pct: number;
}

interface ActualAmount8 {
    sum: number;
    count: number;
    mean: number;
    min: number;
    max: number;
}

interface AvgActualAmount6 {
    sum: number;
    count: number;
    mean: number;
    min: number;
    max: number;
}

interface TotalAmount8 {
    sum: number;
    count: number;
    mean: number;
}

interface FightActualAmount6 {
    sum: number;
    count: number;
    mean: number;
}

interface FightTotalAmount6 {
    sum: number;
    count: number;
    mean: number;
}

interface OverkillPct6 {
    sum: number;
    count: number;
    mean: number;
}

interface Count6 {
    sum: number;
    count: number;
    mean: number;
    min: number;
    max: number;
}

interface ResourceGain {
    name: string;
    rune?: Rune6;
    runic_power?: RunicPower6;
}

interface Rune6 {
    actual: number;
    overflow: number;
    count: number;
}

interface RunicPower6 {
    actual: number;
    overflow: number;
    count: number;
}

interface StatsPets {
    ghoul: Ghoul[];
    dancing_rune_weapon: DancingRuneWeapon[];
    everlasting_bond: EverlastingBond[];
}

interface Ghoul {
    id: number;
    spell_name: string;
    name: string;
    school: string;
    type: string;
    resource_gain?: ResourceGain2;
    num_executes: NumExecutes3;
    compound_amount: number;
    total_execute_time: TotalExecuteTime2;
    portion_aps: PortionAps3;
    portion_apse: PortionApse3;
    portion_amount: number;
    actual_amount: ActualAmount9;
    total_amount: TotalAmount9;
    total_intervals: TotalIntervals3;
    num_direct_results: NumDirectResults3;
    direct_results: DirectResults3;
}

interface ResourceGain2 {
    name: string;
    energy: Energy;
}

interface Energy {
    actual: number;
    overflow: number;
    count: number;
}

interface NumExecutes3 {
    sum: number;
    count: number;
    mean: number;
}

interface TotalExecuteTime2 {
    sum: number;
    count: number;
    mean: number;
}

interface PortionAps3 {
    sum: number;
    count: number;
    mean: number;
    min: number;
    max: number;
}

interface PortionApse3 {
    sum: number;
    count: number;
    mean: number;
    min: number;
    max: number;
}

interface ActualAmount9 {
    sum: number;
    count: number;
    mean: number;
    min: number;
    max: number;
}

interface TotalAmount9 {
    sum: number;
    count: number;
    mean: number;
    min: number;
    max: number;
}

interface TotalIntervals3 {
    sum: number;
    count: number;
    mean: number;
}

interface NumDirectResults3 {
    sum: number;
    count: number;
    mean: number;
}

interface DirectResults3 {
    crit: Crit4;
    hit: Hit4;
}

interface Crit4 {
    actual_amount: ActualAmount10;
    avg_actual_amount: AvgActualAmount7;
    total_amount: TotalAmount10;
    fight_actual_amount: FightActualAmount7;
    fight_total_amount: FightTotalAmount7;
    overkill_pct: OverkillPct7;
    count: Count7;
    pct: number;
}

interface ActualAmount10 {
    sum: number;
    count: number;
    mean: number;
    min: number;
    max: number;
}

interface AvgActualAmount7 {
    sum: number;
    count: number;
    mean: number;
    min: number;
    max: number;
}

interface TotalAmount10 {
    sum: number;
    count: number;
    mean: number;
}

interface FightActualAmount7 {
    sum: number;
    count: number;
    mean: number;
}

interface FightTotalAmount7 {
    sum: number;
    count: number;
    mean: number;
}

interface OverkillPct7 {
    sum: number;
    count: number;
    mean: number;
}

interface Count7 {
    sum: number;
    count: number;
    mean: number;
    min: number;
    max: number;
}

interface Hit4 {
    actual_amount: ActualAmount11;
    avg_actual_amount: AvgActualAmount8;
    total_amount: TotalAmount11;
    fight_actual_amount: FightActualAmount8;
    fight_total_amount: FightTotalAmount8;
    overkill_pct: OverkillPct8;
    count: Count8;
    pct: number;
}

interface ActualAmount11 {
    sum: number;
    count: number;
    mean: number;
    min: number;
    max: number;
}

interface AvgActualAmount8 {
    sum: number;
    count: number;
    mean: number;
    min: number;
    max: number;
}

interface TotalAmount11 {
    sum: number;
    count: number;
    mean: number;
}

interface FightActualAmount8 {
    sum: number;
    count: number;
    mean: number;
}

interface FightTotalAmount8 {
    sum: number;
    count: number;
    mean: number;
}

interface OverkillPct8 {
    sum: number;
    count: number;
    mean: number;
}

interface Count8 {
    sum: number;
    count: number;
    mean: number;
    min: number;
    max: number;
}

interface DancingRuneWeapon {
    id: number;
    spell_name: string;
    name: string;
    school: string;
    type: string;
    num_executes: NumExecutes4;
    compound_amount: number;
    portion_aps: PortionAps4;
    portion_apse: PortionApse4;
    portion_amount: number;
    actual_amount: ActualAmount12;
    total_amount: TotalAmount12;
    total_intervals: TotalIntervals4;
    num_direct_results?: NumDirectResults4;
    direct_results?: DirectResults4;
    num_ticks?: NumTicks2;
    num_tick_results?: NumTickResults2;
    total_tick_time?: TotalTickTime2;
    num_refreshes?: NumRefreshes2;
    tick_results?: TickResults2;
    resource_gain?: ResourceGain3;
    total_execute_time?: TotalExecuteTime3;
}

interface NumExecutes4 {
    sum: number;
    count: number;
    mean: number;
}

interface PortionAps4 {
    sum: number;
    count: number;
    mean: number;
    min: number;
    max: number;
}

interface PortionApse4 {
    sum: number;
    count: number;
    mean: number;
    min: number;
    max: number;
}

interface ActualAmount12 {
    sum: number;
    count: number;
    mean: number;
    min: number;
    max: number;
}

interface TotalAmount12 {
    sum: number;
    count: number;
    mean: number;
    min: number;
    max: number;
}

interface TotalIntervals4 {
    sum: number;
    count: number;
    mean: number;
}

interface NumDirectResults4 {
    sum: number;
    count: number;
    mean: number;
}

interface DirectResults4 {
    crit: Crit5;
    hit: Hit5;
}

interface Crit5 {
    actual_amount: ActualAmount13;
    avg_actual_amount: AvgActualAmount9;
    total_amount: TotalAmount13;
    fight_actual_amount: FightActualAmount9;
    fight_total_amount: FightTotalAmount9;
    overkill_pct: OverkillPct9;
    count: Count9;
    pct: number;
}

interface ActualAmount13 {
    sum: number;
    count: number;
    mean: number;
    min: number;
    max: number;
}

interface AvgActualAmount9 {
    sum: number;
    count: number;
    mean: number;
    min: number;
    max: number;
}

interface TotalAmount13 {
    sum: number;
    count: number;
    mean: number;
}

interface FightActualAmount9 {
    sum: number;
    count: number;
    mean: number;
}

interface FightTotalAmount9 {
    sum: number;
    count: number;
    mean: number;
}

interface OverkillPct9 {
    sum: number;
    count: number;
    mean: number;
}

interface Count9 {
    sum: number;
    count: number;
    mean: number;
    min: number;
    max: number;
}

interface Hit5 {
    actual_amount: ActualAmount14;
    avg_actual_amount: AvgActualAmount10;
    total_amount: TotalAmount14;
    fight_actual_amount: FightActualAmount10;
    fight_total_amount: FightTotalAmount10;
    overkill_pct: OverkillPct10;
    count: Count10;
    pct: number;
}

interface ActualAmount14 {
    sum: number;
    count: number;
    mean: number;
    min: number;
    max: number;
}

interface AvgActualAmount10 {
    sum: number;
    count: number;
    mean: number;
    min: number;
    max: number;
}

interface TotalAmount14 {
    sum: number;
    count: number;
    mean: number;
}

interface FightActualAmount10 {
    sum: number;
    count: number;
    mean: number;
}

interface FightTotalAmount10 {
    sum: number;
    count: number;
    mean: number;
}

interface OverkillPct10 {
    sum: number;
    count: number;
    mean: number;
}

interface Count10 {
    sum: number;
    count: number;
    mean: number;
    min: number;
    max: number;
}

interface NumTicks2 {
    sum: number;
    count: number;
    mean: number;
}

interface NumTickResults2 {
    sum: number;
    count: number;
    mean: number;
}

interface TotalTickTime2 {
    sum: number;
    count: number;
    mean: number;
}

interface NumRefreshes2 {
    sum: number;
    count: number;
    mean: number;
}

interface TickResults2 {
    crit: Crit6;
    hit: Hit6;
}

interface Crit6 {
    actual_amount: ActualAmount15;
    avg_actual_amount: AvgActualAmount11;
    total_amount: TotalAmount15;
    fight_actual_amount: FightActualAmount11;
    fight_total_amount: FightTotalAmount11;
    overkill_pct: OverkillPct11;
    count: Count11;
    pct: number;
}

interface ActualAmount15 {
    sum: number;
    count: number;
    mean: number;
    min: number;
    max: number;
}

interface AvgActualAmount11 {
    sum: number;
    count: number;
    mean: number;
    min: number;
    max: number;
}

interface TotalAmount15 {
    sum: number;
    count: number;
    mean: number;
}

interface FightActualAmount11 {
    sum: number;
    count: number;
    mean: number;
}

interface FightTotalAmount11 {
    sum: number;
    count: number;
    mean: number;
}

interface OverkillPct11 {
    sum: number;
    count: number;
    mean: number;
}

interface Count11 {
    sum: number;
    count: number;
    mean: number;
    min: number;
    max: number;
}

interface Hit6 {
    actual_amount: ActualAmount16;
    avg_actual_amount: AvgActualAmount12;
    total_amount: TotalAmount16;
    fight_actual_amount: FightActualAmount12;
    fight_total_amount: FightTotalAmount12;
    overkill_pct: OverkillPct12;
    count: Count12;
    pct: number;
}

interface ActualAmount16 {
    sum: number;
    count: number;
    mean: number;
    min: number;
    max: number;
}

interface AvgActualAmount12 {
    sum: number;
    count: number;
    mean: number;
    min: number;
    max: number;
}

interface TotalAmount16 {
    sum: number;
    count: number;
    mean: number;
}

interface FightActualAmount12 {
    sum: number;
    count: number;
    mean: number;
}

interface FightTotalAmount12 {
    sum: number;
    count: number;
    mean: number;
}

interface OverkillPct12 {
    sum: number;
    count: number;
    mean: number;
}

interface Count12 {
    sum: number;
    count: number;
    mean: number;
    min: number;
    max: number;
}

interface ResourceGain3 {
    name: string;
    rune?: Rune7;
    runic_power?: RunicPower7;
}

interface Rune7 {
    actual: number;
    overflow: number;
    count: number;
}

interface RunicPower7 {
    actual: number;
    overflow: number;
    count: number;
}

interface TotalExecuteTime3 {
    sum: number;
    count: number;
    mean: number;
}

interface EverlastingBond {
    id: number;
    spell_name: string;
    name: string;
    school: string;
    type: string;
    num_executes: NumExecutes5;
    compound_amount: number;
    portion_aps: PortionAps5;
    portion_apse: PortionApse5;
    portion_amount: number;
    actual_amount: ActualAmount17;
    total_amount: TotalAmount17;
    total_intervals: TotalIntervals5;
    num_direct_results?: NumDirectResults5;
    direct_results?: DirectResults5;
    num_ticks?: NumTicks3;
    num_tick_results?: NumTickResults3;
    total_tick_time?: TotalTickTime3;
    num_refreshes?: NumRefreshes3;
    tick_results?: TickResults3;
    resource_gain?: ResourceGain4;
    total_execute_time?: TotalExecuteTime4;
}

interface NumExecutes5 {
    sum: number;
    count: number;
    mean: number;
}

interface PortionAps5 {
    sum: number;
    count: number;
    mean: number;
    min: number;
    max: number;
}

interface PortionApse5 {
    sum: number;
    count: number;
    mean: number;
    min: number;
    max: number;
}

interface ActualAmount17 {
    sum: number;
    count: number;
    mean: number;
    min: number;
    max: number;
}

interface TotalAmount17 {
    sum: number;
    count: number;
    mean: number;
    min: number;
    max: number;
}

interface TotalIntervals5 {
    sum: number;
    count: number;
    mean: number;
}

interface NumDirectResults5 {
    sum: number;
    count: number;
    mean: number;
}

interface DirectResults5 {
    crit: Crit7;
    hit: Hit7;
}

interface Crit7 {
    actual_amount: ActualAmount18;
    avg_actual_amount: AvgActualAmount13;
    total_amount: TotalAmount18;
    fight_actual_amount: FightActualAmount13;
    fight_total_amount: FightTotalAmount13;
    overkill_pct: OverkillPct13;
    count: Count13;
    pct: number;
}

interface ActualAmount18 {
    sum: number;
    count: number;
    mean: number;
    min: number;
    max: number;
}

interface AvgActualAmount13 {
    sum: number;
    count: number;
    mean: number;
    min: number;
    max: number;
}

interface TotalAmount18 {
    sum: number;
    count: number;
    mean: number;
}

interface FightActualAmount13 {
    sum: number;
    count: number;
    mean: number;
}

interface FightTotalAmount13 {
    sum: number;
    count: number;
    mean: number;
}

interface OverkillPct13 {
    sum: number;
    count: number;
    mean: number;
}

interface Count13 {
    sum: number;
    count: number;
    mean: number;
    min: number;
    max: number;
}

interface Hit7 {
    actual_amount: ActualAmount19;
    avg_actual_amount: AvgActualAmount14;
    total_amount: TotalAmount19;
    fight_actual_amount: FightActualAmount14;
    fight_total_amount: FightTotalAmount14;
    overkill_pct: OverkillPct14;
    count: Count14;
    pct: number;
}

interface ActualAmount19 {
    sum: number;
    count: number;
    mean: number;
    min: number;
    max: number;
}

interface AvgActualAmount14 {
    sum: number;
    count: number;
    mean: number;
    min: number;
    max: number;
}

interface TotalAmount19 {
    sum: number;
    count: number;
    mean: number;
}

interface FightActualAmount14 {
    sum: number;
    count: number;
    mean: number;
}

interface FightTotalAmount14 {
    sum: number;
    count: number;
    mean: number;
}

interface OverkillPct14 {
    sum: number;
    count: number;
    mean: number;
}

interface Count14 {
    sum: number;
    count: number;
    mean: number;
    min: number;
    max: number;
}

interface NumTicks3 {
    sum: number;
    count: number;
    mean: number;
}

interface NumTickResults3 {
    sum: number;
    count: number;
    mean: number;
}

interface TotalTickTime3 {
    sum: number;
    count: number;
    mean: number;
}

interface NumRefreshes3 {
    sum: number;
    count: number;
    mean: number;
}

interface TickResults3 {
    crit: Crit8;
    hit: Hit8;
}

interface Crit8 {
    actual_amount: ActualAmount20;
    avg_actual_amount: AvgActualAmount15;
    total_amount: TotalAmount20;
    fight_actual_amount: FightActualAmount15;
    fight_total_amount: FightTotalAmount15;
    overkill_pct: OverkillPct15;
    count: Count15;
    pct: number;
}

interface ActualAmount20 {
    sum: number;
    count: number;
    mean: number;
    min: number;
    max: number;
}

interface AvgActualAmount15 {
    sum: number;
    count: number;
    mean: number;
    min: number;
    max: number;
}

interface TotalAmount20 {
    sum: number;
    count: number;
    mean: number;
}

interface FightActualAmount15 {
    sum: number;
    count: number;
    mean: number;
}

interface FightTotalAmount15 {
    sum: number;
    count: number;
    mean: number;
}

interface OverkillPct15 {
    sum: number;
    count: number;
    mean: number;
}

interface Count15 {
    sum: number;
    count: number;
    mean: number;
    min: number;
    max: number;
}

interface Hit8 {
    actual_amount: ActualAmount21;
    avg_actual_amount: AvgActualAmount16;
    total_amount: TotalAmount21;
    fight_actual_amount: FightActualAmount16;
    fight_total_amount: FightTotalAmount16;
    overkill_pct: OverkillPct16;
    count: Count16;
    pct: number;
}

interface ActualAmount21 {
    sum: number;
    count: number;
    mean: number;
    min: number;
    max: number;
}

interface AvgActualAmount16 {
    sum: number;
    count: number;
    mean: number;
    min: number;
    max: number;
}

interface TotalAmount21 {
    sum: number;
    count: number;
    mean: number;
}

interface FightActualAmount16 {
    sum: number;
    count: number;
    mean: number;
}

interface FightTotalAmount16 {
    sum: number;
    count: number;
    mean: number;
}

interface OverkillPct16 {
    sum: number;
    count: number;
    mean: number;
}

interface Count16 {
    sum: number;
    count: number;
    mean: number;
    min: number;
    max: number;
}

interface ResourceGain4 {
    name: string;
    rune?: Rune8;
    runic_power?: RunicPower8;
}

interface Rune8 {
    actual: number;
    overflow: number;
    count: number;
}

interface RunicPower8 {
    actual: number;
    overflow: number;
    count: number;
}

interface TotalExecuteTime4 {
    sum: number;
    count: number;
    mean: number;
}

interface Gear {
    head: Head;
    neck: Neck;
    shoulders: Shoulders;
    chest: Chest;
    waist: Waist;
    legs: Legs;
    feet: Feet;
    wrists: Wrists;
    hands: Hands;
    finger1: Finger1;
    finger2: Finger2;
    trinket1: Trinket1;
    trinket2: Trinket2;
    back: Back;
    main_hand: MainHand;
}

interface Head {
    name: string;
    encoded_item: string;
    ilevel: number;
    stamina: number;
    haste_rating: number;
    versatility_rating: number;
    strint: number;
}

interface Neck {
    name: string;
    encoded_item: string;
    ilevel: number;
    stamina: number;
    haste_rating: number;
    versatility_rating: number;
}

interface Shoulders {
    name: string;
    encoded_item: string;
    ilevel: number;
    stamina: number;
    crit_rating: number;
    haste_rating: number;
    strint: number;
}

interface Chest {
    name: string;
    encoded_item: string;
    ilevel: number;
    stamina: number;
    crit_rating: number;
    mastery_rating: number;
    strint: number;
}

interface Waist {
    name: string;
    encoded_item: string;
    ilevel: number;
    stamina: number;
    crit_rating: number;
    haste_rating: number;
    strint: number;
}

interface Legs {
    name: string;
    encoded_item: string;
    ilevel: number;
    stamina: number;
    haste_rating: number;
    mastery_rating: number;
    strint: number;
}

interface Feet {
    name: string;
    encoded_item: string;
    ilevel: number;
    stamina: number;
    versatility_rating: number;
    mastery_rating: number;
    strint: number;
}

interface Wrists {
    name: string;
    encoded_item: string;
    ilevel: number;
    stamina: number;
    crit_rating: number;
    mastery_rating: number;
    strint: number;
}

interface Hands {
    name: string;
    encoded_item: string;
    ilevel: number;
    stamina: number;
    crit_rating: number;
    mastery_rating: number;
    strint: number;
}

interface Finger1 {
    name: string;
    encoded_item: string;
    ilevel: number;
    stamina: number;
    crit_rating: number;
    mastery_rating: number;
}

interface Finger2 {
    name: string;
    encoded_item: string;
    ilevel: number;
    stamina: number;
    versatility_rating: number;
    mastery_rating: number;
}

interface Trinket1 {
    name: string;
    encoded_item: string;
    ilevel: number;
    stragiint: number;
}

interface Trinket2 {
    name: string;
    encoded_item: string;
    ilevel: number;
    strength: number;
}

interface Back {
    name: string;
    encoded_item: string;
    ilevel: number;
    stamina: number;
    stragiint: number;
    haste_rating: number;
    versatility_rating: number;
}

interface MainHand {
    name: string;
    encoded_item: string;
    ilevel: number;
    strength: number;
    stamina: number;
    haste_rating: number;
    versatility_rating: number;
}

interface Custom {}

interface Statistics {
    elapsed_cpu_seconds: number;
    elapsed_time_seconds: number;
    init_time_seconds: number;
    merge_time_seconds: number;
    analyze_time_seconds: number;
    simulation_length: SimulationLength;
    total_events_processed: number;
    raid_dps: RaidDps;
    raid_aps: RaidAps;
    total_dmg: TotalDmg;
    total_absorb: TotalAbsorb;
}

interface SimulationLength {
    sum: number;
    count: number;
    mean: number;
    min: number;
    max: number;
    median: number;
    variance: number;
    std_dev: number;
    mean_variance: number;
    mean_std_dev: number;
}

interface RaidDps {
    sum: number;
    count: number;
    mean: number;
}

interface RaidAps {
    sum: number;
    count: number;
    mean: number;
}

interface TotalDmg {
    sum: number;
    count: number;
    mean: number;
}

interface TotalAbsorb {
    sum: number;
    count: number;
    mean: number;
}

interface RaidEvent {
    name: string;
    type: string;
    first: number;
    last: number;
    cooldown: number;
    cooldown_min: number;
    cooldown_max: number;
}

interface SimAura {
    name: string;
    spell_name: string;
    spell_school: string;
    spell: number;
    start_count: number;
    duration: number;
    uptime: number;
    default_value: number;
    cooldown?: Cooldown3;
}

interface Cooldown3 {
    name: string;
    duration: number;
}

interface Simbot {
    title: string;
    simId: string;
    simcVersion: string;
    timeLimit: number;
    concurrency: number;
    isConcurrencyEligible: boolean;
    userConcurrency: number;
    rateLimitKey: string;
    smart: boolean;
    smartHighPrecision: boolean;
    publicTitle: string;
    simType: string;
    player: string;
    charClass: string;
    spec: string;
    fightStyle: string;
    frontendHost: string;
    totalIterations: number;
    userLevel: string;
    numProfilesets: number;
    jobSubmitted: number;
    chunkSizes: number[];
    attempts: number;
    numChunks: number;
    stage: number;
    numStages: number;
    stageTarget: number;
    stageActors: number;
    jobFirstStart: number;
    host: string;
    hostStart: number;
    meta: Meta;
    parentSimId: string;
    parentJobId: string;
    fromFlightmaster: boolean;
    flightChunk: boolean;
    saveHtml: boolean;
    source: string;
    input: string;
    date: number;
    skippedHtml: boolean;
    mem: Mem;
    flightmaster: Flightmaster;
    hasCsv: boolean;
}

interface Meta {
    title: string;
    type: string;
    source: string;
    origin: string;
    simcVersion: string;
    iterations: string;
    fightStyle: string;
    fightLength: number;
    enemyCount: number;
    enemyType: string;
    potion: string;
    food: string;
    flask: string;
    augmentation: string;
    optimalRaid: boolean;
    bloodlust: boolean;
    arcaneIntellect: boolean;
    fortitude: boolean;
    battleShout: boolean;
    mysticTouch: boolean;
    chaosBrand: boolean;
    windfury: boolean;
    markOfTheWild: boolean;
    enableDominationShards: boolean;
    soleahStatType: string;
    ocularGlandUptime: number;
    enableRuneWords: boolean;
    temporaryEnchant: string;
    stoneLegionHeraldryInParty: number;
    cabalistsHymnalInParty: number;
    disableIqdExecute: boolean;
    iqdStatFailChance: number;
    unboundChangelingStatType: string;
    bleeding: boolean;
    reportDetails: boolean;
    ptr: boolean;
    frontendHost: string;
    frontendVersion: string;
    rawFormData: RawFormData;
    customApl: boolean;
    expertMode: boolean;
    nonMaxLevel: boolean;
    race: string;
    charClass: string;
    faction: string;
    spec: string;
    player: string;
    totalIterations: number;
}

interface RawFormData {
    type: string;
    text: string;
    baseActorName: string;
    reportName: string;
    armory: Armory;
    sendEmail: boolean;
    character: Character;
    spec: string;
    simcItems: SimcItems;
    gearsets: any[];
    talents: any;
    talentSets: any[];
    droptimizerItems: any[];
    simcVersion: string;
    iterations: string;
    smartHighPrecision: boolean;
    fightStyle: string;
    fightLength: number;
    enemyCount: number;
    enemyType: string;
    potion: string;
    food: string;
    flask: string;
    augmentation: string;
    bloodlust: boolean;
    arcaneIntellect: boolean;
    fortitude: boolean;
    battleShout: boolean;
    mysticTouch: boolean;
    chaosBrand: boolean;
    bleeding: boolean;
    windfury: boolean;
    markOfTheWild: boolean;
    reportDetails: boolean;
    apl: string;
    ptr: boolean;
    frontendHost: string;
    frontendVersion: string;
    enableDominationShards: boolean;
    soleahStatType: string;
    ocularGlandUptime: number;
    enableRuneWords: boolean;
    temporaryEnchant: string;
    stoneLegionHeraldryInParty: number;
    cabalistsHymnalInParty: number;
    disableIqdExecute: boolean;
    iqdStatFailChance: number;
    unboundChangelingStatType: string;
    nazjatar: boolean;
    worldveinAllies: number;
    loyalToTheEndAllies: number;
    covenantChance: number;
    undulatingTides: number;
    nyalotha: boolean;
    aberration: boolean;
    voidRitual: boolean;
    surgingVitality: number;
    symbioticPresence: number;
}

interface Armory {
    region: string;
    realm: string;
    name: string;
}

interface Character {
    achievementPoints: number;
    battlegroup: any;
    calcClass: any;
    class: number;
    faction: number;
    gender: number;
    guild: Guild;
    items: Items;
    lastModified: number;
    level: number;
    name: string;
    race: number;
    realm: string;
    talentLoadouts: TalentLoadout[];
    thumbnail: any;
    totalHonorableKills: any;
    v2: V2;
    changed: boolean;
}

interface Guild {
    name: string;
    realm: string;
    achievementPoints: any;
    battlegroup: any;
    emblem: any;
    members: any;
}

interface Items {
    averageItemLevel: number;
    averageItemLevelEquipped: number;
    back: Back2;
    chest: Chest2;
    feet: Feet2;
    finger1: Finger12;
    finger2: Finger22;
    hands: Hands2;
    head: Head2;
    legs: Legs2;
    mainHand: MainHand2;
    neck: Neck2;
    offHand: any;
    shirt: any;
    shoulder: Shoulder;
    tabard: any;
    trinket1: Trinket12;
    trinket2: Trinket22;
    waist: Waist2;
    wrist: Wrist;
}

interface Back2 {
    id: number;
    name: string;
    names: Names;
    icon: string;
    quality: number;
    itemClass: number;
    itemSubClass: number;
    inventoryType: number;
    itemLevel: number;
    stats: Stat2[];
    expansion: number;
    baseItemLevel: number;
    socketInfo: SocketInfo;
    bonusLists: number[];
    context: number;
    tooltipParams: TooltipParams;
    craftedStats: any[];
    gem_id: string;
    enchant_id: number;
}

interface Names {
    de_DE: string;
    en_US: string;
    es_ES: string;
    fr_FR: string;
    it_IT: string;
    pt_BR: string;
    ru_RU: string;
}

interface Stat2 {
    id: number;
    alloc: number;
}

interface SocketInfo {}

interface TooltipParams {
    enchant: number;
}

interface Chest2 {
    id: number;
    name: string;
    names: Names2;
    icon: string;
    quality: number;
    itemClass: number;
    itemSubClass: number;
    inventoryType: number;
    itemLevel: number;
    itemSetId: number;
    allowableClasses: number[];
    specs: number[];
    stats: Stat3[];
    sources: Source[];
    expansion: number;
    baseItemLevel: number;
    socketInfo: SocketInfo2;
    upgrade: Upgrade;
    bonusLists: number[];
    context: number;
    tooltipParams: TooltipParams2;
    craftedStats: any[];
    gem_id: string;
    enchant_id: number;
}

interface Names2 {
    de_DE: string;
    en_US: string;
    es_ES: string;
    fr_FR: string;
    it_IT: string;
    pt_BR: string;
    ru_RU: string;
}

interface Stat3 {
    id: number;
    alloc: number;
}

interface Source {
    instanceId: number;
    encounterId: number;
}

interface SocketInfo2 {}

interface Upgrade {
    level: number;
    max: number;
    group: number;
    bonusId: number;
    currency: Currency;
    itemLevel: number;
}

interface Currency {
    amount: number;
    name: string;
    id: number;
    icon: string;
}

interface TooltipParams2 {
    enchant: number;
}

interface Feet2 {
    id: number;
    name: string;
    names: Names3;
    icon: string;
    quality: number;
    itemClass: number;
    itemSubClass: number;
    inventoryType: number;
    itemLevel: number;
    stats: Stat4[];
    bonusLists: number[];
    chanceBonusList: number[];
    sources: Source2[];
    expansion: number;
    baseItemLevel: number;
    socketInfo: SocketInfo3;
    upgrade: Upgrade2;
    context: number;
    tooltipParams: TooltipParams3;
    craftedStats: any[];
    gem_id: string;
}

interface Names3 {
    de_DE: string;
    en_US: string;
    es_ES: string;
    fr_FR: string;
    it_IT: string;
    pt_BR: string;
    ru_RU: string;
}

interface Stat4 {
    id: number;
    alloc: number;
}

interface Source2 {
    instanceId: number;
    encounterId: number;
}

interface SocketInfo3 {}

interface Upgrade2 {
    level: number;
    max: number;
    group: number;
}

interface TooltipParams3 {}

interface Finger12 {
    id: number;
    name: string;
    names: Names4;
    icon: string;
    quality: number;
    itemClass: number;
    itemSubClass: number;
    inventoryType: number;
    itemLevel: number;
    uniqueEquipped: boolean;
    stats: Stat5[];
    sources: Source3[];
    expansion: number;
    baseItemLevel: number;
    socketInfo: SocketInfo4;
    upgrade: Upgrade3;
    bonusLists: number[];
    context: number;
    tooltipParams: TooltipParams4;
    craftedStats: any[];
    gem_id: string;
    enchant_id: number;
}

interface Names4 {
    de_DE: string;
    en_US: string;
    es_ES: string;
    fr_FR: string;
    it_IT: string;
    pt_BR: string;
    ru_RU: string;
}

interface Stat5 {
    id: number;
    alloc: number;
}

interface Source3 {
    instanceId: number;
    encounterId: number;
}

interface SocketInfo4 {}

interface Upgrade3 {
    level: number;
    max: number;
    group: number;
}

interface TooltipParams4 {
    enchant: number;
}

interface Finger22 {
    id: number;
    name: string;
    names: Names5;
    icon: string;
    quality: number;
    itemClass: number;
    itemSubClass: number;
    inventoryType: number;
    itemLevel: number;
    uniqueEquipped: boolean;
    stats: Stat6[];
    sources: Source4[];
    expansion: number;
    baseItemLevel: number;
    socketInfo: SocketInfo5;
    upgrade: Upgrade4;
    bonusLists: number[];
    context: number;
    tooltipParams: TooltipParams5;
    craftedStats: any[];
    gem_id: string;
    enchant_id: number;
}

interface Names5 {
    de_DE: string;
    en_US: string;
    es_ES: string;
    fr_FR: string;
    it_IT: string;
    pt_BR: string;
    ru_RU: string;
}

interface Stat6 {
    id: number;
    alloc: number;
}

interface Source4 {
    instanceId: number;
    encounterId: number;
}

interface SocketInfo5 {}

interface Upgrade4 {
    level: number;
    max: number;
    group: number;
}

interface TooltipParams5 {
    enchant: number;
}

interface Hands2 {
    id: number;
    name: string;
    names: Names6;
    icon: string;
    quality: number;
    itemClass: number;
    itemSubClass: number;
    inventoryType: number;
    itemLevel: number;
    itemSetId: number;
    allowableClasses: number[];
    specs: number[];
    stats: Stat7[];
    sources: Source5[];
    expansion: number;
    baseItemLevel: number;
    socketInfo: SocketInfo6;
    upgrade: Upgrade5;
    bonusLists: number[];
    context: number;
    tooltipParams: TooltipParams6;
    craftedStats: any[];
    gem_id: string;
    enchant_id: number;
}

interface Names6 {
    de_DE: string;
    en_US: string;
    es_ES: string;
    fr_FR: string;
    it_IT: string;
    pt_BR: string;
    ru_RU: string;
}

interface Stat7 {
    id: number;
    alloc: number;
}

interface Source5 {
    instanceId: number;
    encounterId: number;
}

interface SocketInfo6 {}

interface Upgrade5 {
    level: number;
    max: number;
    group: number;
}

interface TooltipParams6 {
    enchant: number;
}

interface Head2 {
    id: number;
    name: string;
    names: Names7;
    icon: string;
    quality: number;
    itemClass: number;
    itemSubClass: number;
    inventoryType: number;
    itemLevel: number;
    stats: Stat8[];
    sources: Source6[];
    expansion: number;
    baseItemLevel: number;
    socketInfo: SocketInfo7;
    upgrade: Upgrade6;
    bonusLists: number[];
    context: number;
    tooltipParams: TooltipParams7;
    craftedStats: any[];
    gem_id: string;
}

interface Names7 {
    de_DE: string;
    en_US: string;
    es_ES: string;
    fr_FR: string;
    it_IT: string;
    pt_BR: string;
    ru_RU: string;
}

interface Stat8 {
    id: number;
    alloc: number;
}

interface Source6 {
    instanceId: number;
    encounterId: number;
}

interface SocketInfo7 {}

interface Upgrade6 {
    level: number;
    max: number;
    group: number;
}

interface TooltipParams7 {}

interface Legs2 {
    id: number;
    name: string;
    names: Names8;
    icon: string;
    quality: number;
    itemClass: number;
    itemSubClass: number;
    inventoryType: number;
    itemLevel: number;
    itemSetId: number;
    allowableClasses: number[];
    specs: number[];
    stats: Stat9[];
    sources: Source7[];
    expansion: number;
    baseItemLevel: number;
    socketInfo: SocketInfo8;
    upgrade: Upgrade7;
    bonusLists: number[];
    context: number;
    tooltipParams: TooltipParams8;
    craftedStats: any[];
    gem_id: string;
}

interface Names8 {
    de_DE: string;
    en_US: string;
    es_ES: string;
    fr_FR: string;
    it_IT: string;
    pt_BR: string;
    ru_RU: string;
}

interface Stat9 {
    id: number;
    alloc: number;
}

interface Source7 {
    instanceId: number;
    encounterId: number;
}

interface SocketInfo8 {}

interface Upgrade7 {
    level: number;
    max: number;
    group: number;
}

interface TooltipParams8 {}

interface MainHand2 {
    id: number;
    name: string;
    names: Names9;
    icon: string;
    quality: number;
    itemClass: number;
    itemSubClass: number;
    inventoryType: number;
    itemLevel: number;
    stats: Stat10[];
    sources: Source8[];
    expansion: number;
    baseItemLevel: number;
    socketInfo: SocketInfo9;
    upgrade: Upgrade8;
    bonusLists: number[];
    context: number;
    tooltipParams: TooltipParams9;
    craftedStats: any[];
    gem_id: string;
    enchant_id: number;
}

interface Names9 {
    de_DE: string;
    en_US: string;
    es_ES: string;
    fr_FR: string;
    it_IT: string;
    pt_BR: string;
    ru_RU: string;
}

interface Stat10 {
    id: number;
    alloc: number;
}

interface Source8 {
    instanceId: number;
    encounterId: number;
}

interface SocketInfo9 {}

interface Upgrade8 {
    level: number;
    max: number;
    group: number;
}

interface TooltipParams9 {
    enchant: number;
}

interface Neck2 {
    id: number;
    name: string;
    names: Names10;
    icon: string;
    quality: number;
    itemClass: number;
    itemSubClass: number;
    inventoryType: number;
    itemLevel: number;
    itemLimit: ItemLimit;
    stats: Stat11[];
    expansion: number;
    baseItemLevel: number;
    effects: Effect[];
    socketInfo: SocketInfo10;
    bonusLists: number[];
    context: number;
    tooltipParams: TooltipParams10;
    craftedStats: any[];
    gem_id: string;
}

interface Names10 {
    de_DE: string;
    en_US: string;
    es_ES: string;
    fr_FR: string;
    it_IT: string;
    pt_BR: string;
    ru_RU: string;
}

interface ItemLimit {
    category: number;
    quantity: number;
}

interface Stat11 {
    id: number;
    alloc: number;
}

interface Effect {
    id: number;
    index: number;
    spell: Spell;
}

interface Spell {
    id: number;
    name: string;
    icon: string;
}

interface SocketInfo10 {
    PRISMATIC: Prismatic;
}

interface Prismatic {
    type: string;
    staticSlots: number;
    dynamicSlots: number;
    filled: number;
    total: number;
    gems: Gem[];
    gemIds: number[];
    hasUnique: boolean;
}

interface Gem {
    shortName: string;
    name: string;
    id: number;
    quality: number;
    icon: string;
    group: string;
    type: string;
    preferred: Preferred;
    stat: Stat12;
}

interface Preferred {
    roles: string[];
}

interface Stat12 {
    type: string;
    amount: number;
}

interface TooltipParams10 {
    gem0: number;
}

interface Shoulder {
    id: number;
    name: string;
    names: Names11;
    icon: string;
    quality: number;
    itemClass: number;
    itemSubClass: number;
    inventoryType: number;
    itemLevel: number;
    stats: Stat13[];
    sources: Source9[];
    expansion: number;
    baseItemLevel: number;
    socketInfo: SocketInfo11;
    upgrade: Upgrade9;
    bonusLists: number[];
    context: number;
    tooltipParams: TooltipParams11;
    craftedStats: any[];
    gem_id: string;
}

interface Names11 {
    de_DE: string;
    en_US: string;
    es_ES: string;
    fr_FR: string;
    it_IT: string;
    pt_BR: string;
    ru_RU: string;
}

interface Stat13 {
    id: number;
    alloc: number;
}

interface Source9 {
    instanceId: number;
    encounterId: number;
}

interface SocketInfo11 {}

interface Upgrade9 {
    level: number;
    max: number;
    group: number;
    bonusId: number;
    currency: Currency2;
    itemLevel: number;
}

interface Currency2 {
    amount: number;
    name: string;
    id: number;
    icon: string;
}

interface TooltipParams11 {}

interface Trinket12 {
    id: number;
    name: string;
    names: Names12;
    icon: string;
    quality: number;
    itemClass: number;
    itemSubClass: number;
    inventoryType: number;
    itemLevel: number;
    uniqueEquipped: boolean;
    stats: Stat14[];
    sources: Source10[];
    expansion: number;
    baseItemLevel: number;
    socketInfo: SocketInfo12;
    upgrade: Upgrade10;
    bonusLists: number[];
    context: number;
    tooltipParams: TooltipParams12;
    craftedStats: any[];
    gem_id: string;
}

interface Names12 {
    de_DE: string;
    en_US: string;
    es_ES: string;
    fr_FR: string;
    it_IT: string;
    pt_BR: string;
    ru_RU: string;
}

interface Stat14 {
    id: number;
    alloc: number;
}

interface Source10 {
    instanceId: number;
    encounterId: number;
}

interface SocketInfo12 {}

interface Upgrade10 {
    level: number;
    max: number;
    group: number;
    bonusId: number;
    currency: Currency3;
    itemLevel: number;
}

interface Currency3 {
    amount: number;
    name: string;
    id: number;
    icon: string;
}

interface TooltipParams12 {}

interface Trinket22 {
    id: number;
    name: string;
    names: Names13;
    icon: string;
    quality: number;
    itemClass: number;
    itemSubClass: number;
    inventoryType: number;
    itemLevel: number;
    uniqueEquipped: boolean;
    stats: Stat15[];
    sources: Source11[];
    expansion: number;
    baseItemLevel: number;
    socketInfo: SocketInfo13;
    upgrade: Upgrade11;
    bonusLists: number[];
    context: number;
    tooltipParams: TooltipParams13;
    craftedStats: any[];
    gem_id: string;
}

interface Names13 {
    de_DE: string;
    en_US: string;
    es_ES: string;
    fr_FR: string;
    it_IT: string;
    pt_BR: string;
    ru_RU: string;
}

interface Stat15 {
    id: number;
    alloc: number;
}

interface Source11 {
    instanceId: number;
    encounterId: number;
}

interface SocketInfo13 {}

interface Upgrade11 {
    level: number;
    max: number;
    group: number;
    bonusId: number;
    currency: Currency4;
    itemLevel: number;
}

interface Currency4 {
    amount: number;
    name: string;
    id: number;
    icon: string;
}

interface TooltipParams13 {}

interface Waist2 {
    id: number;
    name: string;
    names: Names14;
    icon: string;
    quality: number;
    itemClass: number;
    itemSubClass: number;
    inventoryType: number;
    itemLevel: number;
    stats: Stat16[];
    bonusLists: number[];
    chanceBonusList: number[];
    sources: Source12[];
    expansion: number;
    baseItemLevel: number;
    socketInfo: SocketInfo14;
    upgrade: Upgrade12;
    context: number;
    tooltipParams: TooltipParams14;
    craftedStats: any[];
    gem_id: string;
}

interface Names14 {
    de_DE: string;
    en_US: string;
    es_ES: string;
    fr_FR: string;
    it_IT: string;
    pt_BR: string;
    ru_RU: string;
}

interface Stat16 {
    id: number;
    alloc: number;
}

interface Source12 {
    instanceId: number;
    encounterId: number;
}

interface SocketInfo14 {}

interface Upgrade12 {
    level: number;
    max: number;
    group: number;
    bonusId: number;
    currency: Currency5;
    itemLevel: number;
}

interface Currency5 {
    amount: number;
    name: string;
    id: number;
    icon: string;
}

interface TooltipParams14 {}

interface Wrist {
    id: number;
    name: string;
    names: Names15;
    icon: string;
    quality: number;
    itemClass: number;
    itemSubClass: number;
    inventoryType: number;
    itemLevel: number;
    itemLimit: ItemLimit2;
    stats: Stat17[];
    expansion: number;
    baseItemLevel: number;
    effects: Effect2[];
    socketInfo: SocketInfo15;
    bonusLists: number[];
    context: number;
    tooltipParams: TooltipParams15;
    craftedStats: any[];
    gem_id: string;
}

interface Names15 {
    de_DE: string;
    en_US: string;
    es_ES: string;
    fr_FR: string;
    it_IT: string;
    pt_BR: string;
    ru_RU: string;
}

interface ItemLimit2 {
    category: number;
    quantity: number;
}

interface Stat17 {
    id: number;
    alloc: number;
}

interface Effect2 {
    id: number;
    index: number;
    spell: Spell2;
}

interface Spell2 {
    id: number;
    name: string;
    icon: string;
}

interface SocketInfo15 {
    PRISMATIC: Prismatic2;
}

interface Prismatic2 {
    type: string;
    staticSlots: number;
    dynamicSlots: number;
    filled: number;
    total: number;
    gems: Gem2[];
    gemIds: number[];
    hasUnique: boolean;
}

interface Gem2 {
    shortName: string;
    name: string;
    id: number;
    quality: number;
    icon: string;
    group: string;
    type: string;
    preferred: Preferred2;
    stat: Stat18;
}

interface Preferred2 {
    roles: string[];
}

interface Stat18 {
    type: string;
    amount: number;
}

interface TooltipParams15 {
    gem0: number;
}

interface TalentLoadout {
    index: number;
    active: boolean;
    name: string;
    rawString: string;
    string: string;
    talents: Talents;
}

interface Talents {
    className: string;
    classId: number;
    specName: string;
    specId: number;
    fullNodeOrder: number[];
    spent: Spent;
    entries: Entry[];
    rawString: string;
    rawInput: string;
    unknownEntries: any[];
}

interface Spent {
    spec: number;
    class: number;
}

interface Entry {
    entry: Entry2;
    rank: number;
}

interface Entry2 {
    id: number;
    definitionId: number;
    maxRanks: number;
    type: string;
    name: string;
    spellId: number;
    icon: string;
    index: number;
    nodeId: number;
    node: Node;
    tree: string;
}

interface Node {
    id: number;
    name: string;
    type: string;
    posX: number;
    posY: number;
    maxRanks: number;
    entryNode?: boolean;
    next: number[];
    prev: number[];
    entries: Entry3[];
    reqPoints?: number;
}

interface Entry3 {
    id: number;
    definitionId: number;
    maxRanks: number;
    type: string;
    name: string;
    spellId: number;
    icon: string;
    index: number;
}

interface V2 {
    profile: Profile;
    equipment: Equipment2;
    specializations: Specializations2;
}

interface Profile {
    _links: Links;
    id: number;
    name: string;
    gender: Gender;
    faction: Faction;
    race: Race;
    character_class: CharacterClass;
    active_spec: ActiveSpec;
    realm: Realm;
    guild: Guild2;
    level: number;
    experience: number;
    achievement_points: number;
    achievements: Achievements;
    titles: Titles;
    pvp_summary: PvpSummary;
    encounters: Encounters;
    media: Media;
    last_login_timestamp: number;
    average_item_level: number;
    equipped_item_level: number;
    specializations: Specializations;
    statistics: Statistics2;
    mythic_keystone_profile: MythicKeystoneProfile;
    equipment: Equipment;
    appearance: Appearance;
    collections: Collections;
    active_title: ActiveTitle;
    reputations: Reputations;
    quests: Quests;
    achievements_statistics: AchievementsStatistics;
    professions: Professions;
    covenant_progress: CovenantProgress;
}

interface Links {
    self: Self;
}

interface Self {
    href: string;
}

interface Gender {
    type: string;
    name: string;
}

interface Faction {
    type: string;
    name: string;
}

interface Race {
    key: Key;
    name: string;
    id: number;
}

interface Key {
    href: string;
}

interface CharacterClass {
    key: Key2;
    name: string;
    id: number;
}

interface Key2 {
    href: string;
}

interface ActiveSpec {
    key: Key3;
    name: string;
    id: number;
}

interface Key3 {
    href: string;
}

interface Realm {
    key: Key4;
    name: string;
    id: number;
    slug: string;
}

interface Key4 {
    href: string;
}

interface Guild2 {
    key: Key5;
    name: string;
    id: number;
    realm: Realm2;
    faction: Faction2;
}

interface Key5 {
    href: string;
}

interface Realm2 {
    key: Key6;
    name: string;
    id: number;
    slug: string;
}

interface Key6 {
    href: string;
}

interface Faction2 {
    type: string;
    name: string;
}

interface Achievements {
    href: string;
}

interface Titles {
    href: string;
}

interface PvpSummary {
    href: string;
}

interface Encounters {
    href: string;
}

interface Media {
    href: string;
}

interface Specializations {
    href: string;
}

interface Statistics2 {
    href: string;
}

interface MythicKeystoneProfile {
    href: string;
}

interface Equipment {
    href: string;
}

interface Appearance {
    href: string;
}

interface Collections {
    href: string;
}

interface ActiveTitle {
    key: Key7;
    name: string;
    id: number;
    display_string: string;
}

interface Key7 {
    href: string;
}

interface Reputations {
    href: string;
}

interface Quests {
    href: string;
}

interface AchievementsStatistics {
    href: string;
}

interface Professions {
    href: string;
}

interface CovenantProgress {
    chosen_covenant: ChosenCovenant;
    renown_level: number;
    soulbinds: Soulbinds;
}

interface ChosenCovenant {
    key: Key8;
    name: string;
    id: number;
}

interface Key8 {
    href: string;
}

interface Soulbinds {
    href: string;
}

interface Equipment2 {
    _links: Links2;
    character: Character2;
    equipped_items: EquippedItem[];
    equipped_item_sets: EquippedItemSet[];
}

interface Links2 {
    self: Self2;
}

interface Self2 {
    href: string;
}

interface Character2 {
    key: Key9;
    name: string;
    id: number;
    realm: Realm3;
}

interface Key9 {
    href: string;
}

interface Realm3 {
    key: Key10;
    name: string;
    id: number;
    slug: string;
}

interface Key10 {
    href: string;
}

interface EquippedItem {
    item: Item;
    slot: Slot;
    quantity: number;
    context: number;
    bonus_list: number[];
    quality: Quality;
    name: string;
    modified_appearance_id?: number;
    media: Media2;
    item_class: ItemClass;
    item_subclass: ItemSubclass;
    inventory_type: InventoryType;
    binding: Binding;
    armor?: Armor;
    stats: Stat19[];
    sell_price?: SellPrice;
    requirements?: Requirements;
    level: Level2;
    transmog?: Transmog;
    durability?: Durability;
    name_description?: NameDescription;
    sockets?: Socket[];
    limit_category?: string;
    spells?: Spell3[];
    description?: string;
    is_subclass_hidden?: boolean;
    enchantments?: Enchantment[];
    set?: Set;
    unique_equipped?: string;
    weapon?: Weapon;
}

interface Item {
    key: Key11;
    id: number;
}

interface Key11 {
    href: string;
}

interface Slot {
    type: string;
    name: string;
}

interface Quality {
    type: string;
    name: string;
}

interface Media2 {
    key: Key12;
    id: number;
}

interface Key12 {
    href: string;
}

interface ItemClass {
    key: Key13;
    name: string;
    id: number;
}

interface Key13 {
    href: string;
}

interface ItemSubclass {
    key: Key14;
    name: string;
    id: number;
}

interface Key14 {
    href: string;
}

interface InventoryType {
    type: string;
    name: string;
}

interface Binding {
    type: string;
    name: string;
}

interface Armor {
    value: number;
    display: Display;
}

interface Display {
    display_string: string;
    color: Color;
}

interface Color {
    r: number;
    g: number;
    b: number;
    a: number;
}

interface Stat19 {
    type: Type;
    value: number;
    display: Display2;
    is_negated?: boolean;
    is_equip_bonus?: boolean;
}

interface Type {
    type: string;
    name: string;
}

interface Display2 {
    display_string: string;
    color: Color2;
}

interface Color2 {
    r: number;
    g: number;
    b: number;
    a: number;
}

interface SellPrice {
    value: number;
    display_strings: DisplayStrings;
}

interface DisplayStrings {
    header: string;
    gold: string;
    silver: string;
    copper: string;
}

interface Requirements {
    level: Level;
    playable_classes?: PlayableClasses;
}

interface Level {
    value: number;
    display_string: string;
}

interface PlayableClasses {
    links: Link[];
    display_string: string;
}

interface Link {
    key: Key15;
    name: string;
    id: number;
}

interface Key15 {
    href: string;
}

interface Level2 {
    value: number;
    display_string: string;
}

interface Transmog {
    item: Item2;
    display_string: string;
    item_modified_appearance_id: number;
}

interface Item2 {
    key: Key16;
    name: string;
    id: number;
}

interface Key16 {
    href: string;
}

interface Durability {
    value: number;
    display_string: string;
}

interface NameDescription {
    display_string: string;
    color: Color3;
}

interface Color3 {
    r: number;
    g: number;
    b: number;
    a: number;
}

interface Socket {
    socket_type: SocketType;
    item: Item3;
    display_string: string;
    media: Media3;
}

interface SocketType {
    type: string;
    name: string;
}

interface Item3 {
    key: Key17;
    name: string;
    id: number;
}

interface Key17 {
    href: string;
}

interface Media3 {
    key: Key18;
    id: number;
}

interface Key18 {
    href: string;
}

interface Spell3 {
    spell: Spell4;
    description: string;
    display_color?: DisplayColor;
}

interface Spell4 {
    key: Key19;
    name: string;
    id: number;
}

interface Key19 {
    href: string;
}

interface DisplayColor {
    r: number;
    g: number;
    b: number;
    a: number;
}

interface Enchantment {
    display_string: string;
    source_item?: SourceItem;
    enchantment_id: number;
    enchantment_slot: EnchantmentSlot;
}

interface SourceItem {
    key: Key20;
    name: string;
    id: number;
}

interface Key20 {
    href: string;
}

interface EnchantmentSlot {
    id: number;
    type: string;
}

interface Set {
    item_set: ItemSet;
    items: Item4[];
    effects: Effect3[];
    legacy: string;
    display_string: string;
}

interface ItemSet {
    key: Key21;
    name: string;
    id: number;
}

interface Key21 {
    href: string;
}

interface Item4 {
    item: Item5;
    is_equipped?: boolean;
}

interface Item5 {
    key: Key22;
    name: string;
    id: number;
}

interface Key22 {
    href: string;
}

interface Effect3 {
    display_string: string;
    required_count: number;
}

interface Weapon {
    damage: Damage;
    attack_speed: AttackSpeed;
    dps: Dps2;
}

interface Damage {
    min_value: number;
    max_value: number;
    display_string: string;
    damage_class: DamageClass;
}

interface DamageClass {
    type: string;
    name: string;
}

interface AttackSpeed {
    value: number;
    display_string: string;
}

interface Dps2 {
    value: number;
    display_string: string;
}

interface EquippedItemSet {
    item_set: ItemSet2;
    items: Item6[];
    effects: Effect4[];
    legacy: string;
    display_string: string;
}

interface ItemSet2 {
    key: Key23;
    name: string;
    id: number;
}

interface Key23 {
    href: string;
}

interface Item6 {
    item: Item7;
    is_equipped?: boolean;
}

interface Item7 {
    key: Key24;
    name: string;
    id: number;
}

interface Key24 {
    href: string;
}

interface Effect4 {
    display_string: string;
    required_count: number;
}

interface Specializations2 {
    _links: Links3;
    specializations: Specialization[];
    active_specialization: ActiveSpecialization;
    character: Character3;
}

interface Links3 {
    self: Self3;
}

interface Self3 {
    href: string;
}

interface Specialization {
    specialization: Specialization2;
    loadouts: Loadout[];
}

interface Specialization2 {
    key: Key25;
    name: string;
    id: number;
}

interface Key25 {
    href: string;
}

interface Loadout {
    is_active: boolean;
    talent_loadout_code: string;
    selected_class_talents: SelectedClassTalent[];
    selected_spec_talents: SelectedSpecTalent[];
}

interface SelectedClassTalent {
    id: number;
    rank: number;
    tooltip: Tooltip;
    default_points?: number;
}

interface Tooltip {
    talent: Talent;
    spell_tooltip: SpellTooltip;
}

interface Talent {
    key: Key26;
    name: string;
    id: number;
}

interface Key26 {
    href: string;
}

interface SpellTooltip {
    spell: Spell5;
    description?: string;
    cast_time: string;
    power_cost?: string;
    range?: string;
    cooldown?: string;
}

interface Spell5 {
    key: Key27;
    name: string;
    id: number;
}

interface Key27 {
    href: string;
}

interface SelectedSpecTalent {
    id: number;
    rank: number;
    tooltip: Tooltip2;
}

interface Tooltip2 {
    talent: Talent2;
    spell_tooltip: SpellTooltip2;
}

interface Talent2 {
    key: Key28;
    name: string;
    id: number;
}

interface Key28 {
    href: string;
}

interface SpellTooltip2 {
    spell: Spell6;
    description: string;
    cast_time: string;
    power_cost?: string;
    range?: string;
    cooldown?: string;
}

interface Spell6 {
    key: Key29;
    name: string;
    id: number;
}

interface Key29 {
    href: string;
}

interface ActiveSpecialization {
    key: Key30;
    name: string;
    id: number;
}

interface Key30 {
    href: string;
}

interface Character3 {
    key: Key31;
    name: string;
    id: number;
    realm: Realm4;
}

interface Key31 {
    href: string;
}

interface Realm4 {
    key: Key32;
    name: string;
    id: number;
    slug: string;
}

interface Key32 {
    href: string;
}

interface SimcItems {}

interface Mem {
    max: number;
    samples: number[];
}

interface Flightmaster {
    stages: Stage[];
    iterationsActual: number;
    iterationsEstimate: number;
    iterationsEstimateDiff: number;
    duration: number;
}

interface Stage {
    stage: number;
    actors: number;
    totalActors: number;
    profilesets: number;
    targetError: number;
    stats: Stats2;
    stageDuration: number;
    sims: string[];
    iterations: number;
}

interface Stats2 {
    timing: Timing;
}

interface Timing {
    chunk_start_delay: number[];
}
