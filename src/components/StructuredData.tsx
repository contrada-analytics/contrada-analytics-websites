export function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'DataArk Labs',
    description: 'AI agents and analytics platforms for CPG brands, retailers, and distributors. Specialized in trade spend optimization, promotional analytics, and revenue growth management.',
    url: 'https://dataarklabs.com',
    logo: 'https://dataarklabs.com/images/logo.png',
    image: 'https://dataarklabs.com/images/og-image.png',
    telephone: '', // Add your phone number when available
    email: '', // Add your contact email
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'AU', // Update as needed
    },
    areaServed: [
      {
        '@type': 'Country',
        name: 'United Kingdom'
      },
      {
        '@type': 'Country',
        name: 'Australia'
      },
      {
        '@type': 'Country',
        name: 'United States'
      }
    ],
    knowsAbout: [
      'CPG Analytics',
      'Trade Spend Optimization',
      'Promotional Analytics',
      'AI Agents',
      'Workflow Automation',
      'Revenue Growth Management',
      'Data Analytics',
      'AI Governance'
    ],
    serviceType: [
      'Custom AI Agent Development',
      'AI/Data Readiness Assessment',
      'AI Governance Framework',
      'Workflow Automation',
      'Data Analytics',
      'System Integration'
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '1' // Update with actual reviews
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
