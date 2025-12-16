import './Stats.css'

function Stats() {
  const stats = [
    { number: '15+', label: 'Jahre Erfahrung' },
    { number: '500+', label: 'Projekte abgeschlossen' },
    { number: '250+', label: 'Zufriedene Kunden' },
    { number: '100%', label: 'Qualitätsgarantie' }
  ]

  return (
    <section className="stats">
      <div className="stats-container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
