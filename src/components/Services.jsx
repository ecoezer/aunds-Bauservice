import './Services.css'

function Services() {
  const services = [
    {
      title: 'Landschaftsbau / Landschaftsplanung',
      description: 'Professionelle Gestaltung und Planung von Außenanlagen. Wir verwirklichen Ihre Traumlandschaft mit modernem Design und hoher Qualität.',
      image: 'https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Neupflanzungen und Ersatzpflanzungen',
      description: 'Fachgerechte Bepflanzung von Gärten und Außenanlagen. Auswahl der richtigen Pflanzen für Ihre spezifische Situation.',
      image: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Erdarbeiten und Baggerarbeiten',
      description: 'Professionelle Erdarbeiten mit moderner Ausrüstung. Aushub, Geländemodellierung und Vorbereitung für Bauprojekte.',
      image: 'https://images.pexels.com/photos/3862619/pexels-photo-3862619.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Zaunbau',
      description: 'Hochwertige Zaunbau-Lösungen für jedes Grundstück. Von klassischen bis modernen Designs - wir realisieren Ihre Vorstellung.',
      image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Gabionen / Pergolen / Mauern',
      description: 'Gestaltung von Außenbereichen mit Gabionen, Pergolen und Mauern. Stabilität und Ästhetik kombiniert.',
      image: 'https://images.pexels.com/photos/2487720/pexels-photo-2487720.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Gartenbau und Gartenplanung',
      description: 'Umfassende Gartengestaltung von der Planung bis zur Umsetzung. Wir schaffen grüne Oasen nach Ihren Wünschen.',
      image: 'https://images.pexels.com/photos/3452295/pexels-photo-3452295.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Pflasterarbeiten',
      description: 'Hochwertige Pflasterarbeiten für Terrassen, Gehwege und Außenanlagen. Verschiedene Materialien und professionelle Verlegung.',
      image: 'https://images.pexels.com/photos/3556057/pexels-photo-3556057.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Treppenbau',
      description: 'Massiver und funktionaler Treppenbau für Innen- und Außenbereiche. Sichere und ansprechende Lösung für Höhenunterschiede.',
      image: 'https://images.pexels.com/photos/1974587/pexels-photo-1974587.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Rollrasen',
      description: 'Sofortiger, grüner Rasen durch hochwertige Rollrasen-Verlegung. Schnelle und sichere Lösung für Grünflächen.',
      image: 'https://images.pexels.com/photos/34628/tree-bird-birds-on-a-tree.jpg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Natursteinarbeiten',
      description: 'Edle Natursteinarbeiten für Gärten und Außenanlagen. Dauerhaft schön und funktional gestaltet.',
      image: 'https://images.pexels.com/photos/3556131/pexels-photo-3556131.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Terrassenbau',
      description: 'Planung und Bau von Terrassen für erweitertes Wohngefühl. Stabile Konstruktion und hochwertige Materialien.',
      image: 'https://images.pexels.com/photos/1054974/pexels-photo-1054974.jpeg?auto=compress&cs=tinysrgb&w=600'
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
              <div className="service-image">
                <img src={service.image} alt={service.title} />
              </div>
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
