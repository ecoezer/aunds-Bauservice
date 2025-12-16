import './Services.css'

function Services() {
  const services = [
    {
      title: 'Landschaftsbau / Landschaftsplanung',
      description: 'Professionelle Gestaltung und Planung von Außenanlagen. Wir verwirklichen Ihre Traumlandschaft mit modernem Design und hoher Qualität.',
      image: 'https://images.pexels.com/photos/15456924/pexels-photo-15456924.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Neupflanzungen und Ersatzpflanzungen',
      description: 'Fachgerechte Bepflanzung von Gärten und Außenanlagen. Auswahl der richtigen Pflanzen für Ihre spezifische Situation.',
      image: 'https://images.pexels.com/photos/5231236/pexels-photo-5231236.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Erdarbeiten und Baggerarbeiten',
      description: 'Professionelle Erdarbeiten mit moderner Ausrüstung. Aushub, Geländemodellierung und Vorbereitung für Bauprojekte.',
      image: 'https://images.pexels.com/photos/12164798/pexels-photo-12164798.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Zaunbau',
      description: 'Hochwertige Zaunbau-Lösungen für jedes Grundstück. Von klassischen bis modernen Designs - wir realisieren Ihre Vorstellung.',
      image: 'https://images.pexels.com/photos/683402/pexels-photo-683402.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Gabionen / Pergolen / Mauern',
      description: 'Gestaltung von Außenbereichen mit Gabionen, Pergolen und Mauern. Stabilität und Ästhetik kombiniert.',
      image: 'https://images.pexels.com/photos/11257165/pexels-photo-11257165.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Gartenbau und Gartenplanung',
      description: 'Umfassende Gartengestaltung von der Planung bis zur Umsetzung. Wir schaffen grüne Oasen nach Ihren Wünschen.',
      image: 'https://images.pexels.com/photos/33243204/pexels-photo-33243204.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Pflasterarbeiten',
      description: 'Hochwertige Pflasterarbeiten für Terrassen, Gehwege und Außenanlagen. Verschiedene Materialien und professionelle Verlegung.',
      image: 'https://images.pexels.com/photos/8480554/pexels-photo-8480554.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Treppenbau',
      description: 'Massiver und funktionaler Treppenbau für Innen- und Außenbereiche. Sichere und ansprechende Lösung für Höhenunterschiede.',
      image: 'https://images.pexels.com/photos/13610014/pexels-photo-13610014.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Rollrasen',
      description: 'Sofortiger, grüner Rasen durch hochwertige Rollrasen-Verlegung. Schnelle und sichere Lösung für Grünflächen.',
      image: '/chatgpt_image_dec_16,_2025,_11_52_36_am.png'
    },
    {
      title: 'Natursteinarbeiten',
      description: 'Edle Natursteinarbeiten für Gärten und Außenanlagen. Dauerhaft schön und funktional gestaltet.',
      image: '/chatgpt_image_dec_16,_2025,_11_18_13_am.png'
    },
    {
      title: 'Terrassenbau',
      description: 'Planung und Bau von Terrassen für erweitertes Wohngefühl. Stabile Konstruktion und hochwertige Materialien.',
      image: '/chatgpt_image_dec_16,_2025,_11_36_43_am.png'
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
