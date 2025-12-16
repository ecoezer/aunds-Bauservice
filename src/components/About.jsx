import './About.css'

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-content">
          <h2 className="about-title">Über uns</h2>
          <div className="about-text">
            <p>
              A&S Bauservice und Garten Landschaftsbau ist Ihr kompetenter Partner
              für alle Arbeiten rund um Haus und Garten. Mit langjähriger Erfahrung
              und einem engagierten Team bieten wir professionelle Dienstleistungen
              im Bereich Bau und Gartenpflege.
            </p>
            <p>
              Unser Anspruch ist es, qualitativ hochwertige Arbeit zu fairen Preisen
              anzubieten. Dabei legen wir großen Wert auf Zuverlässigkeit, Pünktlichkeit
              und Kundenzufriedenheit.
            </p>
          </div>

          <div className="about-features">
            <div className="feature">
              <div className="feature-icon">01</div>
              <div className="feature-content">
                <h3>Erfahrung</h3>
                <p>Jahrelange Expertise im Baugewerbe</p>
              </div>
            </div>
            <div className="feature">
              <div className="feature-icon">02</div>
              <div className="feature-content">
                <h3>Qualität</h3>
                <p>Hochwertige Materialien und Ausführung</p>
              </div>
            </div>
            <div className="feature">
              <div className="feature-icon">03</div>
              <div className="feature-content">
                <h3>Zuverlässigkeit</h3>
                <p>Termintreue und verlässliche Arbeit</p>
              </div>
            </div>
            <div className="feature">
              <div className="feature-icon">04</div>
              <div className="feature-content">
                <h3>Kundenservice</h3>
                <p>Persönliche Beratung und Betreuung</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
