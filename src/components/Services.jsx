import './Services.css'

function Services() {
  const services = [
    {
      title: 'Asphalt Arbeiten',
      description: 'Professionelle Asphaltierung für Einfahrten, Parkplätze und Wege. Wir bieten komplette Lösungen von der Vorbereitung bis zur Fertigstellung.',
      icon: '🛣️'
    },
    {
      title: 'Pflaster Arbeiten',
      description: 'Hochwertige Pflasterarbeiten für Terrassen, Gehwege und Außenanlagen. Mit verschiedenen Materialien und Designs nach Ihren Wünschen.',
      icon: '🧱'
    },
    {
      title: 'Gartenpflege',
      description: 'Regelmäßige und professionelle Gartenpflege, Rasenmähen, Heckenschneiden und Gartengestaltung für gepflegte Außenanlagen.',
      icon: '🌿'
    },
    {
      title: 'Hausmeister Service',
      description: 'Zuverlässiger Hausmeisterdienst für Wohn- und Geschäftsobjekte. Von Winterdienst bis zu kleineren Reparaturen.',
      icon: '🔧'
    },
    {
      title: 'Landschaftsbau',
      description: 'Komplette Gartengestaltung und Landschaftsbau. Von der Planung bis zur Umsetzung Ihrer Traumgarten-Vision.',
      icon: '🏡'
    },
    {
      title: 'Erdarbeiten',
      description: 'Professionelle Erdarbeiten, Aushub und Geländemodellierung für verschiedenste Bauprojekte.',
      icon: '🚜'
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
