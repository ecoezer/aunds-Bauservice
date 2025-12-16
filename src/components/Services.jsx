import './Services.css'

function Services() {
  const services = [
    {
      title: 'Landschaftsbau / Landschaftsplanung',
      description: 'Professionelle Gestaltung und Planung von Außenanlagen. Wir verwirklichen Ihre Traumlandschaft mit modernem Design und hoher Qualität.',
      icon: '📐'
    },
    {
      title: 'Neupflanzungen und Ersatzpflanzungen',
      description: 'Fachgerechte Bepflanzung von Gärten und Außenanlagen. Auswahl der richtigen Pflanzen für Ihre spezifische Situation.',
      icon: '🌱'
    },
    {
      title: 'Erdarbeiten und Baggerarbeiten',
      description: 'Professionelle Erdarbeiten mit moderner Ausrüstung. Aushub, Geländemodellierung und Vorbereitung für Bauprojekte.',
      icon: '🏗️'
    },
    {
      title: 'Zaunbau',
      description: 'Hochwertige Zaunbau-Lösungen für jedes Grundstück. Von klassischen bis modernen Designs - wir realisieren Ihre Vorstellung.',
      icon: '🚪'
    },
    {
      title: 'Gabionen / Pergolen / Mauern',
      description: 'Gestaltung von Außenbereichen mit Gabionen, Pergolen und Mauern. Stabilität und Ästhetik kombiniert.',
      icon: '🧱'
    },
    {
      title: 'Gartenbau und Gartenplanung',
      description: 'Umfassende Gartengestaltung von der Planung bis zur Umsetzung. Wir schaffen grüne Oasen nach Ihren Wünschen.',
      icon: '🌿'
    },
    {
      title: 'Pflasterarbeiten',
      description: 'Hochwertige Pflasterarbeiten für Terrassen, Gehwege und Außenanlagen. Verschiedene Materialien und professionelle Verlegung.',
      icon: '🛣️'
    },
    {
      title: 'Treppenbau',
      description: 'Massiver und funktionaler Treppenbau für Innen- und Außenbereiche. Sichere und ansprechende Lösung für Höhenunterschiede.',
      icon: '🪜'
    },
    {
      title: 'Rollrasen',
      description: 'Sofortiger, grüner Rasen durch hochwertige Rollrasen-Verlegung. Schnelle und sichere Lösung für Grünflächen.',
      icon: '🌾'
    },
    {
      title: 'Natursteinarbeiten',
      description: 'Edle Natursteinarbeiten für Gärten und Außenanlagen. Dauerhaft schön und funktional gestaltet.',
      icon: '💎'
    },
    {
      title: 'Terrassenbau',
      description: 'Planung und Bau von Terrassen für erweitertes Wohngefühl. Stabile Konstruktion und hochwertige Materialien.',
      icon: '🏡'
    }
  ]

  return (
    <section className="services" id="services">
      <div className="services-container">
        <h2 className="services-title">Unsere Leistungen</h2>
        <p className="services-subtitle">
          Vielfältige Dienstleistungen rund um Bau und Garten
        </p>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
