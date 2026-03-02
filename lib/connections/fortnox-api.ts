export interface FortnoxCompanyInfo {
  companyName: string
  organizationNumber: string
  address: string
  city: string
  zipCode: string
  databaseNumber: number | null
  countryCode: string
}

/**
 * Fetches company information from the Fortnox API.
 * Returns null if the request fails — callers should treat this as non-blocking.
 */
export async function fetchFortnoxCompanyInfo(
  accessToken: string
): Promise<FortnoxCompanyInfo | null> {
  try {
    const res = await fetch('https://api.fortnox.se/3/companyinformation', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        Accept: 'application/json',
      },
    })

    if (!res.ok) {
      console.error(`Fortnox company info request failed: ${res.status} ${res.statusText}`)
      return null
    }

    const data = await res.json()
    const info = data.CompanyInformation

    if (!info) {
      console.error('Fortnox response missing CompanyInformation field')
      return null
    }

    return {
      companyName: info.CompanyName || '',
      organizationNumber: info.OrganizationNumber || '',
      address: info.Address || '',
      city: info.City || '',
      zipCode: info.ZipCode || '',
      databaseNumber: info.DatabaseNumber ?? null,
      countryCode: info.CountryCode || '',
    }
  } catch (err) {
    console.error('Failed to fetch Fortnox company info:', err)
    return null
  }
}

/**
 * Fetches SIE4 data from Fortnox for a given financial year.
 * Returns raw bytes (ArrayBuffer) for encoding detection, or null on failure.
 *
 * @param financialYear 0 = current, 1 = previous, 2 = two years ago, etc.
 */
export async function fetchFortnoxSIE(
  accessToken: string,
  financialYear: number = 0
): Promise<ArrayBuffer | null> {
  try {
    const res = await fetch(
      `https://api.fortnox.se/3/sie/4?financialyear=${financialYear}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          Accept: 'application/octet-stream',
        },
      }
    )

    if (!res.ok) {
      console.error(`Fortnox SIE request failed: ${res.status} ${res.statusText}`)
      return null
    }

    return await res.arrayBuffer()
  } catch (err) {
    console.error('Failed to fetch Fortnox SIE data:', err)
    return null
  }
}
