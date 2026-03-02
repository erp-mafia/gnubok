import type { ProviderInfo } from '@/types'

export const PROVIDERS: ProviderInfo[] = [
  {
    id: 'fortnox',
    name: 'Fortnox',
    description: 'Sveriges mest använda bokföringsprogram för företagare.',
    authStrategy: 'oauth2',
    logo: '/providers/FNOX.ST.svg',
    website: 'https://www.fortnox.se',
  },
  {
    id: 'visma',
    name: 'Visma eEkonomi',
    description: 'Enkel och smart bokföring online från Visma.',
    authStrategy: 'oauth2',
    logo: '/providers/visma-logo.svg',
    website: 'https://vismaspcs.se',
  },
  {
    id: 'briox',
    name: 'Briox',
    description: 'Molnbaserat bokföringsprogram med öppet API.',
    authStrategy: 'application_token',
    logo: '/providers/Briox_logo.png',
    website: 'https://www.briox.se',
  },
  {
    id: 'bokio',
    name: 'Bokio',
    description: 'Gratis bokföring, fakturering och skattedeklaration.',
    authStrategy: 'static_api_key',
    logo: '/providers/bokio-logo.png',
    website: 'https://www.bokio.se',
  },
  {
    id: 'bjorn_lunden',
    name: 'Björn Lundén',
    description: 'Komplett ekonomisystem för småföretagare.',
    authStrategy: 'client_credentials',
    logo: '/providers/bjorn-lunden-logo.png',
    website: 'https://www.bjornlunden.se',
  },
]

export function getProvider(id: string): ProviderInfo | undefined {
  return PROVIDERS.find((p) => p.id === id)
}
