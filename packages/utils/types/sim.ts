export interface SimResponse {
  jobId: string
  simId: string
  error?: string
  simcVersion: string
  title: string
  type: string
  source: string
  origin: string
  player: string
  faction: string
  class: string
  race: string
  spec: string
  iterations: string
  totalIterations: number
  smartHighPrecision: boolean
  customSmartStages: boolean
  fightStyle: string
  fightLength: number
  reportDetails: boolean
  enemyCount: number
  enemyType: string
  rankable: boolean
  expertMode: boolean
  created: string
  frontendVersion: string
  userIp: string
  userLevel: string
  premium: boolean
  concurrency: number
  skipEnabled: boolean
}


